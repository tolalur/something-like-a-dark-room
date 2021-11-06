import { defineStore } from 'pinia'
import { MainLogMessage } from '@/modules/the-game/models/main-log-message-type'

export type MainLogState = {
  data: MainLogMessage[]
}

export const useMainLogStore = defineStore('main-log', {
  state: () => ({
    data: []
  } as MainLogState)
})
