
import { getToken} from "@/utils/auth";
import router from '@/router'
import NProgress from 'nprogress' // 引入 NProgress
import 'nprogress/nprogress.css' // NProgress 样式


router.beforeEach((to, from, next) => {
    NProgress.start() // 路由切换时启动进度条
    if (!getToken() && to.path !== '/login') {
      // 用户未登录且目标路由不是登录页面，重定向到登录页面
      next(`/login?redirect=${to.path}`);
    } else if (getToken() && to.path === '/login') {
      // 用户已登录且目标路由是登录页面，重定向到首页或其他页面
      next({ path: '/' }); // 例如，重定向到首页
    } else {
      // 其他情况，直接放行
      next();
    }
  });

  router.afterEach(() => {
    NProgress.done() // 路由切换结束时结束进度条
  });