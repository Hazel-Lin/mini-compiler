export function codeGenerator(newAst: any) {
  let output = ''
  switch (newAst.type) {
    case 'Program':
      return newAst.body.forEach((node: any) => {
        codeGenerator(node)
      })
    case 'ExpressionStatement':
      return(`${codeGenerator(newAst.expression)};`)
    case 'CallExpression':
      return(`${codeGenerator(newAst.callee)}(${newAst.arguments.map(codeGenerator)
      .join(', ')} )`)
    case 'Identifier':
      return(newAst.name)
    case 'NumberLiteral':
      return(newAst.value)
  }
  console.log('output', output)
  return output
}
