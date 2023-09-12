import { App, Plugin } from "vue";
import input from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdInput.name, pdInput);
  };
  return component as SFCWithInstall<T>;
};

const pdInput = withInstall(input);

export default pdInput;
