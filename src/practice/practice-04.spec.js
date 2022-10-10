import { describe, it, expect } from 'vitest'
import { FoodBank } from './practice-05'

describe('開戶', () => {
  // happy path
  it(`開戶完成，Safe 物件中應有用戶資訊' `, () => {
    // Arrange
    const bank = new FoodBank()
    // Action
    bank.openAccount('Orange')
    // Assertion
    expect(bank.safe).toEqual({ Orange: { food: 0 } })
  })
  it(`開戶完成，應該回應 '開戶完成。' `, () => {
    // Arrange
    const bank = new FoodBank()
    // Assertion
    expect(bank.openAccount('Orange')).toBe('開戶完成。')
  })
  // sad path
  it(`若開過戶頭，應該回應 '您已開過戶頭囉。' `, () => {
    // Arrange
    const bank = new FoodBank()
    // Action
    bank.openAccount('Orange')
    // Assertion
    expect(bank.openAccount('Orange')).toBe('您已開過戶頭囉。')
  })
  // ... 請自由發揮
})
describe('存款', () => {
  // happy path
  it(`存入 100 單位，Safe 物件中該用戶的乾乾應為 100 單位`, () => {
    // Arrange
    const bank = new FoodBank()
    const user = 'Orange'
    // Action
    bank.openAccount(user)
    bank.deposit(user, 100)
    // Assertion
    expect(bank.safe[user]).toEqual({ food: 100 })
  })
  it(`交易完成，應該回應 '存款完成，戶頭目前餘額 {該用戶乾乾數量}' `, () => {
    // Arrange
    const bank = new FoodBank()
    const user = 'Orange'
    const food = 100
    // Action
    bank.openAccount(user)
    // Assertion
    expect(bank.deposit(user, food)).toEqual(`存款完成，戶頭目前餘額 ${food}`)
  })
  // sad path
  it(`若查詢不到戶頭，應該回應 '查詢不到該用戶，請重新確認。' `, () => {
    // Arrange
    const bank = new FoodBank()
    const user = 'Orange'
    const food = 100

    // Assertion
    expect(bank.deposit(user, food)).toEqual(`查詢不到該用戶，請重新確認。`)
  })
  // ... 請自由發揮
})
describe('提款', () => {
  // happy path
  it(`提款 100 單位，Safe 物件中該用戶的乾乾應減少 100 單位`, () => {
    const bank = new FoodBank()
    const user = 'Orange'
    // Action
    bank.openAccount(user)
    bank.deposit(user, 100)
    bank.withdraw(user, 100)
    // Assertion
    expect(bank.safe[user]).toEqual({ food: 0 })
  })
  it(`交易完成，應該回應 '存款完成，戶頭目前餘額 {該用戶乾乾數量}' `, () => {
    const bank = new FoodBank()
    const user = 'Orange'
    // Action
    bank.openAccount(user)
    bank.deposit(user, 100)

    // Assertion
    expect(bank.withdraw(user, 100)).toBe('存款完成，戶頭目前餘額 0')
  })
  // sad path
  it(`若查詢不到戶頭，應該回應 '查詢不到該用戶，請重新確認。' `, () => {
    const bank = new FoodBank()
    const user = 'Orange'

    // Assertion
    expect(bank.withdraw(user, 100)).toBe('查詢不到該用戶，請重新確認。')
  })
  it(`餘額不足，應該回應 '餘額不足，你帳戶目前餘額為 {該用戶乾乾數量}' `, () => {
    const bank = new FoodBank()
    const user = 'Orange'
    // Action
    bank.openAccount(user)

    // Assertion
    expect(bank.withdraw(user, 100)).toBe('餘額不足，你帳戶目前餘額為 0')
  })
  // ... 請自由發揮
})
