import { defineStore } from "pinia";
import { handleThemeStyle } from "@/utils/theme";
export const useThemeStore = defineStore("theme", {
  state: () => ({
    themeColor: localStorage.getItem("themeColor"),
    themeMode: "light",
  }),
  actions: {
    changethemeMode(mode: any) {
      //  切换暗黑模式
      this.themeMode = mode;
      // 改变主题
      document.documentElement.setAttribute("data-theme", mode);
    },
    changethemeColor(color: any) {
      this.themeColor = color;
      // 改变皮肤
      // 定义主题
      // 给element样式进行修改
      handleThemeStyle(color);
      // 并且要保存到本地 防止刷新重置啊
      localStorage.setItem("themeColor", color);
    },
  },
});
