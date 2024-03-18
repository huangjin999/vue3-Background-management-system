<template>
            <div class="todo-list">
              <TodoHeader :addTodo="addTodo" />
              <!-- 待办事项列表 -->
              <ul>
                <!-- 遍历显示每个待办事项 -->
                <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"
                  :deleteTodo="deleteTodo" :saveEdit="saveEdit" :changeDone="changeDone" />
              </ul>
              <!-- 显示待办事项的总数、已完成数和未完成数的组件 -->
              <TodoSum :totalTodos="totalTodos" :doneTodos="doneTodos" :remainingTodos="remainingTodos" />
            </div>
 
  </template>
  
  
  <script setup>
  import { ref, reactive, computed ,watch } from 'vue';
  import TodoHeader from '@/components/TodoHeader.vue';
  import TodoItem from '@/components/TodoItem.vue';
  import TodoSum from '@/components/TodoSum.vue';
  import { setTodos, remTodos, getTodos } from '@/utils/local.js'
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  // import { isDark } from '~/composables/dark' //水印
  import {useTodoStore} from '@/stores/todo.js'
  const useTodo = useTodoStore()
  const isCollapse = ref(true)
  
  // 待办事项列表和相关变量
  const todos = ref([
    { text: '事项1', done: false },
    { text: '事项2', done: false },
    { text: '事项3', done: false }
  ]);
  
  // 新待办事项和编辑索引变量
  const newTodo = ref('');
  const editIndex = ref(null);
  
  // const font = reactive({
  //   color: 'rgba(0, 0, 0, .15)',
  // })
  
  // watch(
  //   isDark,
  //   () => {
  //     font.color = isDark.value
  //       ? 'rgba(255, 255, 255, .15)'
  //       : 'rgba(0, 0, 0, .15)'
  //   },
  //   {
  //     immediate: true,
  //   }
  // )
  
  // 持久化
  // setTodos(todos)
  
  
  // 添加新待办事项
  const addTodo = (item, done) => {
    // if (newTodo.value.trim() !== '') {
    todos.value.push({ text: item, done: done });
    newTodo.value = '';
    // }
    setTodos(todos)
  
  };
  
  // 删除待办事项
  const deleteTodo = (index) => {
    todos.value.splice(index, 1);
    setTodos(todos)
  
  };
  
  
  
  // 保存编辑后的待办事项
  const saveEdit = (index, newText, newDone) => {
    todos.value[index].text = newText;
    todos.value[index].done = newDone;
    setTodos(todos)
  
  };
  const changeDone=(index,newDone)=>{
    todos.value[index].done = newDone;
    setTodos(todos)
  
  }
  
  
  
  
  // 计算总条数、已完成条数和未完成条数
  const totalTodos = computed(() => todos.value.length);
  const doneTodos = computed(() => todos.value.filter(todo => todo.done).length);
  const remainingTodos = computed(() => todos.value.filter(todo => !todo.done).length);
  </script>
  
  <style scoped>
  /* 待办事项列表的样式 */
  .common-layout {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
  }
  
  .todo-list {
    background-color: #f7f7f7;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  
  
  /* 待办事项的样式 */
  .todo-item {
    background-color: white;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    align-items: center;
  }
  
  /* 总结信息的样式 */
  .summary {
    margin-top: 20px;
    padding: 10px;
    background-color: #eaeaea;
    border-radius: 4px;
  }
  
  /* 菜单栏 */
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  </style>
  