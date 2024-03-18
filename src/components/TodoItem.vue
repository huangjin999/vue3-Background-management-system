<template>
  <!-- 每个待办事项的项目 -->
  <li :class="{ 'todo-item': true, done: todo.done }">
    <!-- 显示待办事项的文本内容，双击可编辑 -->
    <span @dblclick="editTodos" v-if="!editing">{{ todo.text }}</span>
    <!-- 编辑模式下的输入框 -->
    <input v-else v-model="editedText" @keyup.enter="saveEdit(index)" @keyup.esc="cancelEdit" class="todo-edit-input" />
    <!-- 用于标记完成状态的复选框 -->
    <input type="checkbox" v-model="todo.done" @change="changeDone(index)" />
    <!-- 删除待办事项的按钮 -->
    <el-button @click="deleteTodos">删除</el-button>
  </li>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { setTodos, remTodos, getTodos } from '@/utils/local.js'

// 接收父组件传递的待办事项对象及相关方法
const props = defineProps({
  todo: Object,
  deleteTodo: Function,
  saveEdit: Function,
  index: Number, // 当前待办事项的索引
  changeDone: Function,//当前状态

});


// 用于判断是否处于编辑状态的变量
const editing = ref(false);
// 编辑模式下的文本内容
const editedText = ref(props.todo.text);
const editDone = ref(props.todo.done);

// 保存编辑后的待办事项
const saveEdit = (index) => {
  // console.log(editedText.value);
  const newText = editedText.value.trim();
  const newDone = editDone.value
  props.saveEdit(index, newText, newDone);
  cancelEdit()
};

// 取消编辑操作
const cancelEdit = () => {
  editing.value = false;
  editedText.value = props.todo.text;
};

const editTodos = () => {
  // 将编辑状态变量设置为 true
  editing.value = true;
  // 将编辑模式下的文本内容设置为待办事项的文本内容
  editedText.value = props.todo.text;

};
// 待办事项的状态
const changeDone = (index) => {
  console.log(props.todo.done);
  props.changeDone(index, props.todo.done);

}

// 删除待办事项
const deleteTodos = () => {
  // 调用父组件传递的 deleteTodo 方法，并传递当前待办事项的索引
  props.deleteTodo(props.index);
};
</script>

<style scoped>
/* 待办事项的样式 */
.todo-item {
  background-color: white;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  align-items: center;
}

/* 已完成状态的待办事项文本样式 */
.done {
  text-decoration: line-through;
  color: #999;
}

/* 编辑模式下的输入框样式 */
.todo-edit-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
  width: calc(100% - 90px);
}
</style>
