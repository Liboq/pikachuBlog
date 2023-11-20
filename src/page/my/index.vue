<template>
  <div class="my-container">
    <h1>关于我</h1>
    <div>🤓皮卡秋</div>
    <ul>
      <li>👀2021毕业,就职于长沙</li>
      <li>💻 热爱前端开发</li>
      <li>👨‍🏭希望成为一名优秀前端工程师</li>
    </ul>
    <p>这是我自己写的个人博客</p>
    <p>请多多指教！🤜🤛</p>
    <div>联系方式</div>
    <li>QQ: 2661158759</li>
    <li>Github:<a href="https://github.com/Liboq">Liboq</a></li>
    <li>建站:<a href="https://pikachu1024.com">pikachu1024.com</a></li>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .my-container {
        margin-top: 1rem !important;
    width: 90vw !important;
    height: 40vh !important;
    font-size: 0.3rem !important;
  }
}
.my-container {
  margin-top: 200px;
  padding: 10px 20px;
  width: 860px;
  font-size: 26px;
  height: 800px;
  color: #fff;
  background-color: #0c1d1b;
  a {
    color: #62a4da;
  }
  li {
    font-size: 20px;
    margin: 20px 0;
  }
}
</style>
