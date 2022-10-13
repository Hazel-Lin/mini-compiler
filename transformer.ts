import { traverser } from './traverser'

export function transformer(ast: any) {
  const newAst = {
    type: 'Program',
    body: [],
  }
  ast._context = newAst.body

  traverser(ast, {
    NumberLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        })
      },
    },

    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        })
      },
    },

    CallExpression: {
      enter(node, parent) {
        let expression: any = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        }

        node._context = expression.arguments

        if (parent.type !== 'CallExpression') {
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
