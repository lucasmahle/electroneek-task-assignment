import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { HttpModule } from './infrastrucutre/http/http.module';
import { WebSocketModule } from './infrastrucutre/web-socket/web-socket.module';

@Module({
  imports: [CoreModule, HttpModule, WebSocketModule],
  controllers: []
})
export class AppModule {}
