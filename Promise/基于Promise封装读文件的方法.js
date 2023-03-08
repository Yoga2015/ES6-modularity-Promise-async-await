import fs from 'fs'
// 1、方法的名称为 getFile
// 2、方法接收一个形参 fpath ,表示要读取的文件的路径
function getFile(fpath) {
  // 3、方法的返回值 为 Promise 实例对象
  // resolve 形参是： 调用 getFile() 方法时，通过.then 指定的“成功的” 回调函数
  // reject  形参是： 调用 getFile() 方法时，通过.then 指定的“失败的” 回调函数
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, successData) => {
      if (err) return reject(err);
      resolve(successData);
    });
  });
};

// getFile('./file/1.txt').then( 成功的回调函数 , 失败的回调函数)
getFile('./file/12.txt').then((data1) => { console.log(data1); }).catch((err1) => { console.log(err1); })

