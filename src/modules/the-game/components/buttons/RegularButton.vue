<template>
  <button
    class="border border-gray-400 p-1 rounded"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  onClick:() => void;
}>()
</script>
