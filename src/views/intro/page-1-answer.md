
## 測試程式碼：
```js
describe('add()', () => {
  // happy path
  it(`add(1, 1) === 2，應該為 true`, () => {
    expect(add(1, 1) === 2).toBe(true)
  })
  it(`add('1','1') === 2，應該為 true`, () => {
    expect(add('1', '1') === 2).toBe(true)
  })
  it(`add(0.1, 0.2) === 0.3，應該為 true`, () => {
    expect(add(0.1, 0.2) === 0.3).toBe(true)
  })

  // sad path
  it(`add('1','1') === '11'，應該為 false`, () => {
    expect(add('1', '1') === '11').toBe(false)
  })
})

```
## 實作程式碼：
```js
export const add = (x, y) => {
  const xDigits = (x.toString().split('.')[1] || '').length
  const yDigits = (y.toString().split('.')[1] || '').length
  const baseNum = Math.pow(10, Math.max(xDigits, yDigits))
  return (x * baseNum + y * baseNum) / baseNum
}
```