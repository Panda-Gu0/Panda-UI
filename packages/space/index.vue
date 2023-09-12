<template>
  <div class="pd-space"></div>
</template>

<script lang="ts">
import { useSlots, VNode, h, computed } from "vue";
import { spaceProps } from "./types"
export default {
  name: "pdSpace",
  props: spaceProps,
  setup(props) {
    // 获取默认插槽内容
    const slots = useSlots();
    // 最终渲染到页面的 pd-space 样式
    const spaceStyle = computed(() => {
      return {
        display: props.inline ? "inline-flex" : "flex",
        gap: !props.inline ? `${props.gap[0]}px` : `${props.gap[0]}px ${props.gap[1]}px`,
        "flex-direction": props.inline ? "inherit" : "column",
        "align-items": "center",
        "flex-wrap": "wrap",
        width: "fit-content",
      };
    });
    // 循环遍历,使用 h 函数给插槽元素每个元素添加一层 div,
     const slotList = computed(() => {
      return slots.default?.().map((item: VNode) => {
        return h('div', {
          className: 'pd-space-item',
          style: 'width: fit-content',
        }, [item]);
      }) || [];
    });

    // 再次使用 h 函数将遍历后的元素渲染到页面
    return () => [
      h(
        "div",
        {
          className: "pd-space",
          style: spaceStyle.value,
        },
        slotList.value
      ),
    ];
  },
};
</script>
