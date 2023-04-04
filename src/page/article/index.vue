<template>
  <div>
    <div class="article-content" v-if="article">
      <h1>{{ article.titleZh }}</h1>
      <img  class="image" :src="article.image_main" alt="">
      <div v-markdown="article.content"></div>
    </div>
    <div v-if="article" ><Anchor  :content="article.content"  /></div>
  </div>
</template>

<script setup lang="ts">
import './github.scss';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getOneMd } from '../../api/markdown';
import Anchor from '../../components/anchor/index.vue';

const route = useRoute();
const titleEn = route.query.titleEn;
const md = 'https://cdn.nlark.com/yuque/0/2023/png/32577971/1679390446368-e8c65c0a-717a-4837-be22-b8893ac92fad.png';
const article = ref();
const getOneMds = async () => {
  const res = await getOneMd({ titleEn });
  article.value = res.data.data[0];
};
onMounted(() => {
  getOneMds();
});
</script>

<style lang="scss" scoped>
@media screen and (max-width:500px) { 
  .article-content {
    // display: flex;
    // padding: 0 10px;
    width: 10rem !important;
    overflow: hidden;
    box-shadow: none;

}
}
.article-content {
  width: 868px;
  margin: 10px auto;
  padding: 20px;
  min-height: 100%;
  box-shadow: 0px 4px 4px 4px rgba(69, 141, 140, 0.3);
  .image {
      width: 100%;
      transition: all 0.6s;
      object-fit: cover;
      cursor: pointer;
      &:hover {
        transform: scale(1.01);
      }
      img{
        width: 300px ;
        height: 300px;
      }
    }
}



</style>
