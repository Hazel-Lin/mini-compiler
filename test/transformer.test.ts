import { expect, test } from 'vitest'
import { transformer } from '../transformer'
import { NodeTypes } from '../utils/type'

test('transformer', () => {
  const ast = {
    type: NodeTypes.Program,
    body: [{
      // type: 'ExpressionStatement',
      // expression:{}
      type: NodeTypes.CallExpression,
      // callee:{
      //   type: NodeTypes.Identifier,
      //   name: 'add',
      // }
      name: 'add',
      // params => arguments
      params: [{
        type: NodeTypes.NumberLiteral,
        value: '2',
      }, {
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
  const newAst = {
    type: NodeTypes.Program,
    body: [{
      type: 'ExpressionStatement',
      expression: {
        type: NodeTypes.CallExpression,
        callee: {
          type: NodeTypes.Identifier,
          name: 'add',
        },
        arguments: [{
          type: NodeTypes.NumberLiteral,
          value: '2',
        }, {
          type: NodeTypes.CallExpression,
          callee: {
            type: NodeTypes.Identifier,
            name: 'subtract',
          },
          arguments: [{
            type: NodeTypes.NumberLiteral,
            value: '4',
          }, {
            type: NodeTypes.NumberLiteral,
            value: '2',
          }],
        }],
      },
    }],
  }
  expect(transformer(ast)).toEqual(newAst)
})
