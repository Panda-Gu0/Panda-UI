<template>
<Transition>
  <div class="pd-backtop" v-show="showButton" @click="scrollToTop">
    <pd-icon name="fasong" color="#409eff"></pd-icon>
  </div>
</Transition>
</template>
<script lang="ts">
export default {
  name: "pdBacktop",
};
</script>
<script setup lang="ts">
import "./style/index.less";
import pdIcon from "../icon/index.vue";
import { onMounted, onUnmounted, ref } from "vue";

let showButton = ref(false);

// 触发返回顶部事件
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// 监听页面滚动
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  showButton.value = scrollTop > 0 ? true : false;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
})
</script>
