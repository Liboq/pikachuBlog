<template>
  <div>
    <div class="article-content" v-if="article">
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
const md = '';
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
  box-shadow: 0px 4px 4px 4px rgba(69, 141, 140, 0.3)
}



</style>
