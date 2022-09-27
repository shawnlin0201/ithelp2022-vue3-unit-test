<script setup>
import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router'

const $route = useRoute()
const pageComponent = shallowRef()
const chapterPages = Object.keys(import.meta.glob('../views/intro/*.vue')).length

const handleOnChangeView = async () => {
  try {
    pageComponent.value = (await import(`./intro/page-${$route.params.page}.vue`)).default
  } catch (e) {
    router.push('/')
  }
}

watch(
  () => $route.params.page,
  async () => handleOnChangeView(),
  {
    immediate: true,
  },
)
</script>

<template>
  <div class="flex h-full justify-center items-center">
    <BaseSection class="min-w-200">
      <div class="markdown-preview">
        <component :is="pageComponent" />
      </div>
      <template v-slot:footer>
        <BasePagination category="intro" :curr="+$route.params.page" :max="chapterPages"></BasePagination>
      </template>
    </BaseSection>
  </div>
</template>

<style scoped></style>
