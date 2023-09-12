# 快速开始

本节内容介绍如何在项目中引用 PandaUI。



## 用法

下载完 PandaUI 后，在项目入口文件( main.ts )当中进行引入：

```typescript
// mian.ts
import { createApp } from 'vue'
import App from './App.vue'
import ppandaUI from "ppanda-ui";
import "../node_modules/ppanda-ui/dist/style.css"
const app = createApp(App);
app.use(ppandaUI);
app.mount('#app')

```

## 开始使用

入口文件引入 PandaUI 后就可以启动项目了，不同组件的使用方法请移步到组件页参考对应文档。