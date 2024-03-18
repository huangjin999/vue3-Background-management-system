/*
 * @Author: huangjin999
 * @Date: 2024-02-19 10:12:12
 * @LastEditors: huangjin999
 * @LastEditTime: 2024-03-18 14:41:19
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入模板的全局的样式
import '@/styles/index.scss'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './permission'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
