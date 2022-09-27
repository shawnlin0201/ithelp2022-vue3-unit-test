# 【語法ノ章】案例與情境：describe & it

## 練習目標：
- 測試情境（`describe`）與測試案例（`it`）基本用法
- 斷言（`Assert`）基本用法 

## 故事
「柯基」是一名剛從某大學畢業的新鮮人，而在有幸得到「汪汪」集團的聘任後進入了前端 Team，然而前端的 Leader 「柴犬」為了怕「柯基」無聊，所以請他維護一個叫 `add` 的函式⋯⋯


而該函式則要求
- `add(1, 1)` 結果為 `2`
- `add('1', '1')` 結果為 `2`
- `add(0.1, 0.2)` 結果為 `0.3`
- `add('1', '1')` 結果不能為 `'11'`


## 題目：
請根據故事中補上要求的測試情境與案例，並把引入 `add` 函式完善。

> 測試程式碼檔案位置在 `/src/practice/practice-02.spec.js`

```js
import { describe } from 'vitest'
// import { add } from './practice-02'

describe.todo('add()', () => {
  // happy path
  // sad path
})
```