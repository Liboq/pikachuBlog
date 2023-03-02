<template>
        <div class="bottom-container">
            <div class="marginbottom10">皮卡秋前端攻城狮</div>
            <div class="marginbottom10">
                湘ICP备2023003883号-1
            </div>
            <div class="marginbottom10" >
                <Category v-for="item in categorys" :title="item.categoryName"></Category>
            </div>
        </div>
</template>
    
<script setup lang='ts'>
    import { ref,onMounted } from 'vue';  
import { getAllCategory } from '../../api/category';

    import Category from './category.vue'
    const categorys = ref()
    const getAllCategorys = async()=>{
        const result = await getAllCategory()
        if(result.status === 200){
            console.log('category',result.data);
            categorys.value  = result.data.data
        }
    }
    onMounted(()=>{
    getAllCategorys()
    })
</script>
    
<style lang="scss" scoped>
@media screen and (max-width: 500px){
    .bottom-container{
        font-size: 18px;
    }
}
    .bottom-container{
        width: 100%;
        margin-top: 10px;
        padding-top: 20px;
        background: #ccc;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        .marginbottom10{
            margin-bottom: 10px;
        }
    }    
</style>