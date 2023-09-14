# PandaUI

基于 Vue3 + TypeScript 实现的 UI 组件库。

------



## 安装

```
npm install ppanda-ui
```

## 快速开始

```vue
<template>
  <pd-button type="primary">Button</pd-button>
</template>
```

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ppandaUI from "ppanda-ui";
import "../node_modules/ppanda-ui/dist/style.css"
const app = createApp(App);
app.use(ppandaUI);
app.mount('#app')
```

## 在线文档

[PandaUI | 一个Vue3 UI组件库 (panda-gu0.github.io)](https://panda-gu0.github.io/PandaUIDoc/)

## 使用仓库相关命令

### 安装所有依赖

```
npm install
```

### 启动本地测试项目

```
npm run dev
```

### 打包组件库

```
npm run build
```

### 启动文档

```
npm run docs:dev
```

### 打包文档

```
npm run docs:build
```

