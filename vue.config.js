const path = require('path')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pluginOptions: {
    PROJ_TYPE: 'template', // 项目类型
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // modifyVars: {
          //   "primary-color": "red",
          //   "link-color": "red",
          //   "border-radius-base": "2px",
          // },
          javascriptEnabled: true,
        },
      },
    },
  },
  //webpack配置---目录别名
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : "cheap-module-source-map",
    resolve: {
      alias: {
        //配置文件路径别名
        comps: path.join(__dirname, 'src/components'), //组件
        dcts: path.join(__dirname, 'src/directives'), //指令
        http: path.join(__dirname, 'src/http'),
        mock: path.join(__dirname, 'src/mock'), //mock数据
        utils: path.join(__dirname, 'src/utils'), //工具函数
      },
    },
    plugins: [
      new FileManagerPlugin({
        events: {
          onEnd: {
            delete: ['./zip/'],
            archive: [{
              source: path.join(__dirname, './dist'),
              destination: path.join(__dirname, `./zip/dist-${Date.now()}.zip`)
            }]
          }
        }
      })
    ]
  },
  chainWebpack(config) {
    config.plugin("html").tap(args => {
      args[0].title = "系统title名称"
      return args
    })
    config.optimization.minimizer('js').use(require.resolve('terser-webpack-plugin'), [{
      terserOptions: {
        // 打包删掉注释
        comments: true,
        compress: {
          warnings: false,
          drop_console: true,
          drop_debugger: true
        }
      }
    }])
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm-bundler.js')
    // console.log(config)
    //去除默认配置处理的svg文件
    config.module.rule('svg').exclude.add(resolve('src/icons'))
    //自定义配置处理svg文件
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  },
  devServer: {
    proxy: {
      '/api': {
        target:
          'https://www.fastmock.site/mock/a76ff711b33a233cdeac2112d8d909d0/llgtfoo/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  productionSourceMap: false,
}
