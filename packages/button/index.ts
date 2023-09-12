import { App, Plugin } from "vue";
import button from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdButton.name, pdButton);
  };
  return component as SFCWithInstall<T>;
};

const pdButton = withInstall(button);

export default pdButton;
