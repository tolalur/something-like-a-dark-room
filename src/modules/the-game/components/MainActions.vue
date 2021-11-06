<template>
  <div
    class="main-actions border border-gray-200  bg-white p-4 rounded-sm m-0.5 bg-opacity-50 flex flex-col"
  >
    <button class="border border-gray-400 p-1 mb-3 rounded">
      Собирать дерево
    </button>
    <button class="border border-gray-400  p-1 mb-3 rounded-sm">
      Строить хижина
    </button>
    <button
      class="border border-gray-400  p-1 mb-3 rounded-sm"
      @click="$listners"
    >
      Строить мастерская
    </button>
  </div>
</template>

<script lang="ts" setup>
import { MainLogMessage, MainLogMessageType } from '@/modules/the-game/models/main-log-message-type'
import { computed } from '@vue/reactivity'

</script>

<style scoped>
</style>
