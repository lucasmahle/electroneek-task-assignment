import { Component, OnInit } from '@angular/core';
import { ICall } from "@shared/model/call"
import { CallManagerService } from 'src/app/core/services/call-manager.service';
import { WebSocketService } from 'src/app/core/services/web-socket.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  constructor(
    private callManagerService: CallManagerService,
  ) { }

  public calls: ICall[] = []

  ngOnInit(): void {
    this.callManagerService.calls$.subscribe((calls: ICall[]) => this.calls = calls)
  }

}
