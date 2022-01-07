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

const store = useMainLogStore()
const { data } = storeToRefs(store)

store.$onAction(({ name, store }) => {
  if (name === 'log' && store.data.length > 45) {
    store.data = store.data.slice(-30)
  }
})
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
