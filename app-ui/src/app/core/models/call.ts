import { v4 } from "uuid"
import {
  EnumCallStatus,
  EnumCallType,
  ICallOption,
  ICall,
} from "@shared/model/call"
import { ICat } from "@shared/model/cat"

const generateRandomDelay = () => { 
  const [min, max] = [1000, 5000];
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export class Call implements ICall {
  uuid: string
  type: EnumCallType
  status: EnumCallStatus
  delay: number
  data: ICat | null

  constructor(callOption: ICallOption){
    this.uuid = v4()
    this.type = callOption.type
    this.status = EnumCallStatus.READY
    this.delay = generateRandomDelay()
    this.data = null
  }
}