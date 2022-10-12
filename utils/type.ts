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
