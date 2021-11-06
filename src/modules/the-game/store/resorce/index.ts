import { defineStore } from 'pinia'

export type ResorceStore = {
  data: number;
}

export const useResorceStore = defineStore('main-resorce', {
  state: () => ({
    data: 0
  } as ResorceStore)
})
