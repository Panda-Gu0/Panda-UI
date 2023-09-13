<template>
  <transition name="message-fade" @after-leave="$emit('destroy')">
    <div
      class="pd-message"
      :class="typeClass"
      v-show="visible"
      :style="topStyle"
    >
      <pd-icon
        v-if="iconShow"
        :name="typeIcon[0]"
        :color="typeIcon[1]"
      ></pd-icon>
      <p class="pd-message-content">{{ message }}</p>
      <pd-icon
        name="cuo"
        class="close-button"
        v-if="turnOff"
        :color="typeIcon[1]"
        @click="close"
      ></pd-icon>
    </div>
  </transition>
</template>
<script lang="ts">
export default {
  name: "pdMessage",
};
</script>
<script setup lang="ts">
import "./style/index.less";
import pdIcon from "../icon/index.vue";
import { computed, onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  message: {
    // 消息内容
    type: String,
    default: "",
  },
  type: {
    // 消息提示类型
    type: String,
    default: "info",
  },
  duration: {
    // 动画持续时间
    type: Number,
    default: 3000,
  },
  offset: {
    // 提示框偏移量
    type: Number,
  },
  iconShow: {
    // 是否显示图标
    type: Boolean,
    default: true,
  },
  turnOff: {
    // 是否可手动关闭
    type: Boolean,
    default: false,
  },
});
const visible = ref(false);
let timer: NodeJS.Timeout | null = null;

// 显示弹窗
const start = () => {
  visible.value = true;
  if (timer !== null) {
    clearTimeout(timer);
  }
  if (props.duration > 0) {
    timer = setTimeout(() => {
      visible.value = false;
    }, props.duration);
  }
};

// 手动关闭弹窗
const close = () => {
  visible.value = false;
};

onMounted(() => {
  start();
});

onUnmounted(() => {
  if (timer !== null) {
    clearTimeout(timer);
  }
});
// 设置 message 弹窗偏移量
const topStyle = computed(() => {
  return {
    top: `${props.offset}px`,
  };
});

// 设置 message 消息类型样式
const typeClass = computed(() => {
  return {
    [`pd-message-${props.type}`]: props.type,
  };
});

// 设置不同消息类型图标(图标类型和图标颜色)
const typeIcon = computed(() => {
  switch (props.type) {
    case "success":
      return ["dui", "#67c23a"];
    case "info":
      return ["info", "#a6a8ad"];
    case "warning":
      return ["warning", "#e6a23c"];
    case "error":
      return ["clearable", "#f67d7d"];
    default:
      return ["", "#a6a8ad"];
  }
});
</script>
