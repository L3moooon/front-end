<template>
  <!-- <router-view></router-view>
    -->
  <router-view v-slot="{ Component, route }">
    <!-- 使用任何自定义过渡和回退到 `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script setup>
import "./styles/reset.scss";
import "@/utils/rem";
import "@/font/iconfont";
import "element-plus/dist/index.css";
import "@/styles/icon.css";
import "@/styles/scrollbar.scss";
import "@/styles/transitions.css";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #303133;
  font-size: 0.75rem;
}
</style>
