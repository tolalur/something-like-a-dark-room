<template>
  <main class="main-game flex flex-col flex-grow justify-center">
    <h2 class="text-center">
      The Game
    </h2>
    <div class="flex justify-end">
      <span>дерево: {{ store.data }} / {{ theGame.baseResorceLimit }}</span>
    </div>
    <div class="flex mt-4">
      <main-log />
      <main-actions class="ml-8" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import MainLog from '../components/MainLog.vue'
import MainActions from '../components/MainActions.vue'
import { TheGame } from '../entity/the-game.class'
import { TheLog } from '../entity/the-log.class'
import { useMainLogStore } from '../store/main-log'
import { useResorceStore } from '../store/resorce'

const store = useResorceStore()
const logStore = useMainLogStore()

const theLog = new TheLog(logStore)
const theGame = new TheGame(store, theLog).init()
</script>

<style>
.main-game {
  width: 100%;
  max-width: 960px;
}
</style>
