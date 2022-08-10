/**
 * @name:注册全局指令
 */
const req = import.meta.globEager("./*/index.js")
export default {
  install: (Vue) => {
    req.keys().map(req).forEach((ele) => {
      if (ele.default) {
        Vue.use(ele.default)
      }
    })
  }
}