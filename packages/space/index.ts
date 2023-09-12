import { App, Plugin } from "vue";
import space from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdSpace.name, pdSpace);
  };
  return component as SFCWithInstall<T>;
};

const pdSpace = withInstall(space);

export default pdSpace;
