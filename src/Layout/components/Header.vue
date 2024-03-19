<template>
  <div class="header">
    <div class="icons" @click="toggleCollapse">
      <el-icon v-if="!isCollapse" size="20">
        <Fold />
      </el-icon>
      <el-icon v-if="isCollapse" size="20">
        <Expand />
      </el-icon>
    </div>
    <div class="breadcrumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index" :to="item.path">
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">
        <el-dropdown>
          <span class="el-dropdown-link">
            账号信息
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click.native="handleUser">个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router'
import { useCollapseStore } from '@/stores/isCollapse.js';
import { useAuthStore } from "@/stores/authStore";

const route = useRoute();
// 仓库状态
const collapseStore = useCollapseStore();
// 使用是否则折叠的 仓库状态
const isCollapse = computed(() => collapseStore.isCollapse);
// icon折叠和展开
const toggleCollapse = () => {
  collapseStore.$patch({
    isCollapse: !collapseStore.isCollapse
  });
};

// 计算面包屑
const breadcrumbItems = computed(() => {
  let matchedRoutes = route.matched;
  let breadcrumb = matchedRoutes.map((routeRecord) => {
    return {
      path: routeRecord.path,
      meta: routeRecord.meta
    };
  });
  return breadcrumb;
});
// 用户中心
const handleUser = () => {
  // 路由跳转
  router.push(`/stu/users/user`);
};
//退出登录
const store = useAuthStore();
const logout = () => {
  store.logout();
};

</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  // background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .breadcrumbs {
    flex-grow: 1;
    padding: 0 15px;

    .el-breadcrumb {
      font-size: 12px;
      color: #54a7f6;
    }

  }

  .right {
    display: flex;
    align-items: center;

    .item {
      margin-left: 20px;
      padding: 5px 10px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #eee;
      }

      .example-showcase .el-dropdown-link {
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
      }
    }
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 15px;
    // background-color: #e6e6e6;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #dcdcdc;
    }

    el-icon {
      font-size: 20px;
      color: #606266;
    }
  }
}
</style>