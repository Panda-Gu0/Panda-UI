import pdButton from "./button/index";
import pdIcon from "./icon/index";
import pdInput from "./input/index";
import pdSelect from "./select/index";
import pdWatermark from "./watermark/index";
import pdSwitch from "./switch/index";
import pdSpace from "./space/index";
import pdRadio from "./radio/index";
import pdBacktop from "./backtop/index";
import pdMessage from "./message/message";
import pdDialog from "./dialog/index";
import { App } from "vue";
const install = (app: App) => {
  app.use(pdButton);
  app.use(pdIcon);
  app.use(pdInput);
  app.use(pdSelect);
  app.use(pdWatermark);
  app.use(pdSwitch);
  app.use(pdSpace);
  app.use(pdRadio);
  app.use(pdBacktop);
  app.use(pdDialog);
  app.config.globalProperties.message = pdMessage; 
};
const PandaUI = {
  install,
};
export {
  pdButton,
  pdIcon,
  pdInput,
  pdSelect,
  pdWatermark,
  pdSwitch,
  pdSpace,
  pdRadio,
  pdBacktop,
  pdDialog,
  pdMessage,
};
export default PandaUI;
