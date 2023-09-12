import { createApp } from "vue";
import App from "./App.vue";
import PandaUI from "../packages/index";
const app = createApp(App);
app.use(PandaUI);
app.mount("#app");