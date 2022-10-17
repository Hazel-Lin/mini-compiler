import { NodeTypes } from './utils/type'

export function codeGenerator(newAst: any) {
  switch (newAst.type) {
    case NodeTypes.Program:
      return newAst.body.map(codeGenerator).join('')
    case 'ExpressionStatement':
      return (`${codeGenerator(newAst.expression)};`)
    case NodeTypes.CallExpression:
      return (`${codeGenerator(newAst.callee)}(${newAst.arguments.map(codeGenerator)
      .join(', ')})`)
    case NodeTypes.Identifier:
      return (newAst.name)
    case NodeTypes.NumberLiteral:
      return (newAst.value)
    case NodeTypes.StringLiteral:
      return `"${newAst.value}"`
  }
}
