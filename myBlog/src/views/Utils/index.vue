<script setup>
import { ref } from "vue";
import { UTILS } from "@/config/utilsData.js";

let httpdata = ref(UTILS);
const tolook = (path) => {
  window.open(path);
};
</script>
<template>
  <div id="utils-container">
    <el-card class="box-card" v-for="item in httpdata" :key="item.typeName">
      <template #header>
        <div class="card-header">
          <span>{{ item.typeName }}</span>
        </div>
      </template>
      <ul class="ul">
        <li
          v-for="i in item.child"
          :key="i.path"
          class="text item"
          :title="i.title"
          @click="tolook(i.path)"
        >
          <img :src="i.favicon" class="img" />
          <span> {{ i.name }}</span>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<style>
#utils-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

.text {
  font-size: 14px;
  list-style: none;
  width: 20%;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.item {
  margin-bottom: 18px;
}

.img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.box-card {
  width: 800px;
  margin-top: 50px;
}
</style>
