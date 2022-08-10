const req = import.meta.globEager("./*/index.vue")
import { formatComponentName } from '../utils/index'
export default {
  install: (Vue) => {
    Object.keys(req).forEach(mu=>{
      if (req[mu].default) {
      Vue.component(formatComponentName(req[mu].default.name), req[mu].default)
    }
  })
  }
}