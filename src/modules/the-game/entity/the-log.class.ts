import { MainLogMessageType } from '../models/main-log-message-type'
import { MainLogState } from '../store/main-log'

export class TheLog {
  store: MainLogState;

  constructor (store: MainLogState) {
    this.store = store
  }

  regular (message: string): void {
    this.log(message, MainLogMessageType.REGULAR)
  }

  important (message: string): void {
    this.log(message, MainLogMessageType.IMPORTANT)
  }

  warn (message: string): void {
    this.log(message, MainLogMessageType.WARNING)
  }

  log (text: string, type: MainLogMessageType): void {
    this.store.data.push({ text, type })
  }
}
