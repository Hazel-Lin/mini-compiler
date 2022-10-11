import { tokenizer } from "../tokenizer";
import { expect, test } from 'vitest'


test('tokenizer', () => {
  // 输入
  const input  = '(add 2 (subtract 4 2))';
  // 输出
  const tokens = [
    { type: 'paren',  value: '('        },
    { type: 'name',   value: 'add'      },
    { type: 'number', value: '2'        },
    { type: 'paren',  value: '('        },
    { type: 'name',   value: 'subtract' },
    { type: 'number', value: '4'        },
    { type: 'number', value: '2'        },
    { type: 'paren',  value: ')'        },
    { type: 'paren',  value: ')'        }
  ];
  expect(tokenizer(input)).toEqual(tokens)
})
// 左括号
test.only('left bracket', () => {
  // 输入
  const input  = '(';
  // 输出
  const tokens = [
    { type: 'paren',  value: '('        },
  ];
  expect(tokenizer(input)).toEqual(tokens)
})
