<template>
  <el-row :gutter="20">
    <el-col :span="3" style="display: flex; align-items: center">
      <img
        src="../../assets/image/logolight.png"
        alt=""
        class="logo"
        v-if="themeMode == 'light'"
      />
      <img src="../../assets/image/logodark.png" alt="" class="logo" v-else />
      <h2 class="logoTitle">DMHOU</h2>
    </el-col>
    <el-col :span="14">
      <slot name="menuNav"></slot>
    </el-col>
    <el-col :span="7">
      <themeSwitch />
    </el-col>
  </el-row>
</template>

<script setup name="layout">
// 根据主题判断logo
import { storeToRefs } from "pinia";
import { useThemeStore } from "../../stores/theme";
const store = useThemeStore();
const { themeMode } = storeToRefs(store);
//LAYOUT
// axios测试
import { homepageapi } from "@/api/homepage.ts";
homepageapi({ config_name: "标签质检" }).then((res) => {
  console.log(res, 93);
});
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.logo {
  height: 50px;
  line-height: 60px;

  filter: drop-shadow();
}
.logoTitle {
  font-size: 20px;
  font-family: fantasy;
  line-height: 20px;
  align-self: flex-end;
  margin-left: 10px;
  color: #fff;
  /* 创建一个从红色到蓝色的线性渐变 */
  background: linear-gradient(to right, #ff0000, #fff000);

  // background-clip: text;
  // /* 设置背景为透明，以便文字颜色显示出来 */
  // background-image: none;
}
</style>
