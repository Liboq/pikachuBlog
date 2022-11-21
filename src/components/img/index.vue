<template>
        <div>
            <img class="img-container" :src="props.imgPath" alt="">
        </div>
</template>
    
<script setup lang='ts'>
const props = defineProps({
    imgPath:{
        type:String,
        default:"../../../public/message-avtar.png"
    }
})
    const img = "../../../public/message-avtar.png"
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