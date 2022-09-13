<script setup>
import BaseSection from '../components/BaseSection.vue'
import BaseButton from '../components/BaseButton.vue'
</script>

<template>
  <div class="flex h-full justify-center items-center">
    <BaseSection class="flex flex-col items-center">
      <h2 class="font-bold mb-4 text-2xl">歡迎來到 Vue3 Unit-Test！</h2>
      <p class="mb-4">跟著系列文一起學習如何寫單元測試，試著將本專案加上單元測試吧！</p>
      <BaseButton>
        <router-link to="/intro">開始</router-link>
      </BaseButton>
    </BaseSection>
  </div>
</template>

<style scoped></style>
