## 測試程式碼：
```js
import { describe, it } from 'vitest'

describe('openAccount()', () => {
  // ...
})
describe('deposit()', () => {
  // ...
})
describe('withdraw()', () => {
  // ...
})
```
## 實作程式碼：
```js
export class FoodBank {
  constructor() {
    this.safe = {}
  }
  openAccount(name){}
  deposit(name, food){}
  withdraw(name, food){}
}
```