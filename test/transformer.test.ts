import { expect, test } from 'vitest'
import { transformer } from '../transformer'

test('transformer', () => {
  const ast = {
    type: 'Program',
    body: [{
      // type: 'ExpressionStatement',
      // expression:{}
      type: 'CallExpression',
      // callee:{
      //   type: 'Identifier',
      //   name: 'add',
      // }
      name: 'add',
      // params => arguments
      params: [{
        type: 'NumberLiteral',
        value: '2',
      }, {
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
  const newAst = {
    type: 'Program',
    body: [{
      type: 'ExpressionStatement',
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: 'add',
        },
        arguments: [{
          type: 'NumberLiteral',
          value: '2',
        }, {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: 'subtract',
          },
          arguments: [{
            type: 'NumberLiteral',
            value: '4',
          }, {
            type: 'NumberLiteral',
            value: '2',
          }],
        }],
      },
    }],
  }
  expect(transformer(ast)).toEqual(newAst)
})
