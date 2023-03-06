let n1 = 10;   // 定义模块私有成员 n1
let n2 = 20;   // 定义模块私有成员 n2 (外界访问不到 n2 因为它没有被共享出去)

function show() {   // // 定义模块私有方法  show
  console.log("默认导出");
}

export default {  // 使用 export default 默认导出 语法，向外共享 n1 和 show
  n1, show
}

// export default { 每个模块中，只允许使用唯一的一次 export default，否则会报错
//   n2
// }