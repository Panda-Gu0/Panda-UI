<script setup>
import { ref } from 'vue';
let inputText1 = ref(""); 
let inputText2 = ref(""); 
let inputText3 = ref(""); 
let inputText4 = ref(""); 
let inputText5 = ref(""); 
let inputText6 = ref(""); 
let inputText7 = ref(""); 
</script>
# Input 输入框

通过鼠标或键盘输入字符。

:::warning
Input 为受控组件，它`总会显示 Vue 绑定值`。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。

不支持 `v-model 修饰符`。
:::

## 基础用法
<div class="input-container">
<pd-input placeholder="请输入内容" v-model="inputText1"></pd-input>
</div>

::: details 展开代码

```html
<template>
  <div>
    <pd-input v-model="inputText"><pd-input>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputText = ref('');
</script>
```

:::



## 禁用状态

通过 `disabled` 属性禁止 input 组件，阻止用户进行内容输入。

<div class="input-container">
<pd-input placeholder="禁止状态" v-model="inputText2" disabled></pd-input>
</div>

::: details 展开代码

```html
<template>
  <div>
    <pd-input v-model="inputText" disabled><pd-input>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputText = ref('');
</script>
```

:::



## 可清空按钮

通过 设置 `clearable` 属性添加一键清空输入框功能。

<div class="input-container">
<pd-input placeholder="可清空按钮" v-model="inputText3" clearable></pd-input>
</div>

::: details 展开代码

```html
<template>
  <div>
    <pd-input v-model="inputText" clearable><pd-input>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputText = ref('');
</script>
```

:::



## 密码框

通过设置 `showPassword` 属性控制是否显示密码框

<div class="input-container">
<pd-input v-model="inputText4" showPassword></pd-input>
</div>

::: details 展开代码

```html
<template>
  <div>
    <pd-input v-model="inputText" showPassword><pd-input>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputText = ref('');
</script>
```

:::



## 带图标的输入框

带图标的输入框可以使原本的输入框根据辨识度，可以通过添加 `prefix-icon` 或 `suffix-icon` 属性分别在输入框的前后添加图标。

<div class="input-container">
<pd-input prefixIcon="zhanghao" v-model="inputText5"></pd-input>
<pd-input suffixIcon="mima"></pd-input>
</div>

::: details 展开代码

```html
<template>
  <div>
    <pd-input prefixIcon="zhanghao" v-model="inputText"></pd-input>
    <pd-input suffixIcon="mima"></pd-input>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputText = ref('');
</script>
```

:::



## 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`，其中可以通过设置 `resize `属性将文本框高度固定。

<div class="input-container">
<pd-input textarea v-model="inputText6" placeholder="高度不固定"></pd-input>
<pd-input textarea v-model="inputText7" resize placeholder="高度固定"></pd-input>
</div>

::: details 展开代码

```html
<template>
  <div>
    <pd-input textarea v-model="inputText" placeholder="高度不固定"></pd-input>
    <pd-input textarea v-model="inputText" resize placeholder="高度固定"></pd-input>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputText = ref('');
</script>
```

:::