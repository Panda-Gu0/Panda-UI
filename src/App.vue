<template>
  <pd-button type="primary" icon="sousuo">搜索</pd-button>
  <pd-icon name="diannao"></pd-icon>
  <pd-input v-model="text" showPassword></pd-input>
  <pd-select :options="options" placeholder="请选择"></pd-select>
  <div class="box" style="width: 400px; height: 200px; background: black">
    <pd-watermark showTime></pd-watermark>
  </div>
  <pd-switch v-model="status" disabled></pd-switch>
  <pd-switch
    v-model="status"
    activeColor="green"
    inactiveColor="red"
    width="200"
  ></pd-switch>
  <pd-space :inline="false">
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
  </pd-space>
  <pd-space inline :gap="[20, 20]">
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
    <pd-button>Button</pd-button>
  </pd-space>
  <pd-radio :options="options"></pd-radio>
  <pd-radio :options="options" :inline="false"></pd-radio>
  <pd-radio :options="options2" filedLabel="name" filedValue="id" @change="change"></pd-radio>
  <pd-backtop></pd-backtop>
</template>
<script setup lang="ts">
import { ref, reactive, Ref } from "vue";
import { pdMessage } from "../packages/index"
let text = ref("");
let status: Ref<any> = ref(true);
let options = reactive([
  {
    label: "可乐",
    value: "cola",
  },
  {
    label: "火锅",
    value: "hotpot",
  },
  {
    label: "烧烤",
    value: "bbq",
    disabled: true,
  },
  {
    label: "奶茶",
    value: "milktea",
  },
]);
const options2 = reactive([
  {
    name: "GGBond",
    id: 1,
    disabled: true,
  },
  {
    name: "PandaGuo",
    id: 2,
  },
  {
    name: "GYH",
    id: 3,
  },
]);
const change = (e: any) => {
  console.log(e);
 pdMessage({
  message: "你说的对，这就是奎桑提，巴拉巴拉，啊啊啊啊啊！！",
  type: "success",
  iconShow: true,
  turnOff: true
});
}
</script>

<style scoped></style>
