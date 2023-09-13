<script setup>
import { onMounted } from "vue"
const showMsg = () => {
  import("ppanda-ui").then(({ pdMessage }) => {
    pdMessage({
      message: "想吃香辣鸡腿堡",
    });
  });
}
const showMsg1 = () => {
  import("ppanda-ui").then(({ pdMessage }) => {
    pdMessage({
    message: "KFC",
    type: "success"
  });
  });
}
const showMsg2 = () => {
  import("ppanda-ui").then(({ pdMessage }) => {
  pdMessage({
    message: "Crazy",
    type: "warning"
  });
  });
}
const showMsg3 = () => {
  import("ppanda-ui").then(({ pdMessage }) => {
  pdMessage({
    message: "Thursday",
    type: "info"
  });
  });
}
const showMsg4 = () => {
  import("ppanda-ui").then(({ pdMessage }) => {
  pdMessage({
    message: "V me 50",
    type: "error"
  });
  });
}
const showMsg5 = () => {
  import("ppanda-ui").then(({ pdMessage }) => {
  pdMessage({
    message: "可手动关闭的消息提示",
    type: "success",
    turnOff: true
  });
  });
}
const showMsg6 = () => {
  import("ppanda-ui").then(({ pdMessage }) => {
  pdMessage({
    message: "不展示图标",
    type: "success",
    iconShow: false,
  });
  });
}
const showMsg7 = () => {
  import("ppanda-ui").then(({ pdMessage }) => {
  pdMessage({
    message: "duration控制持续时间",
    type: "success",
    duration: 1000
  });
  });
}
</script>

# Message 消息提示

常用于主动操作后的反馈提示，通过函数声明方法实现。

## 基本用法

消息提示框从顶部出现，默认 3 秒后自动消失。

<div class="message-container">
<pd-button @click="showMsg">show Message</pd-button>
</div>

::: details 展开代码

```html
<template>
  <pd-button @click="showMsg">show Message</pd-button>
</template>
<script setup lang="ts">
  import { pdMessage } from "ppanda-ui";
  const showMsg = () => {
    pdMessage({
      message: "想吃香辣鸡腿堡",
    });
  };
</script>
```

:::

## 不同状态

通过设置`type`类型来显示「成功、警告、消息、错误」类的操作反馈。

<div class="message-container">
<pd-button @click="showMsg1">Success</pd-button>
<pd-button @click="showMsg2">Warning</pd-button>
<pd-button @click="showMsg3">Message</pd-button>
<pd-button @click="showMsg4">Error</pd-button>
</div>

::: details 展开代码

```html
<template>
  <pd-button @click="showMsg1">Success</pd-button>
  <pd-button @click="showMsg2">Warning</pd-button>
  <pd-button @click="showMsg3">Message</pd-button>
  <pd-button @click="showMsg4">Error</pd-button>
</template>
<script setup lang="ts">
    import { pdMessage } from "ppanda-ui";
    const showMsg1 = () => {
    pdMessage({
      message: "KFC",
      type: "success"
    });
  }
  const showMsg2 = () => {
    pdMessage({
      message: "Crazy",
      type: "warning"
    });
  }
  const showMsg3 = () => {
    pdMessage({
      message: "Thursday",
      type: "info"
    });
  }
  const showMsg4 = () => {
    pdMessage({
      message: "V me 50",
      type: "error"
    });
</script>
```

:::

## 可手动关闭提示

通过设置`turnOff`可以实现可手动关闭的消息提示。

<div class="message-container">
<pd-button @click="showMsg5">closable</pd-button>
</div>

::: details 展开代码

```html
<template>
  <pd-button @click="showMsg">closeable</pd-button>
</template>
<script setup lang="ts">
   import { pdMessage } from "ppanda-ui";
  const showMsg = () => {
   pdMessage({
     message: "可手动关闭的消息提示",
     type: "success",
     turnOff: true
   });
</script>
```

:::

## 图标展示

可通过设置`iconShow`来控制图标是否展示(默认展示图标)。

<div class="message-container">
<pd-button @click="showMsg6">Do not show icon</pd-button>
</div>

::: details 展开代码

```html
<template>
  <pd-button @click="showMsg">Do not show icon</pd-button>
</template>
<script setup lang="ts">
  import { pdMessage } from "ppanda-ui";
  const showMsg = () => {
  pdMessage({
    message: "不展示图标",
    duration: 0,
    type: "success",
    iconShow: false
  });
</script>
```

:::

## 消息持续时间

可通过设置`duration`来控制消息提示的持续时间(默认为3秒，如果为0，则消息提示不消失)。

<div class="message-container">
<pd-button @click="showMsg7">Duration</pd-button>
</div>

::: details 展开代码

```html
<template>
  <pd-button @click="showMsg">Duration</pd-button>
</template>
<script setup lang="ts">
  import { pdMessage } from "ppanda-ui";
  const showMsg = () => {
  pdMessage({
    message: "不展示图标",
    duration: 1000,
    type: "success",
  });
</script>
```

:::