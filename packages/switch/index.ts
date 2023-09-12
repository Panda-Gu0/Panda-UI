import { App, Plugin } from "vue";
import witch from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdSwitch.name, pdSwitch);
  };
  return component as SFCWithInstall<T>;
};

const pdSwitch = withInstall(witch);

export default pdSwitch;
