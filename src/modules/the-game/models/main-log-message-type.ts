export enum MainLogMessageType {
  WARNING, REGULAR, IMPORTANT
}

export interface MainLogMessage {
  text: string,
  type: MainLogMessageType
}
