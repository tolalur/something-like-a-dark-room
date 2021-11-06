import { defineStore } from 'pinia'

export type ResorceStore = {
  data: number;
  resorceLimit: number
  resorceName: string
}

export const useResorceStore = defineStore('main-resorce', {
  state: () => ({
    data: 0,
    resorceLimit: 0,
    resorceName: ''
  } as ResorceStore)
})
