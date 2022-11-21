<template>
  <div class="input-container">
    <div class="input-container-title">{{ props.title }}</div>
    <input @blur="(e)=>emit('blur',e)"  :placeholder="props.placeholder" @input="change" class="input-container-box" v-model="value" :style="props.style" type="text" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue';
const props = defineProps({
  style: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  value:{
    type:String,
    default: ""
  },
  placeholder:{
    type:String,
    default: ""
  }
});
const emit = defineEmits(['change','blur'])
const value = ref(props.value)
watch(()=> props.value,()=>{
    value.value = props.value
})
const change = (e:any)=>{
    value.value = e.target.value
    emit('change',e.target.value)
}
</script>

<style lang="scss" scoped>
.input-container {
    box-sizing: border-box;
    position: relative;
    border-radius: 5px 5px 5px 5px;
    display: flex;
    width: 231px;
  &-title {
    position: absolute;
    width: 63px;
    height: 42px;
    background: #b9bf8f;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-box {
    padding: 0 10px 0 73px;
    font-size: 16px;
    height: 42px;
    border-radius: 5px 0px 0px 5px;
    background: #d1d9b4;
    opacity: 1;
  }
  input{
    border: 1px #b9bf8f solid;
    &:focus-visible{
        outline:  #b9bf8f auto 1px;
    }
  }
}
</style>
