<template>
  <div class="gollery-container">
    <div class="">
      <img :src="imgTop" alt="" />
    </div>
    <div class="gollery-container-photo">
      <p class="gollery-container-photo-title">photo</p>
      <div>
        <div v-for="item in golleryList"><GolleryCard :gollery-item="item" /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllGollery } from '../../api/golley';
import GolleryCard from '../../components/gollery/index.vue'
const imgTop =
  'https://pikachu-2022-1305579406.cos.ap-nanjing.myqcloud.com/pikachu-gollery/unsplash%EF%BC%9AASWBa6z3llw.png';
const golleryList = ref([]);
const getAllGollerys = async () => {
  const res = await getAllGollery();
  golleryList.value = res.data.data;
  console.log(res);
};
onMounted(() => {
  getAllGollerys();
});
</script>

<style lang="scss" scoped>
.gollery-container {
  &-photo {
    margin: 0 auto;
    width: 1184px;
    &-title {
      height: 47px;
      font-size: 36px;
      font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
      font-weight: 400;
      color: #b9bf8f;
      line-height: 42px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
