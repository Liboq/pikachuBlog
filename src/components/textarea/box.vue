<template>
  <div class="textarea-box" :style="getStyle">{{props.content}}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps({
    height:{
        type:String,
        default:"181px"
    },
    width:{
        type:String,
        default:"993px"
    },
    content:{
        type: String,
        default:""
    }
})

const getStyle = computed(()=>{
    return {
        height: props.height,
        width:props.width
    }
})
</script>

<style lang="scss" scoped>
.textarea-box {
  box-sizing: border-box;
  width: 993px;
  height: 181px;
  background: #f9fbf1;
  border-radius: 13px 13px 13px 13px;
  opacity: 1;
  border: 1px solid #d1d9b4;
  padding: 10px 20px;
}
</style>
