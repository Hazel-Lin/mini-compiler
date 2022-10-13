export function traverser(ast: any, visitor: any) {
  // 遍历树结构 深度优先算法
  function traverseArray(array: any, parent: any) {
    array.forEach((child: any) => {
      traverseNode(child, parent)
    })
  }

  function traverseNode(node, parent) {
    const methods = visitor[node.type]

    if (methods && methods.enter)
      methods.enter(node, parent)

    switch (node.type) {
      case 'Program':
        traverseArray(node.body, node)
        break

      case 'CallExpression':
        traverseArray(node.params, node)
        break

      case 'NumberLiteral':
      case 'StringLiteral':
        break
      default:
        throw new TypeError(node.type)
    }

    if (methods && methods.exit)
      methods.exit(node, parent)
  }
  traverseNode(ast, null)
}

