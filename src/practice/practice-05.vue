<template>
  <button data-test="button_open-account">開戶</button>
  <input data-test="input_account" v-model="account" type="text" />

  <button data-test="button_deposit">存款</button>
  <input data-test="input_deposit" v-model="deposit" type="number" min="0" />

  <button data-test="button_withdraw">提款</button>
  <input data-test="input_withdraw" v-model="withdraw" type="number" min="0" />

  <p data-test="status">{{ status }}</p>
</template>

<script setup>
// import { ref } from 'vue'
// import { FoodBank } from './practice-05.js'
</script>
