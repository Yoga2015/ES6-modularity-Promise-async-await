// Promise.race() 方法会发起并行的 Promise 异步操作，
// 只要任何一个异步操作完成，就立即执行下一步的.then 操作（赛跑机制）。

import thenFs from "then-fs";

const promiseAll = [
  // thenFs.readFile('./file/1.txt', 'utf-8'),
  // thenFs.readFile('./file/2.txt', 'utf-8'),
  // thenFs.readFile('./file/3.txt', 'utf-8')
  thenFs.readFile('./file/3.txt', 'utf-8'),
  thenFs.readFile('./file/2.txt', 'utf-8'),
  thenFs.readFile('./file/1.txt', 'utf-8')
]

Promise.race(promiseAll).then(result => {
  console.log(result);
})

// Promise.all(promiseAll).then(result => {
//   console.log(result);
// })