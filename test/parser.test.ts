import { expect, test } from 'vitest'
import { parser } from '../parser'
import { NodeTypes, Token, TokenType } from '../utils/type'

// parser 将tokens转换为AST
test('parser', () => {
  const tokens: Token[] = [
    { type: TokenType.Paren, value: '(' },
    { type: TokenType.Name, value: 'add' },
    { type: TokenType.Number, value: '2' },
    { type: TokenType.Paren, value: '(' },
    { type: TokenType.Name, value: 'subtract' },
    { type: TokenType.Number, value: '4' },
    { type: TokenType.Number, value: '2' },
    { type: TokenType.Paren, value: ')' },
    { type: TokenType.Paren, value: ')' },
  ]
  const ast = {
    type: NodeTypes.Program,
    body: [{
      type: NodeTypes.CallExpression,
      name: 'add',
      params: [{
        type: NodeTypes.NumberLiteral,
        value: '2',
      },
      {
        type: NodeTypes.CallExpression,
        name: 'subtract',
        params: [{
          type: NodeTypes.NumberLiteral,
          value: '4',
        }, {
          type: NodeTypes.NumberLiteral,
          value: '2',
        }],
      }],
    }],
  }
  expect(parser(tokens)).toEqual(ast)
})
test('number', () => {
  const tokens: Token[] = [
    { type: TokenType.Number, value: '2' },
  ]
  const ast = {
    type: NodeTypes.Program,
    body: [{
      type: NodeTypes.NumberLiteral,
      value: '2',
    }],
  }
  expect(parser(tokens)).toEqual(ast)
})
test('string', () => {
  const tokens: Token[] = [
    { type: TokenType.String, value: 'hello world' },
  ]
  const ast = {
    type: NodeTypes.Program,
    body: [{
      type: NodeTypes.StringLiteral,
      value: 'hello world',
    }],
  }
  expect(parser(tokens)).toEqual(ast)
})
test('simple demo', () => {
  const tokens: Token[] = [
    { type: TokenType.Paren, value: '(' },
    { type: TokenType.Name, value: 'add' },
    { type: TokenType.Number, value: '1' },
    { type: TokenType.Number, value: '1' },
    { type: TokenType.Paren, value: ')' },
  ]
  const ast = {
    type: NodeTypes.Program,
    body: [
      {
        type: NodeTypes.CallExpression,
        name: 'add',
        params: [
          {
            type: NodeTypes.NumberLiteral,
            value: '1',
          },
          {
            type: NodeTypes.NumberLiteral,
            value: '1',
          },
        ],
      },
    ],
  }
  expect(parser(tokens)).toEqual(ast)
})
