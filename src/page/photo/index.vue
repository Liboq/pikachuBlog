<template>
  <div class="photo-container">
    <h1 class="photo-container-type">{{type}}</h1>
    <div class="photo-container-description"><span>描述：</span>{{description}}</div>
    <div class="photo-container-list">
      <div class="photo-container-list-item" v-for="path in pathList">
        <ImgContainer
          width="300px"
          height="300px"
          :key="path"
          :img-path="path"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getOneGollery } from '../../api/golley';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import ImgContainer from '../../components/img/index.vue';
const route = useRoute();
const _id = route.query.id;
const pathList = ref([]);
const description = ref('');
const type = ref('');
const getOneGollerys = async () => {
  const res = await getOneGollery({ _id });
  const obj = res.data.data[0];
  pathList.value = res.data.data[0].path;
  description.value = obj.description;
  type.value = obj.type;
  console.log(res);
};
onMounted(() => {
  getOneGollerys();
});
</script>

<style lang="scss">
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
    }
  }
}
</style>
