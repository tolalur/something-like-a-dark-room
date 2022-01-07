// import { useMainLogStore } from '../store/main-log'
// import { useResorceStore } from '../store/resorce'
// import { TheLog } from './log'
// import { BaseResorce } from './resorce'

// export interface IGameServiceProvider {
//   log: TheLog,
//   resorce: BaseResorce
// }

// export const provider = () => {
//   const store = useResorceStore()
//   const logStore = useMainLogStore()

//   const logService = new TheLog(logStore)
//   const resorceService = new BaseResorce(store, logService)

//   return {
//     log: logService,
//     resorce: resorceService
//   }
// }
