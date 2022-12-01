<template>
  <div class="input-container">
    <div v-if="title" class="input-container-title">{{ props.title }}</div>
    <input
      @blur="(e) => emit('blur', e)"
      :placeholder="props.placeholder"
      @input="change"
      class="input-container-box"
      :value="val"
      :style="style"
      type="text"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue';
const props = defineProps({
  style: {
    type: Object,
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
const emit = defineEmits(['update:modelValue', 'blur']);
const val = ref(props.modelValue);
watch(
  () => props.modelValue,
  () => {
    val.value = props.modelValue;
  }
);
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
    box-sizing: border-box;
    padding: 0 10px 0 10px;
    margin-left: 62px;
    font-size: 16px;
    height: 42px;
    background: #d1d9b4;
    opacity: 1;
  }
  input {
    border: 1px #b9bf8f solid;
    &:focus-visible {
      outline: #b9bf8f auto 1px;
    }
  }
}
</style>
