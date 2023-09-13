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
  <pd-radio
    :options="options2"
    filedLabel="name"
    filedValue="id"
    @change="change"
  ></pd-radio>
  <pd-backtop></pd-backtop>
  <pd-button @click="showDialog">显示弹窗</pd-button>
  <pd-dialog title="牛逼" :visible="visible" @cancel="closeDialog">
    这是一段自定义文字
  </pd-dialog>
</template>
<script setup lang="ts">
import { ref, reactive, Ref } from "vue";
import { pdMessage } from "../packages/index";
let text = ref("");
let visible = ref(false);
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
    message: "登录成功",
    type: "success",
    iconShow: true,
    turnOff: true,
  });
};
const showDialog = () => {
  visible.value = true;
};
const closeDialog = () => {
  visible.value = false;
};
</script>

<style scoped></style>
