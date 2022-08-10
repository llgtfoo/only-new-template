const req = import.meta.globEager("./*/index.vue")
import { formatComponentName } from '../utils/index'
export default {
  install: (Vue) => {
    req.keys().map(req).forEach((ele) => {
      if (ele.default) {
        Vue.component(formatComponentName(ele.default.name), ele.default)
      }
    })
  }
}