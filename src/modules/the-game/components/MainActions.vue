<template>
  <div
    class="main-actions border border-gray-200 bg-white p-4 rounded-sm m-0.5 bg-opacity-50 flex flex-col"
  >
    <regular-button
      :on-click="() => log('button click')"
      class="mb-3"
    >
      Собирать дерево
    </regular-button>
    <regular-button
      :on-click="() => log('button click')"
      class="mb-3"
    >
      Строить хижина
    </regular-button>
    <regular-button
      :on-click="() => log('button click')"
      class="mb-3"
    >
      Строить мастерская
    </regular-button>
  </div>
</template>

<script lang="ts" setup>
import { MainLogMessage, MainLogMessageType } from '@/modules/the-game/models/main-log-message-type'
import { computed } from '@vue/reactivity'
import RegularButton from './buttons/RegularButton.vue'

const log = console.log
</script>

<style scoped>
</style>
