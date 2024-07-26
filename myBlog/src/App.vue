<template>
  <el-watermark :font="font" :content="content">
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-main> <RouterView /></el-main>
      </el-container>
    </div>
  </el-watermark>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import { reactive, ref } from "vue";
// import { isDark } from "~/composables/dark";

const font = reactive({
  color: "rgba(0, 0, 0, .15)",
  fontSize: 30,
});
const content = ref("嘿嘿");

// watch(
//   isDark,
//   () => {
//     font.color = isDark.value
//       ? "rgba(255, 255, 255, .15)"
//       : "rgba(0, 0, 0, .15)";
//   },
//   {
//     immediate: true,
//   }
// );
</script>

<style lang="scss" scoped></style>
