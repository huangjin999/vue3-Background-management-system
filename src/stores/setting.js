/*
 * @Author: ShenLuwei
 * @Date: 2024-03-15 14:32:19
 * @LastEditors: ShenLuwei
 * @LastEditTime: 2024-03-18 14:34:42
 */
//小仓库:layout组件相关配置仓库
import { defineStore } from 'pinia'

const useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, //用户控制菜单折叠还是收起控制
      refsh: false, //仓库这个属性用于控制刷新效果
    }
  },
})

export default useLayOutSettingStore
