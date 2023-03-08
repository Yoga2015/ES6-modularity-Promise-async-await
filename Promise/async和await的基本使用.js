// async / await 是 ES8（ECMAScript 2017）引入的新语法，用来简化 Promise 异步操作。
// 在 async / await 出现之前，开发者 只能通过 链式.then() 的方式 处理 Promise 异步操作。
// 在 async 方法中，第一个 await 之前的代码会同步执行，await 之后的代码会异步执行

import thenFs from 'then-fs';

console.log('A');
async function getFile() {
  console.log('B');
  const data1 = await thenFs.readFile('./file/1.txt', 'utf-8');
  console.log(data1);
  const data2 = await thenFs.readFile('./file/2.txt', 'utf-8');
  console.log(data2);
  const data3 = await thenFs.readFile('./file/3.txt', 'utf-8');
  console.log(data3);
  console.log('D');
}

getFile();
console.log('C');

//  thenFs.readFile() 前面加了await，那它的返回值就不再是 Promise的实例对象，而是 最终读取到的文件内容
//  从此 就省略了 程序员 通过.then() 的方式 来拿到最终读取的结果，而是 直接通过 await 来 修饰，就可以 拿到最终读取的结果。