import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Call } from 'src/app/core/models/call';
import { EnumCallStatus, EnumCallType } from "@shared/model/call"

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements DoCheck {

  constructor() { }

  public isCreationDone: boolean = false
  public isSentDone: boolean = false
  public isProcessingDone: boolean = false
  public isCallDone: boolean = false
  public isSyncProcess: boolean = false
  public hasError: boolean = false
  public catImageUrl: string = ''

  @Input()
  call: Call | null = null

  private setReadyStatus(): void {
    this.isCreationDone = true;
  }

  private setPendingStatus(): void {
    this.setReadyStatus()
    this.isSentDone = true;
  }

  private setWaitingStatus(): void {
    this.setPendingStatus()
    this.isProcessingDone = true;
  }

  private setDoneStatus(): void {
    this.setWaitingStatus()
    this.isCallDone = true;
    this.catImageUrl = this.call?.data?.image ?? '';
  }

  private setErroStatus(): void {
    this.clearStatus()
    this.hasError = true;
  }

  private clearStatus(): void {
    this.isCreationDone = false;
    this.isSentDone = false;
    this.isProcessingDone = false;
    this.isCallDone = false;
  }

  ngDoCheck(): void {
    this.isSyncProcess = this.call?.type === EnumCallType.REST_SYNC
    
    switch(this.call?.status){
      case EnumCallStatus.READY: return this.setReadyStatus();
      case EnumCallStatus.PENDING: return this.setPendingStatus();
      case EnumCallStatus.WAITING: return this.setWaitingStatus();
      case EnumCallStatus.DONE: return this.setDoneStatus();
      case EnumCallStatus.ERROR: return this.setErroStatus();
      default: this.clearStatus();
    }
  }

}
