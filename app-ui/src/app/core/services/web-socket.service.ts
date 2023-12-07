import { Injectable } from '@angular/core';
import { ICat } from '@shared/model/cat';
import { Socket } from 'ngx-socket-io';
import { ConsoleService } from './console.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  cats$ = this.socket.fromEvent<ICat>('cat')

  constructor(
    private socket: Socket,
    private readonly consoleService: ConsoleService,
  ) { }

  createCat(uuid: string){
    this.consoleService.log('WebStocket', 'Will be transmitted to server')
    this.socket.emit('cat', JSON.stringify({ uuid }))
  }
}
