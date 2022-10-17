import { expect, test } from 'vitest'
import { codeGenerator } from '../codeGenerator'
import { NodeTypes } from '../utils/type'

test('codeGenerator', () => {
  const output = 'add(2, subtract(4, 2));'

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

  expect(codeGenerator(newAst)).toEqual(output)
})
