const importAll = (context) => {
  const map = {}
  for (const key of Object.keys(context)) {
    const keyArr = key.split('/')
    keyArr.shift() // 移除.
    if (keyArr[1]) {
      map[keyArr[1]] =
        context[key] && context[key].default
    }
  }
  return map
}
const req = import.meta.globEager('./children/*/store.js')
const modules = importAll(req)

export default () => {
  return {
    namespaced: true,
    modules,
  }
}