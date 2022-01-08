import { defineStore } from 'pinia'
import { useMainLogStore } from '../main-log'
import resorceConfig from '../../../../config/resorce-config.json'

export type TResorceKeys = keyof typeof resorceConfig.resorces

export type TResorceStoreItem = {
  id: string;
  name: string;
  limit: number;
  increaseRate: number;
  miningRate: number;
  baseIncreaseTimer?: number;
  miningTimer?: number;
  miningCycleCount?: number;
  miningDuration: number;
  amount: number;
  type: string;
}

export type TResorceCost = {
  type: TResorceKeys
  value: number
}

export interface ComplexResorce extends TResorceStoreItem {
  cost: TResorceCost[]
}

export const isComplexResorce = (type: TResorceStoreItem): type is ComplexResorce => ['building'].some(val => val === type.type)

const increaseResource = (resorce: number, rate: number): number => {
  return resorce + rate
}

export type TResorceStore = Record<TResorceKeys, TResorceStoreItem>;
export const useResorceStore = defineStore('resorce-store', {
  state: () => ({
    data: {} as TResorceStore
  }),
  actions: {
    startAutoIncreaseResource (resorceId: TResorceKeys) {
      const resorce = this.data[resorceId]

      if (resorce) {
        resorce.baseIncreaseTimer = setInterval(() => this.increase(resorce), 1000)
      } else {
        this.errorLog('Попытка начать добывать ресурс Id которого не установлен')
      }
    },

    increase (resorce: TResorceStoreItem) {
      if (resorce.amount < resorce.limit) {
        resorce.amount = increaseResource(resorce.amount, resorce.increaseRate)
        this.increaseLog(`получено ${resorce.amount} ${resorce.name}`)
      }
    },

    startMiningResource (resorceId: TResorceKeys) {
      const resorce = this.data[resorceId]

      if (resorce) {
        switch (isComplexResorce(resorce)) {
          case true:
            this.miningLog(`Начало строительства ${resorce.name}`)
            isComplexResorce(resorce) && this.spendResorce(resorce)
            resorce.miningTimer = setTimeout(() => this.miningComplexResorce(resorce), resorce.miningDuration * 1000)
            break
          default:
            resorce.miningTimer = setInterval(() => this.miningBaseResorce(resorce), 1000)
            this.miningLog(`Активировано собирать ${resorce.name}`)
            break
        }
      } else {
        this.errorLog('Попытка начать добывать ресурс Id которого не установлен')
      }
    },

    miningBaseResorce (resorce: TResorceStoreItem) {
      if (resorce.miningCycleCount == null) {
        resorce.miningCycleCount = 0
      }

      if (resorce.amount < (resorce.limit - resorce.miningRate) && resorce.miningCycleCount < resorce.miningDuration) {
        resorce.amount = increaseResource(resorce.amount, resorce.miningRate)
        resorce.miningCycleCount += 1
        this.miningLog(`добыто ${resorce.amount} ${resorce.name}`)
      } else {
        clearInterval(resorce.miningTimer)
        resorce.miningTimer = undefined
        resorce.miningCycleCount = 0
      }
    },

    miningComplexResorce (resorce: TResorceStoreItem) {
      resorce.amount = increaseResource(resorce.amount, resorce.miningRate)
      this.miningLog(`Построена 1 ${resorce.name}`)
      clearTimeout(resorce.miningTimer)
      resorce.miningTimer = undefined
    },

    spendResorce (resorce: ComplexResorce) {
      resorce.cost.forEach(cost => {
        this.data[cost.type].amount -= cost.value
        this.miningLog(`Потрачено ${cost.value} ${this.data[cost.type].name}`)
      })
    },

    errorLog (msg: string) {
      const mainLog = useMainLogStore()
      mainLog.warn(msg)
    },

    increaseLog (msg: string) {
      const mainLog = useMainLogStore()
      mainLog.regular(msg)
    },

    miningLog (msg: string) {
      const mainLog = useMainLogStore()
      mainLog.important(msg)
    }
  }
})
