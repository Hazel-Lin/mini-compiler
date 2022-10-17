import { NodeTypes } from './utils/type'

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
      case NodeTypes.Program:
        traverseArray(node.body, node)
        break

      case NodeTypes.CallExpression:
        traverseArray(node.params, node)
        break

      case NodeTypes.NumberLiteral:
      case NodeTypes.StringLiteral:
        break
      default:
        throw new TypeError(node.type)
    }

    if (methods && methods.exit)
      methods.exit(node, parent)
  }
  traverseNode(ast, null)
}

