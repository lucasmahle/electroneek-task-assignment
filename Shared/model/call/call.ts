import { EnumCallStatus } from "./call-status"
import { EnumCallType } from "./call-type"
import { ICat } from "../cat"

export interface ICall {
  uuid: string
  type: EnumCallType
  status: EnumCallStatus
  delay: number
  data: ICat | null
}