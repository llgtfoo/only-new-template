//自动加载svg文件
const req = require.context('./svg', false, /\.svg$/)
req.keys().map(req)
