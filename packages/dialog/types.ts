import { ExtractDefaultPropTypes } from "vue";

export const dialogProps = {
  title: {
    type: String,
    default: "提示",
  },
  visible: {
    type: Boolean,
    default: false,
  },
};

export type DialogProps = ExtractDefaultPropTypes<typeof dialogProps>;
