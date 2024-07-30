<template>
  <el-watermark :font="font" :content="content">
    <div class="common-layout">
      <el-container>
        <el-header class="header-container">
          <layout>
            <template #menuNav>
              <menuNav />
            </template>
          </layout>
        </el-header>
        <el-main> <RouterView /></el-main>
      </el-container>
    </div>
  </el-watermark>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import { reactive, ref } from "vue";
// 添加水印
const font = reactive({
  color: "rgba(0, 0, 0, .15)",
  fontSize: 30,
});
const content = ref("嘿嘿");
</script>

<style lang="scss" scoped></style>
