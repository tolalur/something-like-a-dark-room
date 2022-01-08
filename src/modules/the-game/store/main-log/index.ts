import { defineStore } from 'pinia'
import { MainLogMessage, MainLogMessageType } from '@/modules/the-game/models/main-log-message-type'

export type MainLogState = {
  data: MainLogMessage[],
  log?(text: string, type: MainLogMessageType): void
}

export const useMainLogStore = defineStore('main-log', {
  state: () => ({
    data: []
  } as MainLogState),
  actions: {
    regular (message: string): void {
      this.log(message, MainLogMessageType.REGULAR)
    },

    important (message: string): void {
      this.log(message, MainLogMessageType.IMPORTANT)
    },

    warn (message: string): void {
      this.log(message, MainLogMessageType.WARNING)
    },

    log (text: string, type: MainLogMessageType): void {
      this.data.push({ text, type })
    }
  }
})
