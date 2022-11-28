<template>
        <div class="swiper-container">
            <div class="swiper-container-item"><SwiperItem :img-path="imgList[activeIndex-1].path"></SwiperItem> </div>
            <div class="dot"><Dot @click="activeIndex = item" v-for="item in imgList.length" :key="item" :class="item==activeIndex?'dot-active':''"></Dot></div>
            <div @click="goSwiper('left')" class="left-arrow arrow"> <span class="lbq lbq-jiantou-zuo"></span></div>
            <div class="right-arrow arrow"> <span class="lbq lbq-jiantou-you"></span></div>
        </div>
</template>
    
<script setup lang='ts'>
    import { ref,defineProps, onBeforeUnmount } from 'vue';
    import Dot from './dot.vue'
    import SwiperItem from './item.vue'
    const activeIndex = ref(1)
    const imgList = [
        {path:'/public/home-bgc.png'}
    ]
    const props = defineProps({
        autoPlay:{
            type:Boolean,
            default: true
        },
        duration: {
            type:Number,
            default: 2000
        }
    })
    // methods
    const goSwiper = (arrow:string)=>{
        if(arrow === "left"){
            if(activeIndex.value===1){
              return  activeIndex.value = imgList.length
            }
             activeIndex.value = activeIndex.value - 1
        }
        if(arrow === 'right') {
            if(activeIndex.value===imgList.length){
              return  activeIndex.value = 0
            }
             activeIndex.value = activeIndex.value + 1
        }
    }
    let timer :any = null
    const autoPlay = () => {
        if(props.autoPlay){
             timer= setInterval(()=>{
                goSwiper('right')
            },props.duration)
        }
    }
    onBeforeUnmount(()=>{
        clearInterval(timer)
    })
</script>
    
<style lang="scss" scoped>
.swiper-container{
    position: relative;
    &-item{
        transition: all .3s;
    }
    .dot{
        position: absolute;
        bottom: 20px;
        left: 50%;
        &-active{
            background-color: skyblue;
        }
    }
    .arrow{
        cursor: pointer;
        .lbq{
            font-size: 30px;
            color: #fff;
        }
        position: absolute;
    }
    .left-arrow{
        left: 20px;
        top: 50%;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .right-arrow{
        right: 20px;
        top: 50%;
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

}
   
</style>