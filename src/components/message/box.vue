<template>
  <div class="message-box-container">
    <div class="message-box-container-img">
      <Img :imgPath="avatarImg"></Img>
    </div>
    <div class="message-box-container-input">
      <div class="message-box-container-input-item">
        <Input
          @blur="(e:any) => getAvator(e)"
          v-model="QQName"
          placeholder="QQ号"
          class="input-item"
          title="昵称"
        ></Input
        ><Input
          class="input-item"
          v-model="emailName"
          placeholder="必填"
          title="邮箱"
        ></Input
        ><Input
          class="input-item"
          v-model="website"
          placeholder="选填"
          title="网址"
        ></Input>
      </div>
      <TextArea
        v-model="textValue"
        class="message-box-container-textarea"
      ></TextArea>
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
const regName = /^[a-zA-Z0-9_-]{1,10}$/;
const regEmail = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
const defaultAvatar =
  localStorage.getItem('message-avator') ||
  'https://pikachu-2022-1305579406.cos.ap-nanjing.myqcloud.com/pikachu.png';
const defaultEmail = localStorage.getItem('message-email') || '';
const QQName = ref('');
const textValue = ref('');
const website = ref('');
const emit = defineEmits(['sendMessage']);
const avatarImg = ref(defaultAvatar);
const emailName = ref(defaultEmail);
const getAvator = (e: any) => {
  if (regQQ.test(e.target.value)) {
    avatarImg.value = `https://q1.qlogo.cn/g?b=qq&nk=${e.target.value}&s=100`;
    emailName.value = `${e.target.value}@qq.com`;
    localStorage.setItem('message-avator', avatarImg.value);
    localStorage.setItem('message-email', emailName.value);
  }
};
const sendMessage = () => {
  if (!regName.test(QQName.value)) {
    return console.log('请输入1到10位的昵称');
  }
  if (!regEmail.test(emailName.value)) {
    return console.log('请输入正确的邮箱');
  }

  if (textValue.value && avatarImg.value && emailName.value && QQName.value) {
    const data = {
      content: textValue.value,
      imgUrl: avatarImg.value,
      emailName: emailName.value,
      mesName: QQName.value,
      website: website.value,
      date: new Date().getTime()
    };
    emit('sendMessage', data);
    emailName.value = '';
    website.value = '';
    textValue.value = '';
    QQName.value = '';
  } else {
    console.log('请输入你的昵称和邮箱地址');
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .message-box-container {
    // width: 100% !important;
    
    &-input {
    }
    &-button {
    }
  }
  ::v-deep(.message-box-container-img .img-container)  {
       
        width: 2rem !important;
        height: 2rem !important;
      
    }
}
.message-box-container {
  display: flex;
  box-sizing: border-box;
  justify-content: center;
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
        margin-right: 30px;
      }
    }
  }
  &-button {
    display: flex;
    justify-content: flex-end;
    margin-right: 52px;
  }
}
</style>
