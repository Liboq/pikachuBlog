<template>
        <div>
            <img :style="getStyle"  class="img-container" :src="props.imgPath" alt="">
        </div>
</template>
    
<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
    imgPath:{
        type:String,
        default:"../../../public/message-avtar.png"
    },
    width:{
        type:String,
    },
    height:{
        type:String
    }
})
    const img = "../../../public/message-avtar.png"
    const getStyle = computed(()=>{
        return {
            width:props.width,
            height: props.height
        }
    })
</script>
    
<style lang="scss" scoped>
    .img-container{
        width: 114px;
        height: 114px;
        background: #D1D9B4;
        border-radius: 14px 14px 14px 14px;
        opacity: 1;
    }
</style>