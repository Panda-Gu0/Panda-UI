<script setup>
import { reactive } from "vue";
 let state = reactive({
  options: [
    {
      label: "可乐",
      value: "cola",
    },
    {
      label: "火锅",
      value: "hotpot",
    },
    {
      label: "烧烤",
      value: "bbq",
    },
    {
      label: "奶茶",
      value: "milktea",
    },
  ],
  options2: [
    {
      label: "Vue",
      value: "vue",
    },
    {
      label: "TypeScript",
      value: "typescript",
    },
    {
      label: "React",
      value: "react",
      disabled: true,
    },
  ],
  options3: [
    {
      name: "PandaGuo",
      id: 1,
    },
    {
      name: "GGBond",
      id: 2,
      disabled: true,
    },
    {
      name: "Ikun",
      id: 3,
    },
  ],
});
const { options, options2, options3 } = state;   
const curOption = (e) => {
  alert("label:" + e.label + " ,value:" +e.value);
};
</script>

# Select 选择器

前端开发中常见的当选项过多时使用的下拉菜单。

## 基本用法

适用于广泛的基础单选。

<div class="select-container">
    <pd-select :options="options" placeholder="请选择"></pd-select>
</div>

::: details 展开代码

```html
<template>
  <pd-select :options="options" placeholder="请选择"></pd-select>
</template>
<script setup lang="ts">
  import { reactive } from "vue";
  let options = reactive([
    {
      label: "可乐",
      value: "cola",
    },
    {
      label: "火锅",
      value: "hotpot",
    },
    {
      label: "烧烤",
      value: "bbq",
    },
    {
      label: "奶茶",
      value: "milktea",
    },
  ]);
</script>
```

:::

## 选项禁用

可以指定具体选项为禁用状态使其无法被选取。

<div class="select-container">
    <pd-select :options="options2" placeholder="请选择"></pd-select>
</div>

::: details 展开代码

```html
<template>
  <pd-select :options="options" placeholder="请选择"></pd-select>
</template>
<script setup lang="ts">
  import { reactive } from "vue";
  let options = reactive([
    {
      label: "Vue",
      value: "vue",
    },
    {
      label: "TypeScript",
      value: "typescript",
    },
    {
      label: "React",
      value: "react",
      disabled: true,
    },
  ]);
</script>
```

:::

## 下拉框禁用

通过给 pd-select 设置 disabled 禁用下拉框。

<div class="select-container">
    <pd-select :options="options" placeholder="请选择" disabled></pd-select>
</div>

::: details 展开代码

```html
<template>
  <pd-select :options="options" placeholder="请选择" disabled></pd-select>
</template>
<script setup lang="ts">
  import { reactive } from "vue";
  let options = reactive([
    {
      label: "Vue",
      value: "vue",
    },
    {
      label: "TypeScript",
      value: "typescript",
    },
    {
      label: "React",
      value: "react",
      disabled: true,
    },
  ]);
</script>
```

:::

## 数据字段自定义

在日常前端开发流程经常需要和后端接口统一好字段名，pd-select 可以通过`fileLabel`和`fileValue`对数据字段进行自定义。

<div class="select-container">
    <pd-select :options="options3" fileLabel="name" fileValue="id" placeholder="数据字段自定义"></pd-select>
</div>

::: details 展开代码

```html
<template>
  <pd-select
    :options="options"
    fileLabel="name"
    fileValue="id"
    placeholder="数据字段自定义"
  ></pd-select>
</template>
<script setup lang="ts">
  import { reactive } from "vue";
  let options = reactive([
    {
      name: "PandaGuo",
      id: 1,
    },
    {
      name: "GGBond",
      id: 2,
      disabled: true,
    },
    {
      name: "Ikun",
      id: 3,
    },
  ]);
</script>
```

:::

## change 事件回调

使用 @change 绑定一个函数方法时，当选中值发生变化时触发。

<div class="select-container">
   <pd-select :options="options2" @change="curOption" placeholder="选择选项触发change回调"></pd-select>
</div>

::: details 展开代码

```html
<template>
  <pd-select
    :options="options"
    @change="curOption"
    placeholder="选择选项触发change回调"
  ></pd-select>
</template>
<script setup lang="ts">
  import { reactive } from "vue";
  let options = reactive([
    {
      name: "PandaGuo",
      id: 1,
    },
    {
      name: "GGBond",
      id: 2,
      disabled: true,
    },
    {
      name: "Ikun",
      id: 3,
    },
  ]);
  const curOption = (e) => {
    alert("label:" + e.label + " ,value:" + e.value);
  };
</script>
```

:::
