import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICallOption } from "@shared/model/call"

@Component({
  selector: 'app-call-option-list',
  templateUrl: './call-option-list.component.html',
  styleUrls: ['./call-option-list.component.scss']
})
export class CallOptionListComponent {

  constructor() { }

  @Input()
  public title: string = ''
  
  @Input()
  public subtitle: string = ''
  
  @Input()
  public options: ICallOption[] = []

  @Output() 
  public newCallEvent = new EventEmitter<ICallOption>();

  public handleClick(option: ICallOption) : void {
    this.newCallEvent.emit(option)
  }
}
