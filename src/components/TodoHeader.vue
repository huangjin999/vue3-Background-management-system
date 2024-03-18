<script setup>
import {ref, reactive, computed,defineProps } from "vue";
import { ElMessage } from 'element-plus'
const props = defineProps({
    addTodo: {
        type: Function,
       
    }
})

const newTodo = ref('');
const addTodo=()=>{
  if (newTodo.value.trim() == '') {
    ElMessage.error('输入框不能为空')
    console.log(1);
  }else{
    const done = ref(false)
    props.addTodo(newTodo.value,done);
    newTodo.value = '';
  }
}

</script>

<template>
 <!-- 标题 -->
 <h2>待办事项列表</h2>
    <!-- 添加新待办事项的输入框和按钮 -->
    <input v-model="newTodo" placeholder="添加一个事项" class="todo-input" @keyup.enter="addTodo" />
    <button @click="addTodo" class="add-btn">添加</button>
</template>

<style scoped>

/* 输入框样式 */
.todo-input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
  width: calc(100% - 90px);
}

/* 添加按钮样式 */
.add-btn {
  padding: 10px 15px;
  background-color: #409eff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  width: 60px;
}
</style>
