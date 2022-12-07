<template>
  <div class="markdown">
    <div class="markdown-input">
      <InputContainer
        placeholder="搜索文章标题"
      big
        v-model="searchVal"
      />
      <span @click="searchTitle" class="lbq lbq-sousuo"></span> <span @click="refresh" class="lbq lbq-shuaxin"></span>
    </div>
    <div
      class="markdown-card"
      v-for="article in articleList"
      :key="article['_id']"
    >
      <ArticleCard :article="article"></ArticleCard>
    </div>
    <div v-if="pageTotal>1" class="markdown-pagination">
      <PaginationContainer
        :page-num="pageNum"
        :page-size="pageSize"
        :page-total="pageTotal"
        @goPaging="goPaging"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ArticleCard from '../../components/card/article.vue';
import { getRightAll,getAll } from '../../api/markdown';
import { onMounted, ref } from 'vue';
import { getAllTag } from '../../api/tag';
import PaginationContainer from '../../components/pagination/index.vue';
import InputContainer from '../../components/input/index.vue';
const articleList = ref([]);
const searchVal = ref('');
const pageNum = ref(1);
const pageSize = ref(5);
const pageTotal = ref(1);
const getAlls = async  () => {
    const res = await getAll()
    pageTotal.value = Math.floor(res.data.data.length / pageSize.value) + 1;
}
const getRightAlls = async () => {
  const params = {
    category: '',
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    tips: [],
    titleZh: searchVal.value
  };
  getAlls()
  const res = await getRightAll(params);
  const tags = await getAllTag();

  articleList.value = res.data.data.map((item: any) => {
    if (tags) {
      item.tips.forEach((val: number) => {
        item.tags = tags.data.data.filter((tag: any) => {
          if (tag.id === val) {
            return tag.tipName;
          } else {
            return false;
          }
        });
      });
    }

    return item;
  });
};
const goPaging = (index:number)=>{
  
  if(pageNum.value ===index){
    return
  }
  pageNum.value = index
  getRightAlls()
}
const searchTitle = ()=>{
  getRightAlls()
}
const refresh = () =>{
  searchVal.value = ''
  getRightAlls()
}
onMounted(() => {
  getRightAlls();
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .markdown{
    width: 10rem !important;
    &-input{
      width: 100%  !important;
      justify-content: center;
      margin: 0.7rem 0 !important;
      &-container{
        width: 10rem !important;
      }
    }
    &-card{
      height: 3rem;
    }
    &-pagination{
      margin-top: 0.5rem;
    }
  }
}
  .markdown {
    margin: 0 auto;
    width: 820px;
    &-input {
      padding-top: 20px;
      display: flex;
      width: 100%;
      margin-bottom: 30px;
      &-container{
        width: 800px;
      }
      .lbq {
        padding: 10px;
        text-align: center;
        margin: 0 15px;
        color: #fff;
        background: #d1d9b4;
        cursor: pointer;
        font-size: 20px;
        &:hover {
          background: #577005;
        }
      }
    }
    &-card {
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width:1240px) {
      .markdown{
        .lbq{
        font-size: 0.25rem;

        }
      }
  }

</style>
