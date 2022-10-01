<script setup>
import { VueComponent as MdQuestion } from './page-2-question.md'
import { VueComponent as MdTip } from './page-2-tip.md'
import { VueComponent as MdAnswer } from './page-2-answer.md'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const $route = useRoute()
const mode = ref($route.params.mode)

watch(
  () => $route.query.view,
  () => {
    mode.value = $route.query.view
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div v-show="mode === 'question'">
    <MdQuestion></MdQuestion>
  </div>
  <div v-show="mode === 'tip'">
    <MdTip></MdTip>
  </div>
  <div v-show="mode === 'answer'">
    <MdAnswer></MdAnswer>
  </div>
</template>

<style scoped></style>
