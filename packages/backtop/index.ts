import { App, Plugin } from "vue";
import backtop from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdBacktop.name, pdBacktop);
  };
  return component as SFCWithInstall<T>;
};

const pdBacktop = withInstall(backtop);

export default pdBacktop;
