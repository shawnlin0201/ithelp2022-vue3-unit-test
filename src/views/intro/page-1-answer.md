
## 測試程式碼：
```js
describe('add()', () => {
  it(`add(1, 1)，應該為 2`, () => {
    expect(add(1, 1)).toBe(2)
  })
  it(`add('1','1') 應該為 2`, () => {
    expect(add('1', '1')).toBe(2)
  })
  it(`add(0.1, 0.2) 應該為 0.3`, () => {
    expect(add(0.1, 0.2)).toBe(0.3)
  })
  it(`add('1','1') 不應該為 '11'`, () => {
    expect(add('1', '1')).not.toBe('11')
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