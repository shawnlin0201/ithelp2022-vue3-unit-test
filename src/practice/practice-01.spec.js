import { describe, expect, test } from 'vitest'

describe.skip('你的第一個測試!', () => {
  test('1 + 1，應該為 2', () => {
    expect(1 + 1).toBe(1)
  })
})
