
<template>
  <div class="login-container">
    <h2>XX管理系统</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">用户名:</label>
        <input id="username" type="text" v-model="form.username" required>
      </div>
      <div class="form-group">
        <label for="password">密码:</label>
        <input id="password" type="text" v-model="form.password" required>
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useAuthStore } from "@/stores/authStore";

const form = reactive({
  username: '',
  password: ''
});

const store = useAuthStore();

const login = () => {
  store.login(form.username, form.password);
};

</script>


<style scoped lang="scss">
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
}
</style>

