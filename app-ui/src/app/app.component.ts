import { Component, OnInit } from '@angular/core';
import { CallManagerService } from './core/services/call-manager.service';
import { WebSocketService } from './core/services/web-socket.service';
import { ConsoleService } from './core/services/console.service';
import { ICat } from '@shared/model/cat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'AppUI';

  constructor(
    private callManagerService: CallManagerService,
    private webSocketService: WebSocketService,
    private readonly consoleService: ConsoleService,
  ) {}
  
  ngOnInit(): void {
    this.webSocketService.cats$.subscribe(cat => {
      this.consoleService.log('WebSocket', 'New message received from server')
      this.callManagerService.setCallAsDone(cat.uuid, cat)
    })
  }
}
