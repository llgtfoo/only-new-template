/**
 * 格式化全局注册组件名
 * @param {*} name 双驼峰组件名
 */
export const formatComponentName = (name) => {
  const firstIndex = 0
  const deleteCount = 1
  if (!name) {
    console.error('存在未指定name的组件')
    return
  } else {
    const str = name.replace(/([A-Z])/g, "-$1").toLowerCase()
    return str.indexOf("-") === firstIndex ? str.substr(deleteCount) : str
  }

}

/**
 * 数字转为千分位格式
 * @param {*} num 参数数字
 */
export const toThousands = (num) => {
  return num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
}

/**
 * 日期格式化
 * @param {*} num 参数数字
 */
export const time = (val = new Date(), format = "yy-mm-dd h:m:s") => {
  let date = val
  if (!date) {
    date = new Date()
  }
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const H = date.getHours()
  const M = date.getMinutes()
  const S = date.getSeconds()
  return format
    .replace("yy", y)
    .replace("mm", m >= 10 ? m : `0${m}`)
    .replace("dd", d >= 10 ? d : `0${d}`)
    .replace("h", H >= 10 ? H : `0${H}`)
    .replace("m", M >= 10 ? M : `0${M}`)
    .replace("s", S >= 10 ? S : `0${S}`)
}

/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 * @constructor
 */
export const Debounce = (fn, t) => {
  const delay = t || 500
  let timer
  return function () {
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, delay)
  }
}
/**
 * 函数节流
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const Throttle = (fn, t) => {
  let last
  let timer
  const interval = t || 500
  return function () {
    const args = arguments
    const now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(this, args)
      }, interval)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}
/**
 * 递归查找指定元素
 * @param {*} code 指定元素
 * @param {*} arr 查询区间
 */
export const filterTableMater = (code, arr) => {
  for (const item of arr) {
    if (item.url === code) return item
    if (item.children && item.children.length > 0) {
      const _item = filterTableMater(code, item.children)
      if (_item) return _item
    }
  }
}

/**
 * 递归查找children第一项
 * @param {*} arr 查询区间
 */
export const filterChildrenFirst = (arr) => {
  for (const item of arr) {
    if (!item.children) {
      return item
    }
    if (item.children && item.children.length > 0) {
      const _item = filterChildrenFirst(item.children)
      if (_item) return _item
    }
  }
}
export default {
  install: (App) => {
    App.config.globalProperties.$time = time
    App.config.globalProperties.$Throttle = Throttle
    App.config.globalProperties.$Debounce = Debounce
    App.config.globalProperties.$toThousands = toThousands
  },
}
