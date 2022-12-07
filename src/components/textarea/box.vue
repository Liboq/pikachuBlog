<template>
  <div :class="getClass">{{props.content}}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps({
    content:{
        type: String,
        default:""
    },
    classes:{
        type:[Object,String],
        default:''
    }
})

const getClass = computed(()=>{
    return  {
        'textarea-box':true,
        [`${props.classes}`]:props.classes,
    }
    
})
</script>

<style lang="scss" scoped>
@media screen and (max-width:1240px) {
    .textarea-box{
    width: 7rem !important;
    font-size: 14px;

    }
}
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
