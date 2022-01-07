import { defineStore } from 'pinia'
import { TResorceKeys, useResorceStore } from '../resorce'
import resorceConfig from '../../../../config/resorce-config.json'

export type TGameStore = {
  data: number;
  resorceLimit: number
  resorceName: string
}
/**
 * Сделать сервис, который будет читать из конфига id базового ресурса
 */

export const useGameStore = defineStore('main-game', {
  state: () => ({
    data: 0,
    resorceLimit: 0,
    resorceName: ''
  } as TGameStore),

  actions: {
    init () {
      const resorces = useResorceStore()
      resorces.data = resorceConfig.resorces
      resorces.startAutoIncreaseResource(resorceConfig.baseResorceId as TResorceKeys)
    }
  }
})
