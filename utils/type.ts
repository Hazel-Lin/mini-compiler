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
