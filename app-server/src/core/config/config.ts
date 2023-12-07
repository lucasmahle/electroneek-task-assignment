export const CONFIG_TOKEN = Symbol('CONFIG_TOKEN');

export interface IConfig {
  API_JSON: string
  API_IMAGE: string
}

export const Config: IConfig = {
  API_JSON: 'https://cataas.com/cat?json=true',
  API_IMAGE: 'https://cataas.com/cat/',
}