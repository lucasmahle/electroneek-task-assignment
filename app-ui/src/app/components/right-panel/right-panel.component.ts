import { Component, OnInit } from '@angular/core';
import {
  EnumCallType,
  ICallOption,
} from "@shared/model/call"
import { CallManagerService } from 'src/app/core/services/call-manager.service';
import { ConsoleService } from 'src/app/core/services/console.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent {

  constructor(
    private callManagerService: CallManagerService,
    private readonly consoleService: ConsoleService,
  ) { }


  public onCall(option: ICallOption) {
    this.consoleService.log('WebSocket', 'Will be created a new request from type ' + option.type);
    this.callManagerService.add(option)
  }

  public options: ICallOption[] = [
    { name: 'Async', type: EnumCallType.WEBSOCKET_ASYNC }, 
  ]
}
