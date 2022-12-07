<template>
  <div class="swiper-item">
      <img class="swiper-item-img" :src="props.imgPath" data-img="" alt="" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imgPath: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss" scoped>
.swiper-item {
  width: 100%;
  &-img {
    width: 100%;
  }
}

</style>
