<template>
  <div>
    <textarea v-model="value" :style="props.style" class="textarea-container"></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
    const props = defineProps({
        style:{
            type:String,
            default:''
        },
        value:{
            type:String,
            default:''
        }
    })
    const value = ref(props.value)
</script>

<style lang="scss" scoped>
.textarea-container {
  width: 882px;
  height: 209px;
  background: #f6f6f6;
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
  border: 1px solid #d1d9b4;
  resize: none;
  &:focus-visible{
    outline: #b9bf8f auto 1px;
  }
}
</style>
