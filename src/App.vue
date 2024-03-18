<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterView />
</template>

<style>
.spinner-icon{
  display: none;
}


/* 定义整个滚动条高宽及背景：高宽分别对应横竖滚动条的尺寸 */
::-webkit-scrollbar {
  width: 8px; /*滚动条宽度*/
    height: 8px; /*滚动条高度*/
    background-color:#F5F5F5;
    cursor:pointer;
  
}
/*定义滚动条轨道：内阴影+圆角*/
::-webkit-scrollbar-track {
    background-color:#F5F5F5;
    
}
/*定义滑块：内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius:10px;
    background-color:#E5E5E5;
}
.el-table__body-wrapper::-webkit-scrollbar {
    width: 8px; /*滚动条宽度*/
    height: 8px; /*滚动条高度*/
  }
 .el-table__body-wrapper::-webkit-scrollbar-track {
    border-radius: 10px; /*滚动条的背景区域的圆角*/
    -webkit-box-shadow: inset 0 0 6px rgba(238,238,238, 0.3);
    background-color: #eeeeee; /*滚动条的背景颜色*/
  }
  .el-table__body-wrapper::-webkit-scrollbar-thumb {
    border-radius: 10px; /*滚动条的圆角*/
    -webkit-box-shadow: inset 0 0 6px rgba(145, 143, 0143, 0.3);
    background-color: #E5E5E5; /*滚动条的背景颜色*/
  }

</style>
