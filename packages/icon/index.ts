import { App, Plugin } from "vue";
import icon from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdIcon.name, pdIcon);
  };
  return component as SFCWithInstall<T>;
};

const pdIcon = withInstall(icon);

export default pdIcon;
