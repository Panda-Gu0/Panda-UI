# Button 按钮

常规的操作按钮。

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="button-container">
<div class="button-type">
<pd-button type="default">default</pd-button>
<pd-button type="primary">primary</pd-button>
<pd-button type="success">success</pd-button>
<pd-button type="info">info</pd-button>
<pd-button type="warning">warning</pd-button>
<pd-button type="danger">danger</pd-button>
</div>
<div class="button-type">
<pd-button type="default" plain>default</pd-button>
<pd-button type="primary" plain>primary</pd-button>
<pd-button type="success" plain>success</pd-button>
<pd-button type="info" plain>info</pd-button>
<pd-button type="warning" plain>warning</pd-button>
<pd-button type="danger" plain>danger</pd-button>
</div>
<div class="button-type">
<pd-button type="default" round>default</pd-button>
<pd-button type="primary" round>primary</pd-button>
<pd-button type="success" round>success</pd-button>
<pd-button type="info" round>info</pd-button>
<pd-button type="warning" round>warning</pd-button>
<pd-button type="danger" round>danger</pd-button>
</div>
</div>

::: details 展开代码

```html
<!-- 默认 -->
<pd-button type="default">default</pd-button>
<pd-button type="primary">primary</pd-button>
<pd-button type="success">success</pd-button>
<pd-button type="info">info</pd-button>
<pd-button type="warning">warning</pd-button>
<pd-button type="danger">danger</pd-button>

<!-- 朴素 -->
<pd-button type="default" plain>default</pd-button>
<pd-button type="primary" plain>primary</pd-button>
<pd-button type="success" plain>success</pd-button>
<pd-button type="info" plain>info</pd-button>
<pd-button type="warning" plain>warning</pd-button>
<pd-button type="danger" plain>danger</pd-button>

<!-- 圆角 -->
<pd-button type="default" round>default</pd-button>
<pd-button type="primary" round>primary</pd-button>
<pd-button type="success" round>success</pd-button>
<pd-button type="info" round>info</pd-button>
<pd-button type="warning" round>warning</pd-button>
<pd-button type="danger" round>danger</pd-button>
```

:::

## 禁用状态

按钮处在不可使用状态。

<div class="button-container">
<div class="button-type">
    <pd-button type="default" disabled>default</pd-button>
    <pd-button type="primary" disabled>primary</pd-button>
    <pd-button type="success" disabled>success</pd-button>
    <pd-button type="info" disabled>info</pd-button>
    <pd-button type="warning" disabled>warning</pd-button>
    <pd-button type="danger" disabled>danger</pd-button>
    </div>
</div>

::: details 展开代码

```html
<pd-button type="default" disabled>default</pd-button>
<pd-button type="primary" disabled>primary</pd-button>
<pd-button type="success" disabled>success</pd-button>
<pd-button type="info" disabled>info</pd-button>
<pd-button type="warning" disabled>warning</pd-button>
<pd-button type="danger" disabled>danger</pd-button>
```

:::

## 加载状态

按钮处在加载状态中(加载状态无法使用)

<div class="button-container">
  <div class="button-type">
    <pd-button type="primary" loading>Loading</pd-button>
  </div>
</div>

::: details 展开代码

```html
<pd-button type="primary" loading>Loading</pd-button>
```

:::

## 按钮尺寸

Button 组件提供3中不同的按钮尺寸，默认情况下为 " midium " 尺寸

<div class="button-container">
<div class="button-type">
<pd-button size="midium">midium</pd-button>
<pd-button size="small">small</pd-button>
<pd-button size="mini">mini</pd-button>
</div>
</div>

::: details 展开代码

```html
<pd-button size="midium">midium</pd-button>
<pd-button size="small">small</pd-button>
<pd-button size="mini">mini</pd-button>
```

:::

## 图标按钮

带有图标的按钮可以增加辨识度。

<div class="button-container">
<div class="button-type">
<pd-button type="primary" icon="sousuo" round></pd-button>
<pd-button type="danger" icon="shanchu"></pd-button>
<pd-button type="success" icon="shezhi"></pd-button>
<pd-button type="primary" icon="bianji">编辑</pd-button>
</div>
</div>

::: details 展开代码

```html
<pd-button type="primary" icon="sousuo" round></pd-button>
<pd-button type="danger" icon="shanchu"></pd-button>
<pd-button type="success" icon="shezhi"></pd-button>
<pd-button type="primary" icon="bianji">编辑</pd-button>
```

:::

## 文字链接

没有边框及背景色的按钮(纯文字)

<div class="button-container">
  <div class="button-type">
    <pd-button type="text">文字按钮</pd-button>
    <pd-button type="text" disabled>禁用</pd-button>
  </div>
</div>

::: details 展开代码

```html
<pd-button type="text">文字按钮</pd-button>
<pd-button type="text" disabled>禁用</pd-button>
```

:::