# tpl-hr-vue

# vue 可视化大屏开发项目模板- 大屏数据展示组件库使用@jiaminghi/data-view，图表使用echarts

# @jiaminghi/data-view手册：http://datav.jiaminghi.com/


```
tpl-hr-vue
├─ .eslintrc.js
├─ .gitignore
├─ babel.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  └─ iocnFont
├─ README.md
├─ src
│  ├─ app.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ init.css
│  │  │  ├─ scroll.css
│  │  │  └─ scroll.scss
│  │  ├─ imgs
│  │  └─ svg
│  ├─ components
│  │  ├─ echartCommon ----------------------> echarts图标统一入口
│  │  ├─ index.js
│  │  ├─ Loading
│  │  ├─ NotData
│  │  └─ NotFound
│  ├─ directives
│  │  ├─ auto-scale ------------------------> 大屏可视化缩放指令
│  │  ├─ drag
│  │  ├─ index.js
│  │  └─ water-marker
│  ├─ lib
│  │  └─ http
│  │     ├─ axios.js
│  │     └─ index.js
│  ├─ main.js
│  ├─ mock
│  ├─ permission.js
│  ├─ router
│  │  └─ index.js
│  ├─ store
│  │  ├─ common
│  │  │  ├─ index.js
│  │  │  └─ modules
│  │  │     └─ user.js
│  │  └─ index.js
│  ├─ utils
│  │  ├─ bus.js
│  │  ├─ doAnimation.js
│  │  └─ index.js
│  └─ views
│     ├─ index.js
│     └─ screen
│        ├─ children
│        │  └─ home --------------------------> 大屏一
│        │     ├─ api.js
│        │     ├─ cell
│        │     │  ├─ center-screen -----------> 中间部分
│        │     │  │  └─ index.vue 
│        │     │  ├─ left-screen -------------> 左边部分
│        │     │  │  └─ index.vue
│        │     │  └─ right-screen ------------> 右边部分
│        │     │     └─ index.vue
│        │     └─ index.vue ------------------> 大屏主页
│        ├─ index.js
│        ├─ router.js ------------------------> 大屏集合路由
│        └─ store.js
└─ vue.config.js

```