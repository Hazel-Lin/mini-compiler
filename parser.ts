import type { AstNode, CallExpressionNode, Token } from './utils/type'
import { NodeTypes, TokenType } from './utils/type'

export function parser(tokens: Token[]) {
  const ast: AstNode = {
    type: NodeTypes.Program,
    body: [],
  }
  let current = 0

  // 递归调用
  function walk(): any {
    let t = tokens[current]
    if (t.type === TokenType.Number) {
      // 判断后 移动指针
      current++
      return {
        type: NodeTypes.NumberLiteral,
        value: t.value,
      }
    }
    if (t.type === TokenType.String) {
      // 判断后 移动指针
      current++
      return {
        type: NodeTypes.StringLiteral,
        value: t.value,
      }
    }
    if (t.type === TokenType.Paren && t.value === '(') {
      t = tokens[++current]
      const node: CallExpressionNode = {
        type: NodeTypes.CallExpression,
        name: t.value,
        params: [],
      }
      // 再次移动指针
      t = tokens[++current]
      // 遇到右括号时停止 递归调用walk函数
      while (!(t.type === TokenType.Paren && t.value === ')')) {
        node.params.push(walk())
        t = tokens[current]
      }
      current++

      return node
    }
  }
  while (current < tokens.length)
    ast.body.push(walk())

  return ast
}
