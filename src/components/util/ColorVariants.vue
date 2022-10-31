<script setup>
import { computed, onMounted } from "vue"
const props = defineProps(
  {
    variable: {type: String, default: "indigo" },
    variant: {type: String, default: "500" }
  })
// const computedClass = computed(() => { return `flex flex-center rounded-borders text-white bg-${props.variable}-${props.variant}`} )
const computedClass = (colorVariant) => {
  return `flex flex-center rounded-borders text-white bg-${props.variable}-${colorVariant}`
}
</script>
<template>
  <div class="row q-gutter-xs">
    <div v-for="i in 10" :key="i" :class="computedClass(i === 1 ? '50' : (i - 1) * 100)" style="width: 60px; height: 60px">{{ i === 1 ? '50' : (i - 1) * 100 }}</div>
  </div>
</template>


