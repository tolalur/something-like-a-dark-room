<template>
  <section class="main-log border border-gray-200 p-2 flex-grow rounded-sm bg-white">
    <log-message
      v-for="(item, index) in data"
      :key="item.text + index"
      :message="item"
    />
  </section>
</template>

<script lang="ts" setup>
import LogMessage from './LogMessage.vue'
import { useMainLogStore } from '@/modules/the-game/store/main-log'
import { storeToRefs } from 'pinia'
import { MainLogMessageType } from '../models/main-log-message-type'

const store = useMainLogStore()
const { data } = storeToRefs(store)
</script>

<style>
.main-log {
  max-height: 686px;
  height: 686px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
}
</style>
