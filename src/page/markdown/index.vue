<template>
  <div class="markdown">
    <div class="markdown-card" v-for="article in articleList" :key="article['_id']">
      <ArticleCard :article="article"></ArticleCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '../../components/card/article.vue';
import { getRightAll } from '../../api/markdown';
import { onMounted, ref } from 'vue';
import { getAllTag } from '../../api/tag';
const articleList = ref([])
const getRightAlls = async () => {
  const params = {
    category: '',
    pageNum: 1,
    pageSize: 10,
    tips: [],
    titleZh: ''
  };
  const res = await getRightAll(params);
  const tags = await getAllTag()
  console.log(tags);
  
  articleList.value= res.data.data.map((item:any)=>{
                if(tags){
                        item.tips.forEach((val:number)=>{
                       item.tags = tags.data.data.filter((tag:any)=>{
                                if(tag.id === val){
                                        return tag.tipName
                                }
                                else{
                                        return false
                                }
                        })
                })
                }
                
        
        return item
  })
  console.log(articleList.value);
};
onMounted(() => {
  getRightAlls();
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1920px) {
  .markdown {
    margin: 0 auto;
    width: 820px;
    min-height: 868px;
    &-card {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
