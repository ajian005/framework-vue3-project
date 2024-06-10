# 1  官网安装Node.js 和NPM包
https://nodejs.org/en/download/prebuilt-installer

# 2  Vue 官方的项目脚手架工具
   npm init vue@latest
   npm create vue@latest
   
# 3 Done. Now run:
  cd framework-vue3-project
  npm install
  npm run format
  npm run dev


# framework-vue3-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```



### create-vue   Vue 官方的项目脚手架工具
#### npm create vue@latest
✔ Project name: … <your-project-name>   -- 项目名称  
✔ Add TypeScript? … No / Yes            -- 是否支持TypeScript
✔ Add JSX Support? … No / Yes            -- 是否支持JSX
✔ Add Vue Router for Single Page Application development? … No / Yes  -- 是否支持Vue Router
✔ Add Pinia for state management? … No / Yes        -- 是否支持Pinia
✔ Add Vitest for Unit testing? … No / Yes        -- 是否支持Vitest
✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright  -- 是否支持E2E测试
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes

Scaffolding project in ./<your-project-name>...
Done.


### 项目目录和关键文件
#### 梳理项目的结构:
#### node_modules 目录用来存放第三方依赖包
#### public 是公共的静态资源目录
#### src 是项目的源代码目录（程序员写的所有代码都要放在此目录下）
####   src/assets 目录用来存放项目中所有的静态资源文件（css、fonts等）
####   src/components 目录用来存放项目中所有的自定义组件
####   src/router 目录用来存放项目的路由配置文件
####   src/store 目录用来存放项目的状态管理配置文件
####   src/views 目录用来存放项目的所有视图组件
####   src/App.vue 是项目的根组件
####   src/main.js 是项目的入口文件
#### .gitignore 是 Git 的忽略文件
#### index.html 是 SPA 单页面应用程序中唯一的 HTML 页面
#### package.json 是项目的包管理配置文件

### 关键文件：
#### vite.config.js - 项目的配置文件 基于vite的配置
#### package.json - 项目包文件 核心依赖项变成了 Vue3.x 和 vite
#### index.html - 单页入口 提供id为app的挂载点




  



