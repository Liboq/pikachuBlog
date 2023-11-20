<template>
  <div class="login-container">
    <div class="login-img">
      <img src="../../assets/image/login.png" />
    </div>
    <div class="username">
      <div class="title">账号</div>
      <div class="login-input">
        <input @input="changeUsername" :value="formData.userName" />
      </div>
    </div>
    <div>
      <div class="title">密码</div>
      <div class="login-input">
        <input
          type="password"
          @input="changePassword"
          :value="formData.password"
        />
      </div>
    </div>
    <div class="login-button" @click="handleLogin">登陆</div>
    <div @click="toRegsit" class="to-regist">去注册</div>
  </div>
</template>

<script setup lang="ts">
import { login } from '../../api/user';
import { onMounted, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const formData = reactive({
  userName: '',
  password: ''
});
const handleLogin = async () => {
  type Result = {
    message: string;
    status: number;
    data: any;
    token: string;
  };
  const res: any = await login(formData);
  if (res.status == 200) {
    localStorage.setItem(
      'auth',
      JSON.stringify({ token: res.token, userId: res.data.id })
    );
    location.reload();
    router.go(-1);
  }
};
const changeUsername = (e: any) => {
  formData.userName = e.target.value;
};
const changePassword = (e: any) => {
  formData.password = e.target.value;
};
const toRegsit = () => alert('请联系2661158759@qq.com');
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .login-container {
    font-size: 18px !important;
    width: 7rem !important;
    height: 7rem !important;
  }
  .login-img {
    margin-top: 0.8rem;
    margin-bottom: 0.1rem !important;
    img {
      width: 1.8rem !important;
      height: 1.8rem !important;
    }
  }
  .login-input {
    margin-bottom: 0.1rem !important;
    input {
      width: 4rem !important;
      height: 0.5rem !important;
      border: 1px #fff solid;
      border-radius: 25px;
      padding: 0px 10px;
    }
  }
  .login-button {
    width: 5rem !important;
    height: 0.6rem !important;
    line-height: 0.6rem !important;
  }
}
.login-container {
  z-index: 100;
  border: 1px solid #fff;
  background-color: #df9898;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  margin-top: 100px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  color: #fff;
  // justify-content:center;
  align-items: center;
  .login-img {
    margin-bottom: 50px;
    img {
      width: 104px;
      height: 104px;
    }
  }
  .login-button {
    margin-top: 20px;
    text-align: center;
    width: 400px;
    height: 50px;
    line-height: 50px;
    background: #a64bf4;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    margin-bottom: 5px;
  }
  .to-regist {
    cursor: pointer;
  }
  .login-input {
    margin-bottom: 10px;
    input {
      width: 300px;
      height: 50px;
      border: 1px #fff solid;
      border-radius: 25px;
      padding: 0px 10px;
      &:focus-visible {
        outline: #fff auto 1px;
        border-radius: 25px;
      }
    }
  }
}
</style>
