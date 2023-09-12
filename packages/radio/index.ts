import { App, Plugin } from "vue";
import radio from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdRadio.name, pdRadio);
  };
  return component as SFCWithInstall<T>;
};

const pdRadio = withInstall(radio);

export default pdRadio;
