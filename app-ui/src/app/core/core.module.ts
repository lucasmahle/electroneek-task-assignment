import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Config } from './config/config';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { WebSocketService } from './services/web-socket.service';
import { CallManagerService } from './services/call-manager.service';

const stocketConfig: SocketIoConfig = { url: Config.WEBSOCKET_URL, options: {} };

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(stocketConfig)
  ],
  exports: [],
  providers: [
    CallManagerService,
    WebSocketService,
  ]
})
export class CoreModule { }
