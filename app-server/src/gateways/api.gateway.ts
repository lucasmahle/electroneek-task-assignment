import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'app-ui' })
export class ApiGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

    handleConnection(socket: Socket) {
    }

    handleDisconnect(): any {
        
    }
}