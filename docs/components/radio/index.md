<script setup>
import { reactive } from 'vue';
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
    disabled: true,
  },
  {
    label: "奶茶",
    value: "milktea",
  },
]);
let options2 = reactive([
  {
    name: "GGBond",
    id: 1,
    disabled: true,
  },
  {
    name: "PandaGuo",
    id: 2,
  },
  {
    name: "GYH",
    id: 3,
  },
]);
const change = (e) => {
  alert("当前选项:" + e.label);
}
</script>

# Radio 单选框

在一组备选项中进行单选(选项数量较多时建议使用`Select选择器`)。

## 基本用法

给`options`设置备选项，其中`disabled`控制是否禁用该选项。

<div class="radio-container">
  <pd-radio :options="options"></pd-radio>
</div>

::: details 展开代码

```html
<template>
  <pd-radio :options="options"></pd-radio>
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
      disabled: true, // 禁用该选项
    },
    {
      label: "奶茶",
      value: "milktea",
    },
  ]);
</script>
```

:::

## 排列方式

通过设置`inline`属性控制选项的排列方式，默认排列方式为横向排列。

<div class="radio-container">
  <pd-radio :options="options"></pd-radio>
  <hr/>
  <pd-radio :options="options" :inline="false"></pd-radio>
</div>

::: details 展开代码

```html
<template>
  <pd-radio :options="options"></pd-radio>
  <pd-radio :options="options" :inline="false"></pd-radio>
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
      disabled: true, // 禁用该选项
    },
    {
      label: "奶茶",
      value: "milktea",
    },
  ]);
</script>
```

:::

## 数据字段自定义

在日常前端开发流程经常需要和后端接口统一好字段名，与`<pd-select>`相似，`<pd-radio>`可以通过`fileLabel`和`fileValue`对数据字段进行自定义。

<div class="radio-container">
  <pd-radio :options="options2" filedLabel="name" filedValue="id"></pd-radio>
</div>

::: details 展开代码

```html
<template>
  <pd-radio :options="options" filedLabel="name" filedValue="id"></pd-radio>
</template>
<script setup lang="ts">
  import { reactive } from "vue";
  let options = reactive([
    {
      name: "GGBond",
      id: 1,
      disabled: true,
    },
    {
      name: "PandaGuo",
      id: 2,
    },
    {
      name: "GYH",
      id: 3,
    },
  ]);
</script>
```

:::

## change 事件回调

使用 @change 绑定一个函数方法时，当选中值发生变化时触发。

<div class="radio-container">
  <pd-radio :options="options" @change="change"></pd-radio>
</div>

::: details 展开代码

```html
<template>
  <pd-radio :options="options" @change="change"></pd-radio>
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
      disabled: true,
    },
    {
      label: "奶茶",
      value: "milktea",
    },
  ]);
  const change = (e) => {
    alert("当前选项:" + e.label);
  };
</script>
```

:::
