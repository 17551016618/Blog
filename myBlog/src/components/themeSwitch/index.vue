<template>
  <div id="switch-container">
    <div class="weather" v-if="weatherObj.city">
      <div>
        <span>{{ weatherObj.city }}</span>
        <span>{{ weatherObj.data?.type }}</span>
      </div>
      <div>
        <!-- <span>图</span> -->
        <span>{{ `${weatherObj.data?.low}~${weatherObj.data?.high}` }}</span>
      </div>
    </div>

    <div class="switch" @click="changeSwitch">
      <div class="sun" ref="sunRef">
        <img src="../../assets/image/sun.png" alt="" />
      </div>
      <div class="moon" ref="moonRef">
        <img src="../../assets/image/moon.png" alt="" />
      </div>
    </div>

    <div class="demo-color-block">
      <span class="demonstration">主题色</span>
      <el-color-picker v-model="color1" @change="changeColor" />
    </div>
  </div>
</template>

<script setup name="themeSwitch">
import { ref, reactive, getCurrentInstance, nextTick, onMounted } from "vue";
const { proxy } = getCurrentInstance();
import { useThemeStore } from "../../stores/theme";
import { storeToRefs } from "pinia";
const { changethemeMode, changethemeColor, themeMode } = useThemeStore();
const active = ref(true); // true 白色 false 黑色
const sunbottom = ref(-40);
const sunRef = ref();
const moonRef = ref();
function changeSwitch() {
  if (active.value) {
    // 如果当前是白色
    sunRef.value.style.bottom = "-30px";
    moonRef.value.style.top = "5px";
    // 定义一个全局的颜色吧
    changethemeMode("dark");
  } else {
    sunRef.value.style.bottom = "5px";
    moonRef.value.style.top = "-30px";
    // 定义一个全局的颜色吧
    changethemeMode("light");
  }
  active.value = !active.value;
}

//主题色
const color1 = ref(localStorage.getItem("themeColor"));
function changeColor(val) {
  changethemeColor(val);
}
onMounted(() => {
  changeColor(color1.value);
});

// 天气
import { weatherapi } from "@/api/thirdparty";
const weatherObj = ref({});
async function getWeather() {
  const { data } = await weatherapi();
  if (data.success) {
    Object.assign(weatherObj.value, data);
  }
}
getWeather();
</script>

<style lang="scss" scoped>
#switch-container {
  color: var(--el-color-primary-light-4);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .weather {
    min-width: 150px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      span {
        min-width: 60px;
        text-align: center;
        line-height: 20px;
      }
    }
  }
  .switch {
    min-width: 120px;

    height: 40px;
    border-radius: 20px;
    position: relative;
    border: 1px solid #eee;
    overflow: hidden;
    .sun {
      position: absolute;
      bottom: 5px;
      left: 20px;
      width: 30px;
      height: 30px;
      transition: bottom 0.1s linear;
    }
    .moon {
      position: absolute;
      top: -30px;
      right: 20px;
      width: 30px;
      height: 30px;
      transition: top 0.1s linear;
    }
  }
}
</style>
