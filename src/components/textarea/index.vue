<template>
  <div>
    <textarea
    @input="change"
      :value="val"
      :style="props.style"
      class="textarea-container"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref,watch } from 'vue';
const props = defineProps({
  style: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:modelValue','blur'])
const val = ref(props.modelValue)
watch(()=> props.modelValue,()=>{
    val.value = props.modelValue
})
const change = (e:any)=>{
  console.log(e.target.value);
  
    val.value = e.target.value
    emit('update:modelValue',e.target.value)
}
</script>

<style lang="scss" scoped>
.textarea-container {
  width: 962px;
  height: 209px;
  background: #f6f6f6;
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
  border: 1px solid #d1d9b4;
  resize: none;
  padding: 5px;
  &:focus-visible {
    outline: #b9bf8f auto 1px;
  }
}
</style>
