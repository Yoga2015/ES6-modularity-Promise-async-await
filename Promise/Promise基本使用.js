// // 1、基于回调函数 --->  回调地狱
// import fs from 'fs';

// // 读取文件 1.txt
// fs.readFile('./file/1.txt', 'utf-8', (err1, data1) => {
//   if (err1) return console.log(err1.message);  //读取文件 1.txt 失败
//   console.log(data1);  // 读取文件 1.txt 成功
//   // 读取文件 2.txt
//   fs.readFile('./file/2.txt', 'utf-8', (err2, data2) => {
//     if (err2) return console.log(err2.message);  //读取文件 2.txt 失败
//     console.log(data2);  // 读取文件 2.txt 成功
//     // 读取文件 3.txt
//     fs.readFile('./file/3.txt', 'utf-8', (err3, data3) => {
//       if (err3) return console.log(err3.message);  //读取文件 3.txt 失败
//       console.log(data3);  // 读取文件 3.txt 成功
//     })
//   })
// });


// // 2、基于 then-fs 异步读取文件的内容

// import thenFs from 'then-fs';   // 导入 then-fs  模块，用一个成员变量   thenFs 来接收.

// thenFs.readFile('./file/1.txt', 'utf-8').then(data4 => { console.log(data4); });
// thenFs.readFile('./file/2.txt', 'utf-8').then(data5 => { console.log(data5); });
// thenFs.readFile('./file/3.txt', 'utf-8').then(data6 => { console.log(data6); });

// // 注意：上述的代码无法保证文件的读取顺序，需要做进一步的改进！


// 基于 Promise 按顺序读取文件的内容
// Promise 支持链式调用，从而来解决回调地狱的问题。

import thenFs from 'then-fs';   // 导入 then-fs  模块，用一个成员变量   thenFs 来接收.
console.dir(thenFs);
thenFs.readFile('./file/12.txt', 'utf-8')   // 返回值是一个 Promise的实例对象
  .catch(err1 => {     // 在 Promise 的链式操作中发生了错误 ,使用 .catch 方法 进行捕获和处理
    console.log(err1);
  })
  .then(data7 => {    // 2、 通过 .then 为 第一个Promise实例指定成功之后的回调函数
    console.log(data7);
    return thenFs.readFile('./file/22.txt', 'utf-8') // 3、在第一个 .then 中返回一个新的 Promise实例对象
  })
  .then(data8 => {  // 4、继续调用 .then 为 上一个 .then 的返回值（新的 Promise实例） 指定成功之后的回调函数
    console.log(data8);
    return thenFs.readFile('./file/3.txt', 'utf-8')  // 5、在第二个 .then 中返回一个新的 Promise实例对象
  })
  .catch(err2 => {     // 在 Promise 的链式操作中发生了错误 ,使用 .catch 方法 进行捕获和处理
    console.log(err2);
  })
  .then(data9 => {
    console.log(data9);  //  6、继续调用 .then 为 上一个 .then 的返回值（新的 Promise实例） 指定成功之后的回调函数
  })


// Promise 是一个对象，也是一个构造函数 , 所以可以 创建 Promise的实例
// const p = new Promise();
// console.dir(p);

// const p = new Promise();
