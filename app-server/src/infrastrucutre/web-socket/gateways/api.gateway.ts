import { 
  ConnectedSocket, 
  MessageBody, 
  OnGatewayConnection, 
  OnGatewayDisconnect, 
  SubscribeMessage, 
  WebSocketGateway, 
  WebSocketServer 
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CatsService } from '../cats/cats.service';

@WebSocketGateway({ namespace: 'app-ui', cors: {
  origin: "*",
  credentials: true
}})
export class ApiGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private readonly catsService: CatsService
  ){}
  
  @WebSocketServer() server: Server;

  handleConnection(socket: Socket) {
    console.log('New socket connection');
  }

  handleDisconnect(): any {
      
  }

  @SubscribeMessage('cat')
  async handleMessage(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    const cat = await this.catsService.handleCreate(data)
    setTimeout(() => {
      client.emit('cat', cat);
    }, 1500);
  }
}