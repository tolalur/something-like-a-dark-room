<template>
  <main class="main-game flex flex-col flex-grow justify-center">
    <h2 class="text-center">
      The Game
    </h2>
    <div class="flex justify-end">
      <span
        v-for="resorce in resorceStore.data"
        :key="resorce.id"
        class="pl-5"
      >{{ resorce.name }}: {{ resorce.amount }} / {{ resorce.limit }}</span>
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
import { useResorceStore } from '../store/resorce'
import { useGameStore } from '../store/the-game'

const resorceStore = useResorceStore()
const theGame = useGameStore()
theGame.init()
</script>

<style>
.main-game {
  width: 100%;
  max-width: 960px;
}
</style>
