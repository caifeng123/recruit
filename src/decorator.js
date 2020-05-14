import vue from "./main"

export const checkLogin = function() {
  return function (target, key, descriptor) {
    // descriptor 就是函数本身，以下语句就是增加before形式装饰器
    const oldFunc = descriptor.value
    descriptor.value = function(...args) {
      // 装饰操作：检查登录
      vue.$store.dispatch('checkLoged')
        .then(oldFunc.bind(this, ...args))
    }
  }
}

// function confirmation(target, name, descriptor) {
//   let oldValue = descriptor.value;
//   descriptor.value = function(...args) {
//       MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示')
//           .then(oldValue.bind(this, ...args))
//           .catch(() => {});
//   };

//   return descriptor;
// }
