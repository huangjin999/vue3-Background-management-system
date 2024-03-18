<!--
 * @Author: huangjin999
 * @Date: 2024-03-14 14:32:32
 * @LastEditors: huangjin999
 * @LastEditTime: 2024-03-18 14:40:14
-->
<template>
    <div class="sidebar-logo-container" :class="{'collapse': isCollapse}">
      <transition name="sidebarLogoFade">
        <router-link v-if="!isCollapse" key="expand" class="sidebar-logo-link" to="/">
          <img :src="logo" class="sidebar-logo">
          <h1 class="sidebar-title">{{ title }}</h1>
        </router-link>
        <router-link v-else key="collapse" class="sidebar-logo-link" to="/">
          <img :src="logo" class="sidebar-logo collapse">
        </router-link>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    logo: String,
    title: String,
    isCollapse: Boolean
  });
  </script>
<style scoped lang="scss">


.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
 height: 50px;
  text-align: center;
  transition: width 0.3s ease;


  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #54a7f6;
      font-weight: 600;
      font-size: 20px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    width: 80px; 
    .sidebar-logo {
      margin-right: 0px;
    }
    .sidebar-title {
      display: none;
    }
  }
}
</style>
  