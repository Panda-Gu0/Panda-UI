<template>
  <span
    class="inactive-text"
    v-if="showInactText"
    :class="{ 'selected-text-color': !checked }"
    @click="handleInput"
    >{{ inactiveText }}</span>
  <div
    class="pd-switch"
    :class="{ 'is-checked': checked, 'is-disabled': disabled }"
  >
    <input
      class="pd-switch__input"
      ref="inputRef"
      type="checkbox"
      :checked="checked"
      @change="handleInput"
      :true-value="trueValue"
      :false-value="falseValue"
    />
    <span class="pd-switch_action" style="cursor: pointer"></span>
  </div>
  <span
    class="active-text"
    v-if="showActText"
    :class="{ 'selected-text-color': checked }"
    @click="handleInput"
    >{{ activeText }}</span>
</template>

<script lang="ts">
  export default {
    name: "pdSwitch"
  }
</script>
<script setup lang="ts">
import { computed, ref, Ref, nextTick } from "vue";
import { switchProps } from "./types";
const props = defineProps(switchProps);
const widthPx = computed(() => {
  return props.width + "px";
});

const emits = defineEmits(["update:modelValue", "change"]);
const inputRef: Ref<HTMLInputElement | null> = ref(null);

// 判断当前开关状态
const checked = computed(() => {
  return props.modelValue === props.trueValue;
});

// 判断开关是否禁用
const disabled = computed(() => {
  return props.disabled;
});

// 判断是否使用文字描述
const showActText = computed(() => {
  return props.activeText?.length ? true : false;
});
const showInactText = computed(() => {
  return props.inactiveText?.length ? true : false;
});

// 获取当前 input 事件
const handleInput = () => {
  nextTick(() => {
    const val = !checked.value;      // 取反得到相反的状态
    inputRef.value!.checked = val;   // 更新开关状态
    emits("update:modelValue", val); // 开关点击后将状态传给 v-model
    emits("change", val);            // 开关状态发生改变后触发的回调
  });
};
</script>

<style lang="less" scoped>
@prefix: pd;

.@{prefix}-switch {
  position: relative;
  height: 18px;
  transition: background 0.2s;
  width: v-bind(widthPx);
  background: v-bind(inactiveColor);
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  .@{prefix}-switch__input {
    position: relative;
    z-index: 1;
    margin: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .@{prefix}-switch_action {
    position: absolute;
    transition: 0.2s;
    left: 2px;
    top: 2px;
    z-index: 0;
    height: 14px;
    width: 14px;
    background: #fff;
    border-radius: 50%;
  }
  &.is-checked {
    background: v-bind(activeColor);
    .@{prefix}-switch_action {
      left: 100%;
      background: #fff;
      margin-left: -16px;
    }
  }
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}

// 文字描述
.inactive-text {
    font-size: 14px;
    vertical-align: middle;
    margin-right: 1%;
    cursor: pointer;
}
.active-text {
    font-size: 14px;
    vertical-align: middle;
    margin-left: 1%;
    cursor: pointer;
}
.selected-text-color {
    color: v-bind(textColor)
}

</style>