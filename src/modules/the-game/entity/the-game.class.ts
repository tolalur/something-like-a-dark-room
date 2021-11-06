import { IGameServiceProvider, provider } from '../services/provider'

class TheGame {
  constructor (public serviceProvider: IGameServiceProvider) {
  }

  init () {
    this.serviceProvider.resorce.startBaseIncreaseResource()
    return this
  }
}

let theGame: TheGame

export const getGame = () => {
  if (!theGame) {
    theGame = new TheGame(provider())
  }

  return theGame
}
