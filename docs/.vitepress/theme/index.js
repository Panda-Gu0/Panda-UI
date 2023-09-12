import DefaultTheme from "vitepress/theme";
import "../../../node_modules/ppanda-ui/dist/style.css";
import "./style/theme.less";

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    if (typeof window !== "undefined") {
      const PPandaUI = await import("ppanda-ui");
      app.use(PPandaUI.default);
    }
  }
};