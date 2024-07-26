<template>
  <div>
    <h1 class="title">主页</h1>
    <el-button type="primary">按钮</el-button>
    <el-button type="primary">按钮</el-button>
    <h1 class="title">主页</h1>
    <el-tag>Tag 1</el-tag>
    <h1
      class="animate__animated animate__bounce"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
    >
      An animated element
    </h1>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/stores/theme";
import { storeToRefs } from "pinia";
const store = useThemeStore();
const { colors } = storeToRefs(store);
console.log(colors.value);
function mouseenter(e) {
  e.target.className = "animate__animated animate__bounce";
}
function mouseleave(e) {
  e.target.className = "";
}
// document.documentElement.style.setProperty(
//   "--el-button--primary",
//   colors.value[4]
// );

// document.documentElement.setAttribute("data-theme", "dark");
// 给element样式进行修改
handleThemeStyle("#0fad70");
function handleThemeStyle(theme) {
  document.documentElement.style.setProperty("--el-color-primary", theme);
  for (let i = 1; i <= 9; i++) {
    document.documentElement.style.setProperty(
      `--el-color-primary-light-${i}`,
      `${getLightColor(theme, i / 10)}`
    );
  }
  for (let i = 1; i <= 9; i++) {
    document.documentElement.style.setProperty(
      `--el-color-primary-dark-${i}`,
      `${getDarkColor(theme, i / 10)}`
    );
  }
}
// 变浅颜色值
function getLightColor(color, level) {
  let rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}

// 变深颜色值
function getDarkColor(color, level) {
  let rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor(rgb[i] * (1 - level));
  }
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
}
// rgb颜色转Hex颜色
function rgbToHex(r, g, b) {
  let hexs = [r.toString(16), g.toString(16), b.toString(16)];
  for (let i = 0; i < 3; i++) {
    if (hexs[i].length == 1) {
      hexs[i] = `0${hexs[i]}`;
    }
  }
  return `#${hexs.join("")}`;
}
// hex颜色转rgb颜色
function hexToRgb(str) {
  str = str.replace("#", "");
  let hexs = str.match(/../g);
  for (let i = 0; i < 3; i++) {
    hexs[i] = parseInt(hexs[i], 16);
  }
  return hexs;
}

// axios测试
import { homepageapi } from "@/api/homepage.ts";
homepageapi({ config_name: "标签质检" }).then((res) => {
  console.log(res, 93);
});
</script>

<style lang="scss" scoped>
.title {
  background: var(--el-color-primary-light-4);
}
.animate__animated.animate__bounce {
  --animate-duration: 2s;
}
</style>
