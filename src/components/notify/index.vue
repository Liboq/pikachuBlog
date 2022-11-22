<template>
        <div class="notify-container">{{text}}</div>
</template>
    
<script setup lang='ts'>
    const props = defineProps({
        text:{
            type:String,
            default:''
        }
    })
</script>
    
<style lang="scss" scoped>
    .notify-container{
        position: fixed;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
    }
</style>