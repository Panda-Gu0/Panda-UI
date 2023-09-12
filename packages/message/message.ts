import element from "./index.vue";
import { VNode, createVNode, render } from "vue";

interface messageOptions {
  message: string;
  type?: {
    type: "success" | "info" | "warning" | "error";
    default: "info";
  };
  duration?: {
    type: number;
    default: 3000;
  };
  showClose?: {
    type: boolean;
    default: false;
  };
  offset?: {
    type: number;
    default: 20;
  };
  onClose?: () => void;
}
const instances: VNode[] = [];

export default function message(options: messageOptions) {
  if (typeof options === "string") {
    options = {
      message: options as string,
    };
  }

  let offset = options.offset || 20;

  instances.forEach((vnode: VNode) => {
    offset += vnode.el!.offsetHeight + 20;
  });

  const params = {
    ...options,
    offset,
  };
  const div = document.createElement("div");
  const vnode = createVNode(element, params);
  vnode.props!.onDestroy = () => {
    render(null, div); // render会移除dom，注意：此方法在vue2中无法使用
    instances.pop();
  };
  render(vnode, div);
  document.body.appendChild(div.firstElementChild!);
  instances.push(vnode);
}
