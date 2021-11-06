<template>
  <main class="main-game flex flex-col flex-grow justify-center">
    <h2 class="text-center">
      The Game
    </h2>
    <div class="flex justify-end">
      <span>{{ store.resorceName }}: {{ store.data }} / {{ store.resorceLimit }}</span>
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
import { getGame } from '../entity/the-game.class'
import { useResorceStore } from '../store/resorce'

const store = useResorceStore()
const theGame = getGame()
theGame.init()
</script>

<style>
.main-game {
  width: 100%;
  max-width: 960px;
}
</style>
