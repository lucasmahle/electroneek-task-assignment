import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  EnumCallStatus,
  EnumCallType,
  ICallOption,
  ICall,
} from "@shared/model/call"
import { Call } from '../models/call';
import { ICat } from "@shared/model/cat"
import { CONFIG_TOKEN, IConfig } from '../config/config';
import { ConsoleService } from './console.service';
import { WebSocketService } from './web-socket.service';

const awiter = (time: number) => new Promise(r => setTimeout(r, time))

@Injectable({
  providedIn: 'root'
})
export class CallManagerService {
  private callsBus$ = new BehaviorSubject<ICall[]>([]);
  calls$ = this.callsBus$.asObservable();

  constructor(
    @Inject(CONFIG_TOKEN) private readonly config: IConfig,
    private readonly http: HttpClient,
    private readonly consoleService: ConsoleService,
    private webSocketService: WebSocketService,
  ) { }

  add(call: ICallOption){
    this.calls$
      .pipe(take(1))
      .subscribe(async (calls: ICall[]) => {
        const callEntity = new Call(call)
        calls.push(callEntity);
        this.callsBus$.next(calls);

        await awiter(callEntity.delay)
        if(call.type == EnumCallType.WEBSOCKET_ASYNC){
          this.dispatchWebSocket(callEntity)
        }else {
          this.dispatchCall(callEntity)
        }
      })
  }

  private logCall(call: Call, message: string){
    this.consoleService.log('Call', `Call ${call.uuid.substring(0, 8)} ${message}`);
  }

  private dispatchWebSocket(call: Call){
    this.updateStatus(call.uuid, EnumCallStatus.WAITING)
    this.webSocketService.createCat(call.uuid)
  }

  private dispatchCall(call: Call){
    this.logCall(call, 'will be called');

    const isAsyncCall = call.type === EnumCallType.REST_ASYNC
    const nextStatus = isAsyncCall ? EnumCallStatus.PENDING : EnumCallStatus.WAITING
    this.updateStatus(call.uuid, nextStatus)

    this.http.post(`${this.config.API_ENDPOINT}/` + call.uuid, {})
      .subscribe(
        async (data: any) => {          
          if(isAsyncCall){
            this.logCall(call, 'will be retrieved');
            await awiter(call.delay)
            this.dispatchGetCall(call)
          } else {
            this.logCall(call, 'finished');
            this.setCallAsDone(call.uuid, data.data)
          }
        },
        err => this.handleError(err, call)
      );
  }

  private async dispatchGetCall(call: Call){
    this.http.get(`${this.config.API_ENDPOINT}/` + call.uuid, {})
      .subscribe(
        (data: any) => {
          this.setCallAsDone(call.uuid, data.data)
        },
        err => this.handleError(err, call)
      );
  }

  setCallAsDone(uuid: string, data: any) {
    this.updateStatus(uuid, EnumCallStatus.DONE)
    this.updateData(uuid, data)
  }

  private handleError(error: HttpErrorResponse, call: Call) {
    const nextStatus = EnumCallStatus.ERROR
    this.updateStatus(call.uuid, nextStatus)
    this.logCall(call, `got an error: ${error.message}`);
  }

  updateData(uuid: string, data: object){
    this.calls$
      .pipe(take(1))
      .subscribe((calls: ICall[]) => {
        calls = calls.map(call => {
          if(call.uuid === uuid) {
            call.data = (data as ICat)
            this.logCall(call, ' data just updated to');
          }
          return call
        })
        this.callsBus$.next(calls);
      })
  }

  updateStatus(uuid: string, status: EnumCallStatus){
    this.calls$
      .pipe(take(1))
      .subscribe((calls: ICall[]) => {
        calls = calls.map(call => {
          if(call.uuid === uuid) {
            call.status = status
            this.logCall(call, ` status just updated to ${status}`);
          }
          return call
        })
        this.callsBus$.next(calls);
      })
  }
}
