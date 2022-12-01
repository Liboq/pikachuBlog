<template>
        <div class="tag-item">{{props.title}}</div>
</template>
    
<script setup lang='ts'>


    const props = defineProps({
        title:{
            type: String
        }
    })
</script>
    
<style scoped lang="scss">
    .tag-item{
        display: inline-block;
        padding: 5px 10px;
        background-color: black;
        color: #fff;
        &:hover{
            background-color: gainsboro;
            color: #000;
        }
        & + &{
            margin-left: 20px;
        }
    }
</style>