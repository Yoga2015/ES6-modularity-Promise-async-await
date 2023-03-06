// 从 default -import.js 模块中导入 export-default.js 向外共享的成员
// 并使用 m1 成员进行接收
import m1 from '../默认导出和默认导入/export-default.js';

console.log(m1);  //  { n1: 10, show: [Function: show] }
