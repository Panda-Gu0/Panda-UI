import { ExtractDefaultPropTypes } from "vue";

export const radioProps = {
  options: {
    type: Array,
    default: () => [],
  },
  inline: { //  元素排列方向(默认横向)
    type: Boolean,
    default: true
  },
  filedLabel: { // 自定义 label 字段
    type: String,
    default: "label"
  },
  filedValue: { // 自定义 value 字段
    type: String,
    default: "value"
  },
  customColor: { // 自定义颜色
    type: String,
    default: "#409eff"
  }
};

export type RadioProps = ExtractDefaultPropTypes<typeof radioProps>;
