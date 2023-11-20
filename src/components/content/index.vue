<template>
        <div class="content-container"><div class="content-container-box"><router-view></router-view></div></div>
</template>
    
<script setup lang='ts'>
    
</script>
    
<style lang="scss" scoped>
    .content-container{
        overflow: hidden;
        display: flex;
        justify-content: center;
        min-height: calc(100vh - 60px);
        box-sizing: border-box;
        padding-top: 60px;
        &-box{
            height: 100%;
        }
    }
    @media screen and (max-width:500px) {
        .content-container{
            padding-top: 1.4rem !important;
        }
    }
</style>