import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import component from './practice-05.vue'

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
