// 按需导出 ，每个模块中可以使用 多次 按需导出

// 向外按需导出变量 s1        第1次
export let s1 = 'aaa';

// 向外按需导出变量 s2        第2次
export let s2 = 'ccc';

// 向外按需导出变量 say       第3次
export function say() {
  console.log('输出say() 方法');
}

let info = {name :'lisi'}

// 默认导出 
export default {
  info
}


