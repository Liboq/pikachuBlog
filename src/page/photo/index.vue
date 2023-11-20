<template>
  <div class="photo-container">
    <h1 class="photo-container-type">{{type}}</h1>
    <div class="photo-container-description"><span>描述：</span>{{description}}</div>
    <div class="photo-container-list">
      <div class="photo-container-list-item" v-for="path in pathList">
        <img class="photo-img" :src="path" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getOneGollery } from '../../api/golley';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
const route = useRoute();
const _id = route.query.id;
const pathList = ref([]);
const description = ref('');
const type = ref('');
const getOneGollerys = async () => {
  const res = await getOneGollery({ _id });
  const obj = res.data[0];
  pathList.value = res.data[0].path;
  description.value = obj.description;
  type.value = obj.type;
  console.log(res);
};
onMounted(() => {
  getOneGollerys();
});
</script>

<style lang="scss">
@media screen and (max-width:500px) {
  .photo-container {
    width: 100% !important;
    padding: 0.3rem !important;
    &-list{
      &-item{
        width: 3rem !important;
    height: 3rem !important;
        .photo-img{
    width: 3rem !important;
    height: 3rem !important;
  }
      }
    }
  }
 
}
.photo-container {
  margin: 0 auto;
  width: 962px;
  min-height: 828px;
  padding-top: 40px;
  &-description{
    margin-bottom: 20px;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    &-item {
      width: 300px;
      height: 300px;
      overflow: hidden;
      margin: 0 20px 20px 0;
      transition: all 0.6s;
      :hover {
        transform: scale(1.1);
      }
      .photo-img{
        width: 300px;
        height: 300px;
      }
    }
  }

}
</style>
