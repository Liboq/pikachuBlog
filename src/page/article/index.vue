<template>
        <div class="article-content" v-if="article"><div v-markdown="article.content"></div></div>
</template>
    
<script setup lang='ts'>
import './github.css'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getOneMd } from '../../api/markdown';
const route = useRoute()
const _id = route.query.id
const md = ""
const article = ref()
    const getOneMds = async()=>{
     const res =  await getOneMd({_id})
     article.value = res.data.data[0]
     console.log(res);
    }
    onMounted(()=>{
        getOneMds()
    })
</script>
    
<style lang="scss" scoped>
    .article-content{
        width: 868px;
        margin: 0 auto;
        background-color: #fff;
        padding: 10px;
        min-height: 868px;
    }
    
</style>