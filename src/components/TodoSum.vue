<template>
    <!-- 显示待办事项的总数、已完成数和未完成数 -->
    <div class="summary">
      总条数：{{ totalTodos }}，已完成：{{ doneTodos }}，未完成：{{ remainingTodos }}
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  
  // 接收父组件传递的总数、已完成数和未完成数
  const props = defineProps({
    totalTodos: Number,
    doneTodos: Number,
    remainingTodos: Number
  });
  
  // 计算总数、已完成数和未完成数
  const totalTodos = computed(() => props.totalTodos);
  const doneTodos = computed(() => props.doneTodos);
  const remainingTodos = computed(() => props.remainingTodos);
  </script>
  
  <style scoped>
  /* 总结信息的样式 */
  .summary {
    margin-top: 20px;
    padding: 10px;
    background-color: #eaeaea;
    border-radius: 4px;
  }
  </style>
  