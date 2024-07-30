<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-demo"
    mode="horizontal"
    style="min-width: 500px"
    router
    :text-color="themeMode == 'light' ? '#000' : '#fff'"
  >
    <el-menu-item index="/">
      <el-icon><i class="iconfont icon-shouye"></i></el-icon>
      <span> 首 页 </span>
    </el-menu-item>
    <el-menu-item index="/Article">
      <el-icon><i class="iconfont icon-16"></i></el-icon>
      文 章</el-menu-item
    >
    <el-menu-item index="/About">
      <el-icon><i class="iconfont icon-guanyuwomen"></i></el-icon>
      关 于</el-menu-item
    >
    <el-menu-item index="/Utils">
      <el-icon><i class="iconfont icon-shezhi"></i></el-icon>
      工 具</el-menu-item
    >
    <el-menu-item index="/Projects">
      <el-icon><i class="iconfont icon-xiangmu"></i></el-icon>
      项 目</el-menu-item
    >
  </el-menu>
</template>

<script setup name="menuNav">
import { ref, reactive, getCurrentInstance, nextTick } from "vue";
const { proxy } = getCurrentInstance();
import { storeToRefs } from "pinia";
import { useThemeStore } from "../../stores/theme";
const store = useThemeStore();
const { themeMode } = storeToRefs(store);
</script>

<style lang="scss" scoped></style>
