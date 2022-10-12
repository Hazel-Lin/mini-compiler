import { expect, test } from 'vitest'
import { tokenizer } from '../tokenizer'

test('tokenizer', () => {
  // 输入
  const input = '(add 2 (subtract 4 2))'
  // 输出
  const tokens = [
    { type: 'paren', value: '(' },
    { type: 'name', value: 'add' },
    { type: 'number', value: '2' },
    { type: 'paren', value: '(' },
    { type: 'name', value: 'subtract' },
    { type: 'number', value: '4' },
    { type: 'number', value: '2' },
    { type: 'paren', value: ')' },
    { type: 'paren', value: ')' },
  ]
  expect(tokenizer(input)).toEqual(tokens)
})
// 左括号
test('left bracket', () => {
  // 输入
  const input = '('
  // 输出
  const tokens = [
    { type: 'paren', value: '(' },
  ]
  expect(tokenizer(input)).toEqual(tokens)
})
// 右括号
test('right bracket', () => {
  const input = ')'
  const tokens = [
    { type: 'paren', value: ')' },
  ]
  expect(tokenizer(input)).toEqual(tokens)
})

// add
test.only('add', () => {
  const input = 'add'
  const tokens = [
    { type: 'name', value: 'add' },
  ]
  console.log('测试add')
  expect(tokenizer(input)).toEqual(tokens)
})

// subtract
test('subtract', () => {
  const input = 'subtract'
  const tokens = [
    { type: 'name', value: 'subtract' },
  ]
  console.log('测试subtract')
  expect(tokenizer(input)).toEqual(tokens)
})
// number
test('number', () => {
  const input = '2'
  const tokens = [
    { type: 'number', value: '2' },
  ]
  console.log('测试number')
  expect(tokenizer(input)).toEqual(tokens)
})

// simple demo
test('simple demo', () => {
  const input = '(add 4 2)'
  const tokens = [
    { type: 'paren', value: '(' },
    { type: 'name', value: 'add' },
    { type: 'number', value: '4' },
    { type: 'number', value: '2' },
    { type: 'paren', value: ')' },
  ]
  console.log('测试simple demo')
  expect(tokenizer(input)).toEqual(tokens)
})
