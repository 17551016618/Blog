import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    colors: [
      "#3366ff",
      "#009688",
      "#1976d2",
      "#536def",
      "#ff5c93",
      "#ee4f12",
      "#0096c7",
      "#9c27b0",
      "#ff9800",
    ],
  }),
  actions: {},
});
