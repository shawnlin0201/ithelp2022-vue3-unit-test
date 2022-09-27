## 測試程式碼：
```js
import { describe, it } from 'vitest'

describe.todo('add()', () => {
  // happy path
  it(`add(1, 1) === 2，應該為 true`, () => {})
  it(`add('1','1') === 2，應該為 true`, () => {})
  it(`add(0.1, 0.2) === 0.3，應該為 true`, () => {})

  // sad path
  it(`add('1','1') === '11'，應該為 false`, () => {})
})
```
## 實作程式碼：

> 可參考 `Math.js` 等工具庫實作。