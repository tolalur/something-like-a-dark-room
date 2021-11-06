import { ResorceStore } from '../store/resorce'
import { TheLog } from './the-log.class'

const increaseResource = (resorce: number, rate: number): number => {
  return resorce + rate
}

export class TheGame {
  get baseResorce () {
    return this.store.data
  }

  set baseResorce (val: number) {
    this.store.data = val
  }

  baseResorceLimit = 10;
  increaseRate = 1;
  miningRate = 4;

  baseResorceTimer = null as unknown as number;
  miningResorceTimer = null as unknown as number;
  store: ResorceStore;
  logService: TheLog;

  constructor (store: ResorceStore, log: TheLog) {
    this.store = store
    this.store.data = 0
    this.logService = log
  }

  init () {
    this.baseResorceTimer = setInterval(() => this.startBaseIncreaseResource(), 1000)
    return this
  }

  startBaseIncreaseResource () {
    if (this.baseResorce < this.baseResorceLimit) {
      this.baseResorce = increaseResource(this.baseResorce, this.increaseRate)
      this.logService.regular(`получено ${this.increaseRate} дерево`)
    } else {
      clearInterval(this.baseResorce)
    }
  }

  startMiningIncreaseResource () {
    if (this.baseResorce < (this.baseResorceLimit - this.miningRate)) {
      this.miningResorceTimer = increaseResource(this.baseResorce, this.miningRate)
      this.logService.regular(`получено ${this.miningRate} дерево`)
    } else {
      clearInterval(this.miningResorceTimer)
    }
  }
}
