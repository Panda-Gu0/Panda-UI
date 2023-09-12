<template>
  <div class="pd-radio">
    <div
      class="pd-radio-item"
      :class="[{ 'pd-radio-item-disabled': item.disabled }, inlineStyle]"
      v-for="(item, index) in options"
      :key="index"
      @click="chooseItem(item, index)"
    >
      <span :class="{ active: radioIndex === index }"></span>
      <p :class="{ 'label-active': radioIndex === index }">
        {{ getFieldValue(item, filedLabel) }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "pdRadio",
};
</script>
<script setup lang="ts">
import { computed, ref, Ref } from "vue";
import "./style/index.less";
import { radioProps } from "./types";
const props = defineProps(radioProps);
// 约束 options 子项的接口
interface optItemType {
  label: string;
  value: string;
  disabled?: boolean;
}

const options: Ref<optItemType[]> = computed(() => {
  return props.options as optItemType[];
});

// 获取断言类型的字段值
const getFieldValue = (item: optItemType, field: string) => {
  return item[field as keyof optItemType];
};

// 自定义 change 事件
const emit = defineEmits(["change"]);
const radioIndex = ref(-1);
// 元素排列方式
const inlineStyle = computed(() => {
  return props.inline ? "inline-flex" : "flex";
});
// 选中激活
const chooseItem = (item: optItemType, index: number) => {
  if (!item.disabled) {
    radioIndex.value = index;
    emit("change", item);
  }
};
</script>
<style lang="less" scoped>
// 自定义激活样式
span.active {
  background: v-bind(customColor) !important;
  border: 1px solid v-bind(customColor) !important;
}
.label-active {
  color: v-bind(customColor) !important;
}
</style>
