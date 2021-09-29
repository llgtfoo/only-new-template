# vue3.0 和 element-plus 开发模块化模板

# 封装table、菜单、自定义换肤、路由守卫一系列功能

```
tpl-hr-vue
├─ .eslintrc.js
├─ .gitignore
├─ babel.config.js
├─ package-lock.json
├─ package.json
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
│  │  ├─ imgs
│  │  └─ svg
│  ├─ components
│  │  ├─ deteTime
│  │  ├─ echartCommon
│  │  ├─ eTable
│  │  ├─ index.js
│  │  ├─ Layout
│  │  ├─ Loading
│  │  ├─ NotData
│  │  ├─ NotFound
│  │  ├─ numberScroll
│  │  ├─ SideMenu
│  │  ├─ svgIcons
│  │  └─ themePicker
│  ├─ directives
│  │  ├─ auto-scale
│  │  ├─ drag
│  │  ├─ index.js
│  │  └─ water-marker
│  ├─ http
│  │  ├─ axios.js
│  │  └─ index.js
│  ├─ icons
│  ├─ main.js
│  ├─ mock
│  ├─ permission.js
│  ├─ router
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
│     ├─ home
│     │  ├─ children
│     │  │  └─ home
│     │  │     ├─ api.js
│     │  │     ├─ index.vue
│     │  │     ├─ router.js
│     │  │     └─ store.js
│     │  ├─ index.js
│     │  ├─ router.js
│     │  └─ store.js
│     ├─ index.js
│     ├─ login
│     │  └─ index.vue
│     ├─ module1
│     │  ├─ children
│     │  │  ├─ menu1
│     │  │  │  ├─ router.js
│     │  │  │  ├─ store.js
│     │  │  │  └─ views
│     │  │  │     └─ menu1-1
│     │  │  │        ├─ api.js
│     │  │  │        ├─ columns.js
│     │  │  │        └─ index.vue
│     │  │  └─ menu2
│     │  │     ├─ router.js
│     │  │     ├─ store.js
│     │  │     └─ views
│     │  │        └─ menu1-1
│     │  │           ├─ api.js
│     │  │           └─ index.vue
│     │  ├─ index.js
│     │  ├─ router.js
│     │  └─ store.js
│     └─ module2
│        ├─ children
│        │  └─ menu1
│        │     ├─ router.js
│        │     ├─ store.js
│        │     └─ views
│        │        └─ menu1-1
│        │           ├─ api.js
│        │           └─ index.vue
│        ├─ index.js
│        ├─ router.js
│        └─ store.js
├─ vue.config.js
└─ yarn.lock
```