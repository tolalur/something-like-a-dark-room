<template>
  <button
    class="border border-gray-400 p-1 rounded"
    :class="{ 'opacity-50 cursor-default': disabled }"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  disabled?: boolean
}>()

const emit = defineEmits(['click'])

const onClick = () => {
  if (!props.disabled) emit('click')
}
</script>
