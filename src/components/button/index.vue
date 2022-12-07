<template>
  <div class="button-container">
    <button class="button-container-item">
      <span class="button-container-text">{{name}}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        name:{
            type: String,
            default:''
        }
    })
</script>

<style lang="scss" scoped>
.button-container {
  &-item {
    border: none;
    background: #d1d9b4;
    border-radius: 5px 5px 5px 5px;
    opacity: 1;
    color: white;
    padding: 10px;
  }
  &-text {
    width: 72px;
    height: 22px;
    font-size: 18px;
    font-family: Inter-Bold, Inter;
    font-weight: bold;
    color: #ffffff;
    line-height: 21px;
  }
}
</style>
