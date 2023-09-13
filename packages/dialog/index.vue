<template>
  <Transition>
    <div class="pd-dialog" v-if="visible">
      <!-- 遮罩 -->
      <div class="dialog-cover"></div>
      <!-- 主体内容 -->
      <div class="pd-dialog-warpper">
        <div class="pd-dialog-header">
          <span class="title" v-text="title"></span>
          <span class="close" @click="close">
            <pd-icon name="cuo"></pd-icon>
          </span>
        </div>
        <div class="pd-dialog-content">
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>
<script lang="ts">
export default {
  name: "pdDialog",
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import pdIcon from "../icon/index.vue";
import "./style/index.less";
import { dialogProps } from "./types";
const props = defineProps(dialogProps);
const title = computed(() => { return props.title });
const visible = computed(() => { return props.visible });
// 自定义事件
const emit = defineEmits(["cancel"]);
// 关闭对话框
const close = () => {
  emit("cancel");
};
</script>
