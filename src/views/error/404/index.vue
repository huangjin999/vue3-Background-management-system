<template>
  <div class="wscn-http404-container">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" src="@/assets/404.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">404 - 页面未找到</div>
        <p class="bullshit__info">很抱歉，您访问的页面不存在或已被删除。</p>
        <el-button @click="handleClickBack" type="primary" class="return-home">返回主页</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const handleClickBack = () => {
  router.push('/');
}
</script>

<style lang="scss" scoped>
.wscn-http404-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.wscn-http404 {
  display: flex;
  justify-content: center;
  align-items: center;

  .pic-404 {
    margin-right: 20px;

    &__parent {
      width: 350px;
      // height: 200px;
      animation: fadeIn 1s ease forwards;
    }
  }

  .bullshit {
    text-align: center;
    width: 350px;

    &__oops {
      font-size: 2.5rem;
      color: #1482f0;
      font-weight: bold;
      margin-bottom: 10px;
      animation: slideIn 1s ease forwards;
    }

    &__info {
      font-size: 1rem;
      color: #666;
      margin-bottom: 20px;
      animation: slideIn 1s ease forwards;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
}
</style>
