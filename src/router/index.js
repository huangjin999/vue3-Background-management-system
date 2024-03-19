import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/Layout/index.vue";

export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    meta: { title: "一级菜单 - home", icon: "DataLine" },
    children: [
      {
        path: "home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
        meta: { title: "二级菜单 Home"},
      },
    ],
  },
  // 登录
  {
    path: "/login",
    meta: { title: "login", icon: "House" },
    component: () => import("@/views/Login/index.vue"),
    hidden: true,
  },
  {
    path: "/list",
    component: Layout,
    redirect: "/list/list",
    meta: { title: "一级菜单 - list", icon: "DataLine" },
    children: [
      {
        path: "list",
        component: () => import("@/views/List/List.vue"),
        name: "listPage",
        meta: { title: "二级菜单 - List" },
        hidden: false,
      },
      {
        path: "detail",
        component: () => import("@/views/List/Detail.vue"),
        name: "detail",
        meta: { title: "二级菜单 - Detail" },
      },
      {
        path: "todo",
        component: () => import("@/views/List/Todo.vue"),
        name: "todo",
        meta: { title: "二级菜单 - Todo" },
      },
    ],
  },
  {
    path: "/stu",
    component: Layout,
    redirect: "/stu/sku",
    meta: { title: "一级菜单 - sku", icon: "DataLine" },
    children: [
      {
        path: "sku",
        component: () => import("@/views/stu/sku.vue"), // 根路径，对应 /404
        name: "sku",
        meta: { title: "二级菜单 - sku" },
      },
      {
        path: "sku02", // 修改为根路由的一部分
        component: () => import("@/views/stu/sku02.vue"),
        name: "stu02",
        meta: { title: "二级菜单 - sku02" },
      },
      {
        path: "sku03", // 修改为根路由的一部分
        component: () => import("@/views/stu/sku03.vue"),
        name: "stu03",
        meta: { title: "二级菜单 - sku03" },
      },
      {
        path: "users",
        component: () => import("@/views/stu/users/index.vue"),
        name: "users",
        meta: { title: "个人中心" },
        children: [
          {
            path: "user",
            component: () =>
              import("@/views/stu/users/user/index.vue"),
            name: "user",
            meta: { title: "个人信息" },
          },
          {
            path: "userarr",
            component: () =>
              import("@/views/stu/users/userarr/index.vue"),
            name: "userarr",
            meta: { title: "群组信息" },
          },
        ],
      },
    ],
  },
  {
    path: "/error",
    // hidden: true,
    component: Layout,
    redirect: "/error/401",
    meta: { title: "错误页 - error", icon: "Warning" },
    children: [
      {
        path: "401",
        component: () => import("@/views/error/401/index.vue"), 
        name: "401",
        meta: { title: "error - 401" },
      },
      {
        path: "404",
        component: () => import("@/views/error/404/index.vue"), 
        name: "404",
        meta: { title: "error - 404" },
      },
      
    ],
  },

  // 放在最后，没有路由就访问404
  {
    path: "/:pathMatch(.*)",
    redirect: "/result/404",
    hidden: true,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: constantRoutes,
});






export default router;
