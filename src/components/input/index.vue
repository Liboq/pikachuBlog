<template>
  <div class="input-container">
    <div v-if="title" class="input-container-title">{{ props.title }}</div>
    <input
      @blur="(e) => emit('blur', e)"
      :placeholder="props.placeholder"
      @input="change"
      :class="getClass"
      :value="val"
      type="text"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref, defineEmits, watch } from 'vue';
const props = defineProps({
  big:{
    type:Boolean,
    default:false
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
const emit = defineEmits(['update:modelValue', 'blur']);
const val = ref(props.modelValue);
watch(
  () => props.modelValue,
  () => {
    val.value = props.modelValue;
  }
);
const getClass = computed(()=>{
  return {
    'input-container-box':true,
    'input-container-big-box':props.big
  }
})
const change = (e: any) => {
  val.value = e.target.value;
  emit('update:modelValue', e.target.value);
};
</script>

<style lang="scss" scoped>
.input-container {
  box-sizing: border-box;
  position: relative;
  border-radius: 5px 5px 5px 5px;
  display: flex;
  min-width: 231px;
  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width:63px ;
    height: 100%;
    padding: 10px;
    background: #b9bf8f;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-box {
    box-sizing: border-box;
    padding: 0 10px 0 10px;
    font-size: 16px;
    height: 100%;
    background: #d1d9b4;
    opacity: 1;
  }
  &-big-box{
    width: 600px;
  }
  input {
    border: 1px #b9bf8f solid;
    &:focus-visible {
      outline: #b9bf8f auto 1px;
    }
  }
}
@media screen and (max-width:1240px) {

  .input-container {
    input{
    width: 1.3rem;
    font-size: 12px !important;
  }
    &-title {
      font-size: 12px;
    width: 1rem;
    }
    &-box{

    }
  }

}
@media screen and (max-width:500px) {
  input{
    font-size: 12px !important;
  }
}
</style>
