export function codeGenerator(newAst: any) {
  console.log('newAst', newAst)
  let output = ''
  switch (newAst.type) {
    case 'Program':
      newAst.body.forEach((node: any) => {
        codeGenerator(node)
      })
      break

    case 'ExpressionStatement':
      output += `${codeGenerator(newAst.expression)};`
      break
    case 'CallExpression':
      output += `${codeGenerator(newAst.callee)}(${newAst.arguments.map(codeGenerator)
      .join(', ')} )`
      break
    case 'Identifier':
      output += newAst.name
      break
    case 'NumberLiteral':
      output += newAst.value
      break
  }
  console.log('output', output)
  return output
}
