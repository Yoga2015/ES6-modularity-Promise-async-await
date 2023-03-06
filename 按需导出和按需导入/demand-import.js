// 按需导入1     按需导入的成员名称 必须 和 按需导出的名称 保持一致
// import { s1 } from './demand-export.js';
// import { s2 } from './demand-export.js';
// import { say } from './demand-export.js';

// 按需导入2     按需导入时，可以使用 as 关键字 进行重命名
// 按需导入 可以 和 默认导入一起使用
import info, { s1, s2 as str2, say } from '../demand-export.js';

console.log(s1);
console.log(str2);
console.log(say);

console.log(info);

