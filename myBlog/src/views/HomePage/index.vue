<template>
  <div id="homepage" ref="homepageRef">
    <img :src="themeMode == 'light' ? bgday : bgdark" alt="" class="bg" />
    <div class="star star1"></div>
    <div class="star star2"></div>
    <div class="star star3"></div>
 
  </div>
</template>
<script></script>
<script setup>
import {
  ref,
  reactive,
  getCurrentInstance,
  nextTick,
  onMounted,
  computed,
} from "vue";
const { proxy } = getCurrentInstance();
// function mouseenter(e) {
//   e.target.className = "animate__animated animate__bounce";
// }
// function mouseleave(e) {
//   e.target.className = "";
// }

onMounted(() => {
  // 创建星星
  var element = document.getElementById("homepage");
  function animate() {
    for (let i = 0; i < 50; i++) {
      let random = function left() {
        return Math.pow(Math.random() * 10, 2);
      };
      let el = document.createElement("div");
      element.appendChild(el);
      el.style.width = "2px";
      el.style.height = "2px";
      el.style.background = "#fff";
      el.style.position = "absolute";
      el.style.left = random() + "%";
      el.style.top = random() + "%";
    }
  }
  animate();
});
// 根据主题判断主页背景图
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/stores/theme";
const store = useThemeStore();
const { themeMode } = storeToRefs(store);
import bgday from "@/assets/image/bg-day.jpg";
import bgdark from "@/assets/image/bg.png";
</script>

<style lang="scss" scoped>
#homepage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #161823;
  position: relative;
  .bg {
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
  }
  .star1 {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 3px;
    background: #fff;
    animation: animate1 5s linear infinite;
  }
  .star2 {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 3px;
    background: #fff;
    animation: animate2 3s linear infinite;
  }
  .star3 {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 3px;
    background: #fff;
    animation: animate3 5s linear infinite;
  }
  @keyframes animate1 {
    0% {
      left: 70%;
      top: 100%;
    }

    100% {
      left: 70%;
      top: 0;
    }
  }
  @keyframes animate2 {
    0% {
      left: 30%;
      top: 100%;
    }
    100% {
      left: 30%;
      top: 0;
    }
  }
  @keyframes animate3 {
    0% {
      left: 0;
      top: 100%;
    }
    100% {
      left: 100%;
      top: 0;
    }
  }
}

.title {
  background: var(--el-color-primary-light-4);
}
</style>
