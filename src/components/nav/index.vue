<template>
  <div class="nav-container">
    <div class="nav-content">
      <div class="nav-item" @click="goPage('/home')">首页 ></div>
      <div class="nav-item" @click="goPage('/my')">个人介绍 ></div>
      <div class="nav-item" @click="goPage('/markdown')">文章 ></div>
      <div class="nav-item" @click="goPage('/message')">留言 ></div>
      <div class="nav-item" @click="goPage('/gollery')">图库 ></div>
    </div>
    <div class="nav-other">
      <div class="nav-other-item "><a class="github-img" href="https://github.com/Liboq/pikachuBlog" ></a></div>
      <div>主题</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated } from 'vue';
import { useRouter } from 'vue-router';
import { modeMap, modeMapArr } from '../../utils/modeMap';

const bodyStyle = window.document.getElementsByTagName('body')[0].style;
const router = useRouter();
const goPage = (path: string) => router.push(path);
interface Props {
  navShow?: boolean;
  setNavShow?: Function;
  mode?: number;
  setMode?: Function;
}

onMounted(()=>{
  for (const type of modeMapArr) {
      bodyStyle.setProperty(type, modeMap[type as keyof typeof modeMap][0]);
      console.log( type,modeMap[type as keyof typeof modeMap][0]);
      
    }
})
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .nav-container {
    height: 1.5rem !important;
    .nav-item{
    font-size: 0.3rem !important;
    }
    .nav-other {
      height: 100% !important;
    font-size: 0.3rem !important;
    &-item{
      .github-img{
        width: 0.5rem !important;
        height: 0.5rem !important;
      }
    }
    }
}
}
.nav-container {
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  .nav-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-item {
    transition: all .6s;
    height: 60px;
    text-align: center;
    font-size: 14px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #b9bf8f;
    line-height: 60px;
    padding: 0 20px;
    cursor: pointer;
    &:hover {
      height: 60px;
      background: #b9bf8f;
      text-align: center;

      color: #fff;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
    }
  }
  .nav-other {
    position: absolute;
    right: 20px;
    height: 60px;
    top: 0;
    display: flex;
    align-items: center;
    div+ div{
      margin-left: 10px;
    }
    &-item {
      height: 60px;
      display: flex;
      align-content: center;
      align-items: center;
     
    }
    .github-img {
      background-image: url('../../../public/github.svg');
      background-repeat: no-repeat;
      width: 40px;
      height: 40px;
      background-position:center center;
      background-size: auto 100%;
      border-radius: 100%;
      border: 1px solid #ccc;
      transition: all .6s;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
}
</style>
