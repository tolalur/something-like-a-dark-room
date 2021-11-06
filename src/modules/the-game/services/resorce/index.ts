import { ResorceStore } from '../../store/resorce'
import { TheLog } from '../log'

const increaseResource = (resorce: number, rate: number): number => {
  return resorce + rate
}

export class BaseResorce {
  private get baseResorce (): number {
    return this.store.data
  }

  private set baseResorce (val: number) {
    this.store.data = val
  }

  private baseResorceLimit = 10;
  private increaseRate = 1;
  private miningRate = 4;

  resorceName = 'дерево';

  baseResorceTimer = null as unknown as number;
  miningResorceTimer = null as unknown as number;

  constructor (private store: ResorceStore, private logService: TheLog) {
    this.store.data = 0
    this.store.resorceName = this.resorceName
    this.store.resorceLimit = 10
  }

  startBaseIncreaseResource () {
    this.baseResorceTimer = setInterval(() => this.increaseResource(), 1000)
  }

  startMiningResource () {
    this.miningResorceTimer = setInterval(() => this.miningResource(), 1000)
  }

  private increaseResource () {
    if (this.baseResorce < this.baseResorceLimit) {
      this.baseResorce = increaseResource(this.baseResorce, this.increaseRate)
      this.log(this.increaseRate)
    } else {
      clearInterval(this.baseResorce)
    }
  }

  private miningResource () {
    if (this.baseResorce < (this.baseResorceLimit - this.miningRate)) {
      this.miningResorceTimer = increaseResource(this.baseResorce, this.miningRate)
      this.log(this.miningRate)
    } else {
      clearInterval(this.miningResorceTimer)
    }
  }

  private log (resourceAmount: number) {
    this.logService.regular(`получено ${resourceAmount} ${this.resorceName}`)
  }
}
