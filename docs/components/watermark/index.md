# WaterMark 水印

通过使用 `pd-watermark` 标签包裹容器实现水印功能。

## 基本用法

在顶层容器下使用`pd-watermark`标签包裹主要内容，通过设置`markName`可以自定义水印内容。

<div class="watermark-container">
<div style="height:200px;background:black;">
  <pd-watermark markName="测试水印" isShowTime>
    <pd-button type="primary">Button</pd-button>
  </pd-watermark>
</div>
</div>

::: details 展开代码

```html
<template>
  <div class="watermark-container">
    <div style="height:200px;background:black;">
      <pd-watermark markName="测试水印" isShowTime>
        <pd-button type="primary">Button</pd-button>
      </pd-watermark>
    </div>
  </div>
</template>
```

:::


## Watermark Attributes

|    参数    |         说明         |  类型   |  默认值  |
| :--------: | :------------------: | :-----: | :------: |
| isShowTime | 是否显示水印生成时间 | boolean |  false   |
| fontColor  |     水印文字颜色     | string  | #484848  |
|  markName  |     设置水印内容     | string  | PandaGuo |

