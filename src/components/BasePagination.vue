<script setup>
defineProps({
  category: {
    type: String,
    require: true,
  },
  curr: Number,
  max: Number,
})
</script>

<template>
  <div class="flex p-4 justify-between">
    <router-link v-if="curr > 1" :to="`/${category}/${curr - 1}?view=question`">
      <BaseButton>
        <i-ooui-arrow-next-rtl class="mr-1" />
        上一頁
      </BaseButton>
    </router-link>
    <router-link v-else to="/">
      <BaseButton>
        回列表
        <i-mdi-home class="ml-1" />
      </BaseButton>
    </router-link>
    <div class="flex justify-between">
      <router-link class="mx-2" to="?view=question">
        <BaseButton>
          題目
          <i-material-symbols-menu-book class="ml-1" />
        </BaseButton>
      </router-link>
      <router-link class="mx-2" to="?view=tip">
        <BaseButton>
          提示
          <i-material-symbols-tips-and-updates class="ml-1" />
        </BaseButton>
      </router-link>
      <router-link class="mx-2" to="?view=answer">
        <BaseButton>
          解答
          <i-ic-baseline-question-answer class="ml-1" />
        </BaseButton>
      </router-link>
    </div>
    <router-link v-if="curr < max" :to="`/${category}/${curr + 1}?view=question`">
      <BaseButton>
        下一頁
        <i-ooui-arrow-next-ltr class="ml-1" />
      </BaseButton>
    </router-link>
    <router-link v-else to="/">
      <BaseButton>
        回列表
        <i-mdi-home class="ml-1" />
      </BaseButton>
    </router-link>
  </div>
</template>
