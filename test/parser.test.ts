import { expect, test } from 'vitest'
import { parser } from '../parser'
import { TokenType } from '../utils/type'

// parser 将tokens转换为AST
test('parser', () => {
  const tokens: any = [
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
  const ast = {
    type: 'Program',
    body: [{
      type: 'CallExpression',
      name: 'add',
      params: [{
        type: 'NumberLiteral',
        value: '2',
      },
      {
        type: 'CallExpression',
        name: 'subtract',
        params: [{
          type: 'NumberLiteral',
          value: '4',
        }, {
          type: 'NumberLiteral',
          value: '2',
        }],
      }],
    }],
  }
  expect(parser(tokens)).toEqual(ast)
})
test('number', () => {
  const tokens: any[] = [
    { type: 'number', value: '2' },
  ]
  const ast = {
    type: 'Program',
    body: [{
      type: 'NumberLiteral',
      value: '2',
    }],
  }
  expect(parser(tokens)).toEqual(ast)
})
test('string', () => {
  const tokens: any[] = [
    { type: 'string', value: 'hello world' },
  ]
  const ast = {
    type: 'Program',
    body: [{
      type: 'StringLiteral',
      value: 'hello world',
    }],
  }
  expect(parser(tokens)).toEqual(ast)
})
test('simple demo', () => {
  const tokens: any[] = [
    { type: TokenType.Paren, value: '(' },
    { type: TokenType.Name, value: 'add' },
    { type: TokenType.Number, value: '1' },
    { type: TokenType.Number, value: '1' },
    { type: TokenType.Paren, value: ')' },
  ]
  const ast = {
    type: 'Program',
    body: [
      {
        type: 'CallExpression',
        name: 'add',
        params: [
          {
            type: 'NumberLiteral',
            value: '1',
          },
          {
            type: 'NumberLiteral',
            value: '1',
          },
        ],
      },
    ],
  }
  expect(parser(tokens)).toEqual(ast)
})
