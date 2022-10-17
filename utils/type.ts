export interface Token {
  type: TokenType
  value: string
}
export enum TokenType {
  Paren,
  Name,
  Number,
  String,
}
export enum NodeTypes {
  NumberLiteral = 'NumberLiteral',
  Program = 'Program',
  StringLiteral = 'StringLiteral',
  CallExpression = 'CallExpression',
  Identifier = 'Identifier',
}
export interface AstNode {
  type: NodeTypes.Program,
  body: ChildNode[],
  context?: ChildNode[];
}
export interface CallExpressionNode{
  type: NodeTypes.CallExpression,
  name: string,
  params: ChildNode[],
  context?: ChildNode[];
}
