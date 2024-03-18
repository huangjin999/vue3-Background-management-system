// src/stores/authStore.js
import { defineStore } from 'pinia'
import { setToken,removeToken } from "@/utils/auth";
import { ElMessage } from 'element-plus'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // 状态
  }),
  getters: {
    // getters
  },
  actions: {
    async login(username, password) {
      if (username === 'admin' && password === '123') {
        setToken('admin');
        ElMessage({
          message: '登录成功',
          type: 'success',
        });
        console.log('登录成功');
        router.push('/');
      } else {
        ElMessage.error('账号或密码错误');
      }
    },
    async logout() {
      removeToken();
      // 路由跳转
      router.push('/login');
     
    }
  }
});
