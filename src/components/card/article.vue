<template>
  <div @click="goArticle" class="article-card" v-if="article">
    <div class="article-card-cover">
      <div class="article-card-cover-img">
        <!-- 'https://api.tonnai.com/rand/ecy-img/pc.php?33'|| -->
        <img src="https://api.tonnai.com/rand/ecy-img/pc.php?33" alt="" />
      </div>
    </div>
    <div class="article-card-info">
      <h1 class="article-card-info-title">{{article.titleZh}}</h1>
    
      <p class="article-card-info-content" v-markdown="article.content"></p>
      <div class="article-card-info-message">
        <div class="article-card-info-message-span"><span class="lbq lbq-dianzan"></span><span>{{article.like}}</span> </div>
        <div class="article-card-info-message-span"><span class="lbq lbq-message"></span><span>留言人数</span> </div>
        <div class="article-card-info-message-span"><span class="lbq lbq-biaoqian"></span><span v-for="tag in article.tags.filter((item:Object,index:number)=>index<2)" :key="tag.id">{{tag.tipName}}</span> </div>
      </div>
      <div class="article-card-info-date">发布于 {{article.date}}</div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
        const router = useRouter()
        const props = defineProps({
                article:{
                        type:[Object],
                }
        })
        const goArticle = ()=>{
                router.push({ path: '/article', query: { titleEn: props.article?.titleEn} })
        }
</script>

<style scoped lang="scss">
@media screen and (max-width: 500px) {
  .article-card{
    height: 100%;
    &-cover{
      height: 100% !important;
      width:  5rem !important;
      img{
        height: 100% !important;
      width:  3rem !important;
      }
      &-img{
        height: 100% !important;
        width: 1.8rem !important;
      // width:  3rem;
      }
    }
    &-info{
      width: 5rem !important;
      height: 100% !important;
      font-size: 18px;
    }
  }
}
  .article-card {
    overflow: hidden;
    margin-bottom: 20px;
    background-color: #ffb;
    &:hover{
        box-shadow: 0 1px 20px 10px #b9bf8f;
    }
    &-cover {
      width: 450px;
      overflow: hidden;
      float: left;
      &-img {
        height: 300px;
        width: 450px;
        transition: all 0.6s;
        object-fit: cover;
        &:hover {
          transform: scale(1.1);
        }
      }
      img {
        border: 0;
        max-height: 100%;
      }
    }
    &-info {
      box-sizing: border-box;
      width: 350px;
      height: 300px;
      float: right;
      padding: 20px;
      &-date {
        font-size: 12px;
        display: inline-block;
        background: #b9bf8f;
        padding: 5px 10px;
        margin-bottom: 20px;
        color: #fff;
      }
      &-title {
        font-size: 18px;
        text-align: right;
        margin-bottom: 20px;
      }
      &-message {
        margin-bottom: 20px;
        display: flex;
        justify-content: flex-end;
        &-span{
                & + &{
                        margin-left: 10px;
                }
                .lbq{
                        color: #b9bf8f;
                        margin-right:5px ;
                }
        }
      }
      &-content {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-bottom: 16px;
      }
    }
  }

</style>
