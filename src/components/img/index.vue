<template>
  <img class="img-container" :src="props.imgPath" alt="" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  imgPath: {
    type: String,
    default: '../../../public/message-avtar.png'
  }
});
const img = '../../../public/message-avtar.png';
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
     .img-container {

      width: 1rem !important;
      height: 1rem !important;
    
  }
}
.img-container {
  transition: all 0.6s;
  width: 114px;
  height: 114px;
  background: #d1d9b4;
  border-radius: 14px 14px 14px 14px;
  opacity: 1;
}
</style>
