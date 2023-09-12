import { App, Plugin } from "vue";
import select from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdSelect.name, pdSelect);
  };
  return component as SFCWithInstall<T>;
};

const pdSelect = withInstall(select);

export default pdSelect;
