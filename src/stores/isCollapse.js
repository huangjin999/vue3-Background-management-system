import { defineStore } from 'pinia';
import { ref, computed } from 'vue'

export const useCollapseStore = defineStore({
  id: 'isCollapse',
  state: () => ({
    isCollapse: false
  }),
  actions: {
  
  }
});
