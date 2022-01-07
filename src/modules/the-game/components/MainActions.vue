<template>
  <div
    class="main-actions border border-gray-200 bg-white p-4 rounded-sm m-0.5 bg-opacity-50 flex flex-col"
  >
    <regular-button
      class="mb-3"
      :disabled="woodMiningDisable"
      @click="startWoodMining"
    >
      Собирать дерево
    </regular-button>

    <regular-button
      v-for="item in buildings"
      :key="item.id"
      class="mb-3"
      :disabled="!!item.miningTimer || item.amount == item.limit"
      @click="build(item.id)"
    >
      Строить {{ item.name }}
    </regular-button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { isComplexResorce, TResorceKeys, TResorceCost, useResorceStore, TResorceStore } from '../store/resorce'
import RegularButton from './buttons/RegularButton.vue'

const store = useResorceStore()

const woodResorce = store.data.wood
const startWoodMining = () => store.startMiningResource('wood')
const woodMiningDisable = computed(() => woodResorce.miningTimer != null)

const buildings = computed(() => {
  const complexResource = []
  const predicate = (condition: TResorceCost, data: TResorceStore): boolean => {
    return data[condition.type as TResorceKeys].amount > condition.value
  }

  for (const key in store.data) {
    const item = store.data[key as TResorceKeys]
    if (
      isComplexResorce(item) &&
      item.cost.every(val => predicate(val, store.data))
    ) {
      complexResource.push(store.data[key as TResorceKeys])
    }
  }

  return complexResource
})

const build = (buildId: string) => store.startMiningResource(buildId as TResorceKeys)
</script>
