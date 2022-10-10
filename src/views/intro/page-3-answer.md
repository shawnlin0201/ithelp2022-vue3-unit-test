
## 測試程式碼：
```js
describe('開戶', () => {
  it(`輸入用戶名稱，開戶完成，狀態欄應該顯示 '開戶完成。' `, async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_account"]').setValue('Shawn')
    await wrapper.find('[data-test="button_open-account"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toEqual('開戶完成。')
  })
  it(`輸入用戶名稱，若開過戶頭，狀態欄應該顯示 '您已開過戶頭囉。' `, async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_account"]').setValue('Shawn')
    await wrapper.find('[data-test="button_open-account"]').trigger('click')

    await wrapper.find('[data-test="input_account"]').setValue('Shawn')
    await wrapper.find('[data-test="button_open-account"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toEqual('您已開過戶頭囉。')
  })
})
describe('存款', () => {
  it(`輸入用戶名稱與金額，交易完成，狀態欄應該顯示 '存款完成，戶頭目前餘額 {該用戶乾乾數量}' `, async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_account"]').setValue('Shawn')
    await wrapper.find('[data-test="button_open-account"]').trigger('click')

    await wrapper.find('[data-test="input_deposit"]').setValue(100)
    await wrapper.find('[data-test="button_deposit"]').trigger('click')
    expect(wrapper.find('[data-test="status"]').text()).toEqual('存款完成，戶頭目前餘額 100')

    await wrapper.find('[data-test="input_deposit"]').setValue(100)
    await wrapper.find('[data-test="button_deposit"]').trigger('click')
    expect(wrapper.find('[data-test="status"]').text()).toEqual('存款完成，戶頭目前餘額 200')
  })
  it(`輸入用戶名稱與金額，若查詢不到戶頭，狀態欄應該顯示 '查詢不到該用戶，請重新確認。' `, async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_account"]').setValue('Shawn')
    await wrapper.find('[data-test="input_deposit"]').setValue(100)
    await wrapper.find('[data-test="button_deposit"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toEqual('查詢不到該用戶，請重新確認。')
  })
})
describe('提款', () => {
  it(`輸入用戶名稱與金額，交易完成，狀態欄應該顯示 '存款完成，戶頭目前餘額 {該用戶乾乾數量}' `, async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_account"]').setValue('Shawn')
    await wrapper.find('[data-test="button_open-account"]').trigger('click')

    await wrapper.find('[data-test="input_deposit"]').setValue(200)
    await wrapper.find('[data-test="button_deposit"]').trigger('click')

    await wrapper.find('[data-test="input_withdraw"]').setValue(100)
    await wrapper.find('[data-test="button_withdraw"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toEqual('存款完成，戶頭目前餘額 100')
  })
  it(`輸入用戶名稱與金額，若查詢不到戶頭，狀態欄應該顯示 '查詢不到該用戶，請重新確認。' `, async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_account"]').setValue('Shawn')
    await wrapper.find('[data-test="input_withdraw"]').setValue(100)

    await wrapper.find('[data-test="button_withdraw"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toEqual('查詢不到該用戶，請重新確認。')
  })
  it(`輸入用戶名稱與金額，餘額不足，狀態欄應該顯示 '餘額不足，你帳戶目前餘額為 {該用戶乾乾數量}' `, async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_account"]').setValue('Shawn')
    await wrapper.find('[data-test="button_open-account"]').trigger('click')

    await wrapper.find('[data-test="input_deposit"]').setValue(100)
    await wrapper.find('[data-test="button_deposit"]').trigger('click')

    await wrapper.find('[data-test="input_withdraw"]').setValue(200)
    await wrapper.find('[data-test="button_withdraw"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toEqual('餘額不足，你帳戶目前餘額為 100')
  })
})
```
## 實作程式碼：
```html
<template>
  <button @click="handleOnOpenAccount" data-test="button_open-account">開戶</button>
  <input data-test="input_account" v-model="account" type="text" />

  <button @click="handleOnDeposit" data-test="button_deposit">存款</button>
  <input data-test="input_deposit" v-model="deposit" type="number" min="0" />

  <button @click="handleOnWithdraw" data-test="button_withdraw">提款</button>
  <input data-test="input_withdraw" v-model="withdraw" type="number" min="0" />

  <p data-test="status">{{ status }}</p>
</template>

<script setup>
import { ref } from 'vue'
import { FoodBank } from './practice-05.js'
const account = ref('')
const deposit = ref('')
const withdraw = ref('')
const status = ref('')

const $FoodBank = new FoodBank()
const handleOnOpenAccount = () => (status.value = $FoodBank.openAccount(account.value))
const handleOnDeposit = () => (status.value = $FoodBank.deposit(account.value, deposit.value))
const handleOnWithdraw = () => (status.value = $FoodBank.withdraw(account.value, withdraw.value))
</script>
```