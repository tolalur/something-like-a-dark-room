<template>
  <div
    class="log-message p-0.5 rounded-sm m-0.5 bg-opacity-50"
    :class="style"
  >
    {{ message.text }}
  </div>
</template>

<script lang="ts" setup>
import { MainLogMessage, MainLogMessageType } from '@/modules/the-game/models/main-log-message-type'
import { computed } from '@vue/reactivity'

const props = defineProps<{
  message: MainLogMessage;
}>()

const style = computed(() => {
  switch (props.message.type) {
    case MainLogMessageType.IMPORTANT:
      return 'text-blue-700 bg-blue-100'
    case MainLogMessageType.REGULAR:
      return 'text-gray-700 bg-gray-100'
    case MainLogMessageType.WARNING:
      return 'text-red-700  bg-red-100'
  }
})

</script>

<style scoped>
</style>
