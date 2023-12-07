import { Component, OnInit } from '@angular/core';
import {
  EnumCallType,
  ICallOption,
} from "@shared/model/call"
import { CallManagerService } from 'src/app/core/services/call-manager.service';
import { ConsoleService } from 'src/app/core/services/console.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent {

  constructor(
    private callManagerService: CallManagerService,
    private readonly consoleService: ConsoleService,
  ) { }

  public onCall(option: ICallOption) {
    this.consoleService.log('REST', 'Will be created a new request from type ' + option.type);
    this.callManagerService.add(option)
  }

  public options: ICallOption[] = [
    { name: 'Sync', type: EnumCallType.REST_SYNC }, 
    { name: 'Async', type: EnumCallType.REST_ASYNC }
  ]
}
