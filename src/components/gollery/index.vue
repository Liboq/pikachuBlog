<template>
  <div v-if="golleryItem" class="gollery-card">
    <div class="gollery-card-photo">
      <div @click="goGolleryItem" class="gollery-card-photo-img">
        <img :src="golleryItem.coverPath" alt="">
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
@media screen and (max-width: 500px) {
  .gollery-card {
    width: 4rem !important;
    height: 4.4rem !important;
    &-date{
      font-size: 0.5rem !important;
    }
    &-title{
      font-size: 0.5rem !important;
    }
    &-photo{
      width: 4rem !important;
    height: 4.4rem !important;
    }
    .gollery-card-photo-img{
      img{
        width: 4rem !important;
    height: 4rem !important;
      }
    }


  }
}
.gollery-card {
  height: 350px;
  width: 362px;
  margin-bottom: 10px;
  text-align: center;
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
      img{
        width: 300px ;
    height: 300px;
      }
    }
  }
  &-date {
    width: 100%;
    font-size: 14px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #d1d9b4;
    text-align: center;
    margin: 5px 0;
  }
  &-title {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #b9bf8f;
  }
}
</style>
