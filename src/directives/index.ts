/**
 * @name:注册全局指令
 */
const req = import.meta.globEager("./*/index.js")
export default {
  install: (Vue) => {

    Object.keys(req).forEach(mu=>{
      if (req[mu].default) {
        Vue.use(req[mu].default)
    }
  })
  }
}