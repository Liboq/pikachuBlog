<template>
  <div v-if="golleryItem" class="gollery-card">
    <div class="gollery-card-photo">
      <div @click="goGolleryItem" class="gollery-card-photo-img">
        <ImgContainer
          width="362px"
          height="270px"
          :img-path="golleryItem.coverPath"
        />
      </div>
    </div>
    <div class="gollery-card-date">
      {{ golleryItem.date? moment(golleryItem.date).format('YYYY.MM.DD'):moment(new Date().getTime()).format('YYYY.MM.DD') }}
    </div>
    <div class="gollery-card-title">{{ golleryItem.type }}</div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import { useRouter } from 'vue-router';
import ImgContainer from '../img/index.vue';
const router = useRouter()

const props = defineProps({
  golleryItem: {
    type: Object
  }
});
const goGolleryItem = ()=>{
    router.push({path:'/photo',query:{id:props.golleryItem?._id}})
}
</script>

<style lang="scss" scoped>
.gollery-card {
  height: 350px;
  width: 362px;
  margin-bottom: 10px;
  &-photo {
    height: 270px;
    width: 100%;
    overflow: hidden;

    &-img {
      transition: all 0.6s;
      object-fit: cover;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
    }
  }
  &-date {
    width: 100%;
    height: 18px;
    font-size: 14px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #d1d9b4;
    line-height: 16px;
    text-align: center;
    margin: 5px 0;
  }
  &-title {
    width: 100%;
    text-align: center;
    height: 26px;
    font-size: 20px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #b9bf8f;
    line-height: 23px;
  }
}
</style>
