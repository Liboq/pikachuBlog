<template>
        <div :style="randomColor" class="tag-item">{{props.title}}</div>
</template>
    
<script setup lang='ts'>
import { computed } from 'vue';


    const props = defineProps({
        title:{
            type: String
        }
    })
    const randomColor = computed(()=>{
        const a = Math.floor(Math.random()*10)*25
        const b = Math.floor(Math.random()*10)*25
        const c = Math.floor(Math.random()*10)*25
        return {
            color: `rgb(${a},${b},${c})`
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