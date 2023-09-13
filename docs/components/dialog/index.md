<script setup>
import { ref } from "vue";
let visible = ref(false);
const showDialog = () => {
  visible.value = true;
};
const closeDialog = () => {
  visible.value = false;
};
</script>

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

<div class="dialog-container">
<pd-button @click="showDialog">Dialog</pd-button>
  <pd-dialog :visible="visible" @cancel="closeDialog">
    这是一段自定义文字
  </pd-dialog>
</div>

::: details 展开代码

```html
<template>
  <pd-button @click="showDialog">Dialog</pd-button>
  <pd-dialog :visible="visible" @cancel="closeDialog">
    这是一段自定义文字
  </pd-dialog>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  let visible = ref(false);
  const showDialog = () => {
    visible.value = true;
  };
  const closeDialog = () => {
    visible.value = false;
  };
</script>
```

:::

## 自定义内容

通过设置 title,来展示自定义内容。

<div class="dialog-container">
<pd-button @click="showDialog">Custom title</pd-button>
  <pd-dialog title="自定义标题" :visible="visible" @cancel="closeDialog">
    这是一段自定义文字
  </pd-dialog>
</div>

::: details 展开代码

```html
<template>
  <pd-button @click="showDialog">Custom title</pd-button>
  <pd-dialog title="自定义标题" :visible="visible" @cancel="closeDialog">
    这是一段自定义文字
  </pd-dialog>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  let visible = ref(false);
  const showDialog = () => {
    visible.value = true;
  };
  const closeDialog = () => {
    visible.value = false;
  };
</script>
```

:::