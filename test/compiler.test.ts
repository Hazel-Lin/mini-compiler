import { expect, test } from 'vitest'
import { compiler } from '../compiler'

test(
  'compiler',
  () => {
    const input = '(add 2 (subtract 4 2))'
    const output = 'add(2, subtract(4, 2));'
    expect(compiler(input)).toEqual(output)
  },
)
