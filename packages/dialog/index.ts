import { App, Plugin } from "vue";
import dialog from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdDialog.name, pdDialog);
  };
  return component as SFCWithInstall<T>;
};

const pdDialog = withInstall(dialog);

export default pdDialog;
