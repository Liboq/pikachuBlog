<template>
  <div class="message-box-container">
    <div class="message-box-container-img">
      <Img :imgPath="avatarImg"></Img>
    </div>
    <div class="message-box-container-input">
      <div class="message-box-container-input-item">
        <Input
          @blur="(e) => getAvator(e)"
          :value="QQName"
          placeholder="QQ号"
          class="input-item"
          title="昵称"
        ></Input
        ><Input class="input-item" :value="emailName" placeholder="必填" title="邮箱"></Input
        ><Input class="input-item" placeholder="选填" title="网址"></Input>
      </div>
      <TextArea class="message-box-container-textarea"></TextArea>
    </div>
  </div>
  <div class="message-box-container-button">
    <Button @click="sendMessage" name="提交评论"></Button>
  </div>
</template>

<script setup lang="ts">
import Input from '../input/index.vue';
import TextArea from '../textarea/index.vue';
import Img from '../img/index.vue';
import Button from '../button/index.vue';
import { ref } from 'vue';
const regQQ = /[1-9][0-9]{4,11}/;
const defaultAvatar = localStorage.getItem('message-avator')||""
const defaultEmail = localStorage.getItem('meassage-email')|| ""
const QQName = ref('');
const avatarImg = ref(defaultAvatar);
const emailName = ref(defaultEmail);
const getAvator = (e: any) => {
    if(regQQ.test(e.target.value)){
    avatarImg.value = `https://q1.qlogo.cn/g?b=qq&nk=${e.target.value}&s=100`;
    emailName.value = `${e.target.value}@qq.com`;
    localStorage.setItem('message-avator',avatarImg.value)
    localStorage.setItem('message-email',emailName.value)
    }
};
const sendMessage =()=>{
    
}
</script>

<style lang="scss" scoped>
.message-box-container {
  display: flex;
  &-img {
    margin-right: 22px;
  }
  &-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    &-item {
      display: flex;
      margin-bottom: 10px;
      .input-item {
        margin-right: 69px;
      }
    }
  }
  &-button {
    display: flex;
    justify-content: flex-end;
    margin-right: 102px;
  }
}
</style>
