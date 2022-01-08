import { useMainLogStore } from '../store/main-log'
import { TheLog } from './log'

export interface IGameServiceProvider {
  log: TheLog,
}

let serviceProvider: IGameServiceProvider

export const Provider = (): IGameServiceProvider => {
  if (serviceProvider == null) {
    const logStore = useMainLogStore()

    const logService = new TheLog(logStore)

    serviceProvider = {
      log: logService
    }
  }

  return serviceProvider
}
