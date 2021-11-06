import router from './router'
import Vue from 'vue'
import { Router } from 'vue-router'

export function registerModule (module: (data: {app: typeof Vue, router: Router}) => void): void {
  module({ app: Vue, router })
}
