<template>
        <div class="dot-item"></div>
</template>
    
<script setup lang='ts'>
</script>
    
<style lang="scss" scoped>
    .dot-item{
        display: inline-block;
        border: 6px solid skyblue;
        width: 6px;
        height: 6px;
        border-radius: 12px;
        &-active{
            border: 6px solid #ccc;
        }
        & + & {
            margin-left: 5px;
        }
    }
</style>