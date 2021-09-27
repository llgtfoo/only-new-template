/**
 * @name: 二次封装post和get方法，统一传参方式{}
 * @param {type}
 */
const http = {
  async post(url, data) {
    const options = {
      method: 'post',
      url: url,
      data,
      ...(arguments[2]),
    }
    return await axios(options)
  },
  async get(url, data) {
    const options = {
      method: 'get',
      url: url,
      params: data,
      ...(arguments[2]),
    }
    return await axios(options)
  },
}
export default http

