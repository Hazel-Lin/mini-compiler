import { traverser } from './traverser'
import { NodeTypes } from './utils/type'

export function transformer(ast: any) {
  const newAst = {
    type: NodeTypes.Program,
    body: [],
  }
  ast._context = newAst.body

  traverser(ast, {
    NumberLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: NodeTypes.NumberLiteral,
          value: node.value,
        })
      },
    },

    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: NodeTypes.StringLiteral,
          value: node.value,
        })
      },
    },

    CallExpression: {
      enter(node, parent) {
        let expression: any = {
          type: NodeTypes.CallExpression,
          callee: {
            type: NodeTypes.Identifier,
            name: node.name,
          },
          arguments: [],
        }

        node._context = expression.arguments

        if (parent.type !== NodeTypes.CallExpression) {
          expression = {
            type: 'ExpressionStatement',
            expression,
          }
        }

        parent._context.push(expression)
      },
    },
  })
  return newAst
}
