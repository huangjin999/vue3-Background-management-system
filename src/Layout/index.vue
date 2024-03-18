<template>
    <div class="layout_container" >

        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <!-- <Logo></Logo> -->
            <Logo :logo="logo" :title="title" :isCollapse="isCollapse" />

            <!-- 展示菜单 -->
            <!-- 滚动组件 -->
            <el-scrollbar class="scrollbar">
                <SidebarMenu />
            </el-scrollbar>
        </div>
        <div>

        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{ fold: isCollapse ? true : false }">
            <!-- layout组件的顶部导航tabbar -->
            <Header />

        </div>
        <!-- 内容展示区域 -->
        <div class="layout_main" :class="{ fold: isCollapse ? true : false }">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCollapseStore } from '@/stores/isCollapse.js'; 
// 侧边栏logo
import Logo from '@/Layout/components/Logo.vue';
// 侧边栏
import SidebarMenu from './components/SidebarMenu.vue'
// 头部
import Header from './components/Header.vue';
// 暗黑模式
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const collapseStore = useCollapseStore(); // 使用 Pinia 仓库

// 使用 Pinia 仓库的状态
const isCollapse = computed(() => collapseStore.isCollapse);
const title = ref('xx系统')
const logo = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'

</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        color: white;
        width: 200px;
        height: 100vh;
        // background: $base-menu-background;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - 50px);

            .el-menu {
                border-right: none;
            }
        }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - 200px);
        height: 50px;
        top: 0px;
        left: 200px;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - 63.5px);
            left: 63.5px;
        }
    }

    .layout_main {
        position: absolute;
        width: calc(100% - 200px);
        height: calc(100vh - 50px);
        left: 200px;
        top: 50px;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - 63.5px);
            left: 63.5px;
        }

    }
}
</style>