import { ExtractDefaultPropTypes } from "vue";
export const spaceProps = {
  inline: { // 元素排列方向(默认横向)
      type: Boolean,
      default: true
  },
  gap: { // 元素间距
      type: Array,
      default: [10, 10]
  }
};

export type SpaceProps = ExtractDefaultPropTypes<typeof spaceProps>;
