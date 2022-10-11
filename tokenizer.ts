export interface Token {
  type: string;
  value: string;
}
// 将字符串代码转换成tokens数组
export function tokenizer(input){
  // '(add 2 (subtract 4 2))'
  // 当前index
  let current = 0;
  // tokens数组
  let tokens:Token[] = [];
  // 遍历字符串
  while(current < input.length){
    let char = input[current];
    // 左括号
    if(char === '('){
      console.log(char,'char');
      tokens.push({
        type: 'paren',
        value: '(',
      })
      // 🤔 current 和 continue的位置
      current++;
      continue;
    }
    // 右括号
    if(char === ')'){
      console.log(char,'char');
      tokens.push({
        type: 'paren',
        value: ')',
      })
      current++;
      continue;
    }
    // 跳过空格
    let WHITESPACE = /\s/;
    if(WHITESPACE.test(char)){
      current++;
      continue;
    }
    
  }

  return tokens
}