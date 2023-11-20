<template>
  <SwiperContainer :img-list="swiperList"></SwiperContainer>
  <div><MarkdownCotainer></MarkdownCotainer></div>
</template>

<script setup lang="ts">
import SwiperContainer from '../../components/swiper/index.vue';
import { getAllUser } from '../../api/user';
import { getAllSwiper } from '../../api/swiper';
import { onMounted, ref } from 'vue';
import MarkdownCotainer from '../markdown/index.vue';
const swiperList = ref([]);
const getAllUser1: any = async () => {
  const res = await getAllUser();
  console.log(res);
};
const getAllSwipers = async () => {
  const res = await getAllSwiper();
  swiperList.value = (res.data[0] && res.data[0].currentSwiper) || '';
  console.log('swiperList', swiperList.value);
};
onMounted(() => {
  // getAllUser1()
  getAllSwipers();
});
</script>

<style></style>
