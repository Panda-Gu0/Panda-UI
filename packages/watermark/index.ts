import { App, Plugin } from "vue";
import watermark from "./index.vue";
type SFCWithInstall<T> = T & Plugin;
const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = function (app: App) {
    app.component(pdWatermark.name, pdWatermark);
  };
  return component as SFCWithInstall<T>;
};

const pdWatermark = withInstall(watermark);

export default pdWatermark;
