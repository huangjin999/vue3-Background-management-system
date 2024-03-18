<!--
 * @Author: huangjin999
 * @Date: 2024-03-14 13:31:44
 * @LastEditors: huangjin999
 * @LastEditTime: 2024-03-18 14:41:07
-->
<template>
  <div class="menu">
    <div class="bar">
      <el-scrollbar max-height='calc(100vh - 60px)'>
        <el-menu :default-active="defaultActiveIndex" class="el-menu-vertical-demo" :collapse="isCollapse"
          @open="handleOpen" @close="handleClose" unique-opened>
          <template v-for="item in menuList">
            <el-sub-menu v-if="item.children && item.children.length" :index="item.path" :key="item.path">
              <template #title>
                <el-icon>
                  <component :is="item.meta.icon" class="icon"></component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
              </template>
              <template v-for="child in item.children">
                <el-menu-item v-if="!child.children" :index="resolvePath(item.path, child.path)"
                  @click="navigateTo(resolvePath(item.path, child.path))" :key="child.path">
                  {{ child.meta.title }}
                </el-menu-item>
                <el-sub-menu v-else :index="resolvePath(item.path, child.path)">
                  <template #title><span>{{ child.meta.title }}</span></template>
                  <el-menu-item v-for="grandChild in child.children"
                    :index="resolvePath(resolvePath(item.path, child.path), grandChild.path)"
                    @click="navigateTo(resolvePath(resolvePath(item.path, child.path), grandChild.path))"
                    :key="grandChild.path">
                    {{ grandChild.meta.title }}
                  </el-menu-item>
                </el-sub-menu>
              </template>
            </el-sub-menu>
            <el-menu-item v-else :index="item.path" @click="navigateTo(item.path)">
              <el-icon>
                <component :is="item.meta.icon" class="icon"></component>
              </el-icon>
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-scrollbar>

    </div>

  </div>

</template>

<script setup>
import { ref, computed } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { useCollapseStore } from '@/stores/isCollapse.js' // 确保路径正确
const filterRoutes = (routes) => {
  return routes.filter(route => !route.hidden).map(route => {
    if (route.children && route.children.length > 0) {
      // 递归过滤子路由
      route.children = filterRoutes(route.children)
    }
    return route
  })
}
const menuList = filterRoutes(router.options.routes); // 路由列表
const route = useRoute() // 当前路由
const defaultActiveIndex = computed(() => route.path) // 当前路由的路径，选中侧边栏
const openedSubMenu = ref(null);
const collapseStore = useCollapseStore() // 使用 Pinia 仓库
// 使用 Pinia 仓库的状态
const isCollapse = computed(() => collapseStore.isCollapse)

//重新分配路径
const resolvePath = (basePath, childPath) => {
  const normalizedBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
  const normalizedChildPath = childPath.startsWith('/') ? childPath.slice(1) : childPath;
  return `${normalizedBasePath}/${normalizedChildPath}`;
};
//   路径跳转
const navigateTo = (path) => {
  router.push(path);
};

const handleOpen = (index) => {
  // 如果当前打开的二级菜单不是点击的这个，则更新变量
  if (openedSubMenu.value !== index) {
    openedSubMenu.value = index;
  }
};

const handleClose = (index) => {
  // 如果关闭的是当前打开的二级菜单，则清空变量
  if (openedSubMenu.value === index) {
    openedSubMenu.value = null;
  }
};

</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100vh - 60px);
  overflow: auto;
  overflow-x: hidden;

}

.menu {
  width: 200px;
  height: calc(100vh - 50px);


  .title {
    width: 100%;
    height: 60px;
    transition: width 0.3s ease;

    &.is-collapsed {
      width: 56px;
    }
  }

  .bar {
    width: 100%;
    height: calc(100vh - 60px);
  }
}

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
      color: #2e82d0;
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