# Space 间距

`PandaUI`提供`<pd-space>`组件可以更加高效地进行`flex`布局

## 基础用法
使用 `<pd-space>`组件包裹需要进行`flex`布局的元素，通过给`gap`属性设置一个**只有两个值**的`一维数组`来控制元素间的间距，其中数组第一个值控制的是`y轴`间距，第二个值控制的是`x轴`间距。

<div class="space-container">
<pd-space :gap="[20, 20]" >
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
</pd-space>
</div>

::: details 展开代码

```html
<template>
  <pd-space :gap="[20, 20]" >
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
  <pd-button>Space</pd-button>
</pd-space>
</template>
```

:::

## 排列方式
在`<pd-space>`组件当中可以设置`横向排列`和`纵向排列`两种排列方式，具体通过设置`inline`属性来控制，默认排列方式为`横向排列`。

<div class="space-container">
<pd-space :gap="[20, 20]" >
  <pd-button>横向排列</pd-button>
  <pd-button>横向排列</pd-button>
  <pd-button>横向排列</pd-button>
  <pd-button>横向排列</pd-button>
  <pd-button>横向排列</pd-button>
</pd-space>
<hr/>
  <pd-space :inline="false" :gap="[20, 20]">
    <pd-button>纵向排列</pd-button>
    <pd-button>纵向排列</pd-button>
    <pd-button>纵向排列</pd-button>
  </pd-space>
</div>

::: details 展开代码

```html
<template>
<pd-space :gap="[20, 20]" >
  <pd-button>横向排列</pd-button>
  <pd-button>横向排列</pd-button>
  <pd-button>横向排列</pd-button>
  <pd-button>横向排列</pd-button>
  <pd-button>横向排列</pd-button>
</pd-space>
  <pd-space :inline="false" :gap="[20, 20]">
    <pd-button>纵向排列</pd-button>
    <pd-button>纵向排列</pd-button>
    <pd-button>纵向排列</pd-button>
  </pd-space>
</template>
```

:::