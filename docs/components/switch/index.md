<script setup>
import { ref } from 'vue';
let status1 = ref(true); 
let status2 = ref(true); 
let status3 = ref(true); 
let status4 = ref(true); 
let status5 = ref(true); 
let status6 = ref(true); 
</script>

# Switch 按钮开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

可以设置`width`属性来改变开关的宽度。

<div class="switch-container">
<div class="switch-item">
  <pd-switch v-model="status1"></pd-switch>
</div>
  <pd-switch v-model="status1" width="200"></pd-switch>
</div>

::: details 展开代码

```html
<template>
  <pd-switch v-model="status"></pd-switch>
  <pd-switch v-model="status" width="200"></pd-switch>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  let status: Ref<any> = ref(true);
</script>
```

:::

## 文字描述

设置 `active-text` 和 `inactive-text` 来开启 switch 开关的文字描述

<div class="switch-container">
    <div class="switch-item">
      <pd-switch v-model="status2" active-text="自动续费" inactive-text="取消续费"></pd-switch>
    </div>
</div>

::: details 展开代码

```html
<template>
  <pd-switch
    v-model="status"
    active-text="自动续费"
    inactive-text="手动续费"
  ></pd-switch>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  let status: Ref<any> = ref(true);
</script>
```

:::

## 背景颜色更改

通过设置 `activeColor` 和 `inactiveColor` 属性可以分别修改开关激活和开关关闭状态时的背景颜色,设置`textColor`可以修改文字描述的颜色。

<div class="switch-container">
    <div class="switch-item">
      <pd-switch v-model="status3"></pd-switch>
    </div>
    <div class="switch-item">
      <pd-switch v-model="status4" activeColor="green" inactiveColor="red"></pd-switch>
    </div>
    <div class="switch-item">
      <pd-switch v-model="status4" active-text="自动续费" inactive-text="手动续费" textColor="#12d269"></pd-switch>
    </div>
</div>

::: details 展开代码

```html
<template>
  <pd-switch v-model="status1"></pd-switch>
  <pd-switch v-model="status2"></pd-switch>
  <pd-switch
    v-model="status2"
    active-text="自动续费"
    inactive-text="手动续费"
    textColor="#12d269"
  ></pd-switch>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  let status1: Ref<any> = ref(true);
  let status2: Ref<any> = ref(true);
</script>
```

:::

## 禁用状态

通过设置 disabled 禁止操作开关。

<div class="switch-container">
    <div class="switch-item">
      <pd-switch v-model="status6" disabled></pd-switch>
    </div>
</div>

::: details 展开代码

```html
<template>
  <pd-switch v-model="status" disabled></pd-switch>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  let status: Ref<any> = ref(true);
</script>
```

:::
