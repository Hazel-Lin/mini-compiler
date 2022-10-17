export function codeGenerator(newAst: any) {
  switch (newAst.type) {
    case 'Program':
      return newAst.body.map(codeGenerator).join('')
    case 'ExpressionStatement':
      return (`${codeGenerator(newAst.expression)};`)
    case 'CallExpression':
      return (`${codeGenerator(newAst.callee)}(${newAst.arguments.map(codeGenerator)
      .join(', ')})`)
    case 'Identifier':
      return (newAst.name)
    case 'NumberLiteral':
      return (newAst.value)
    case 'StringLiteral':
      return `"${newAst.value}"`
  }
}
