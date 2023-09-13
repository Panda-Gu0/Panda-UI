import element from "./index.vue";
import { VNode, createVNode, render } from "vue";
// 约束消息选项类型
interface messageOptions {
  message: string;
  type?: string;
  showClose?: {
    type: boolean;
    default: false;
  };
  offset?: {
    type: number;
    default: 20;
  };
  onClose?: () => void;
  iconShow?: boolean;
  turnOff?: boolean;
}
// 组件实例数组
const instances: VNode[] = [];

export default function message(options: messageOptions) {
  if (typeof options === "string") {
    options = {
      message: options as string,
    };
  }

  let offset = options.offset || 20;

  instances.forEach((vnode: VNode) => {
    offset += vnode.el!.offsetHeight + 20; // 累计已存在消息组件的高度
  });

  const params = {
    ...options,
    offset,
  };
  const div = document.createElement("div");
  const vnode = createVNode(element, params);
  vnode.props!.onDestroy = () => {
    render(null, div); // render会移除dom，注意：此方法在vue2中无法使用
    instances.pop(); // 从实例数组中移除
  };
  render(vnode, div);
  document.body.appendChild(div.firstElementChild!);
  instances.push(vnode); // 添加组件实例到实例数组
}
