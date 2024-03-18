import { defineStore } from 'pinia';

export const useTodoStore = defineStore({
  id: 'todo',
  state: () => ({
    todos: [
      { text: '事项1', done: false },
      { text: '事项2', done: false },
      { text: '事项3', done: false }
    ]
  }),
  actions: {
  
  }
});
