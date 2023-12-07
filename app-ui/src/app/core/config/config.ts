import { InjectionToken } from "@angular/core"

export const CONFIG_TOKEN = new InjectionToken<IConfig>('CONFIG_TOKEN')

export interface IConfig {
  API_ENDPOINT: string
  WEBSOCKET_URL: string
}

export const Config: IConfig = {
  API_ENDPOINT: 'http://localhost:3000/cat',
  WEBSOCKET_URL: 'ws://localhost:3000/app-ui'
}