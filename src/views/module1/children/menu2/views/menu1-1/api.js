import http from 'http/index.js'

export const test = async (proload) => {
  return await http.post('/test', proload)
}