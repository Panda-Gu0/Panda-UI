import { App, Plugin } from "vue";
import collapse from "./index.vue";
import collapseItem from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdCollapse.name, pdCollapse);
    app.component(pdCollapseItem.name, pdCollapseItem);
  };
  return component as SFCWithInstall<T>;
};

const pdCollapse = withInstall(collapse);
const pdCollapseItem = withInstall(collapseItem);

export { pdCollapse, collapseItem };
export default pdCollapse;
