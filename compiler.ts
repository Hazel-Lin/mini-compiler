import { parser } from './parser'
import { tokenizer } from './tokenizer'
import { transformer } from './transformer'
import { codeGenerator } from './codeGenerator'

export function compiler(input: string) {
  return codeGenerator(transformer(parser(tokenizer(input))))
}
