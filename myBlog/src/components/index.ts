const comps: any = import.meta.glob("./*/index.vue", { eager: true }); // eager：true 表示全部导入
export default {
  install: function (app: any) {
    Object.keys(comps).forEach((key) => {
      // 注册组件为全局组件
      const vueComp = comps[key].default;
      // 注册组件
      app.component(vueComp.name, vueComp);
    });
  },
};
