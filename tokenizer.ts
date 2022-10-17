import { LETTER, NUMBERS, WHITESPACE } from './utils/reg'
import type { Token } from './utils/type'
import { TokenType } from './utils/type'

// 将字符串代码转换成tokens数组
export function tokenizer(input: string) {
  // 当前index
  let current = 0
  // tokens数组
  const tokens: Token[] = []
  // 遍历字符串
  while (current < input.length) {
    let char = input[current]

    if (char === '(') {
      tokens.push({
        type: TokenType.Paren,
        value: '(',
      })
      // 🤔 current 和 continue的位置
      current++
      continue
    }

    if (char === ')') {
      tokens.push({
        type: TokenType.Paren,
        value: ')',
      })
      current++
      continue
    }
    // 跳过空格
    if (WHITESPACE.test(char)) {
      current++
      continue
    }
    // 匹配字母 忽略大小写 并且只匹配一个
    if (LETTER.test(char)) {
      let value = ''
      // current < input.length 不加此判断会报错  Uncaught RangeError: Invalid string length
      while (LETTER.test(char) && current < input.length) {
        value += char
        char = input[++current]
      }

      tokens.push({
        type: TokenType.Name,
        value,
      })
      continue
    }
    // 匹配数字 并且只匹配一个
    if (NUMBERS.test(char)) {
      let value = ''
      while (NUMBERS.test(char)) {
        value += char
        char = input[++current]
      }

      tokens.push({
        type: TokenType.Number,
        value,
      })
      continue
    }
  }
  return tokens
}
