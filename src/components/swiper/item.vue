<template>
        <div class="swiper-item">
            <img class="swiper-item-img" :src="props.imgPath" data-img="" alt="">
        </div>
</template>
    
<script setup lang='ts'>
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
            transition: all .6s;
            width: 100%;
            height: 868px;
        }
    }
</style>