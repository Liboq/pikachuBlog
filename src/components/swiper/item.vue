<template>
        <div class="swiper-item">
            <img class="swiper-item-img" :src="props.imgPath" data-img="" alt="">
        </div>
</template>
    
<script setup lang='ts'>
    import { defineProps } from 'vue';
    const props = defineProps({
        imgPath:{
          type: String,
          default:''
        }
    })
</script>
    
<style lang="scss" scoped>
    .swiper-item{
        &-img{
            width: 100%;
            height: 868px;
        }
    }
</style>