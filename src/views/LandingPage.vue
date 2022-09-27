<script setup></script>

<template>
  <div class="flex h-full justify-center items-center">
    <BaseSection>
      <div class="flex flex-col items-center">
        <h2 class="font-bold mb-4 text-2xl">歡迎來到 Vue3 Unit-Test！</h2>
        <p class="mb-4">
          跟著
          <a class="underline" href="https://ithelp.ithome.com.tw/users/20119062/ironman/5554" target="_blank"
            >系列文</a
          >
          一起學習如何寫單元測試！
        </p>
        <router-link to="/intro/1?view=question">
          <BaseButton>開始</BaseButton>
        </router-link>
      </div>
    </BaseSection>
  </div>
</template>

<style scoped></style>
