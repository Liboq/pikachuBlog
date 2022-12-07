<template>
  <div class="list-container">
    <h2 class="list-container-title">{{ messageList.length }}条留言</h2>
    <div class="list-container-box">
      <ListItem
        v-for="item in messageList"
        :listItem="item"
        :key="item.mid"
      ></ListItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ListItem from './listItem.vue';
interface type {
  content: string;
  mid: number;
  mesName: string;
  date: number;
  children: {
    type: Array<Object>;
  };
}
const props = defineProps({
  messageList: {
    type: Array<type>,
    default: []
  }
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .list-container {
    &-title {
      font-size: 0.5rem !important;
    }
    &-box {
      margin-left: 0.5rem !important;
    }
  }
}
.list-container {
  &-title {
    height: 18px;
    font-size: 18px;
    font-family: Microsoft YaHei-Regular, Microsoft YaHei;
    font-weight: 400;
    color: #585e44;
    line-height: 16px;
    text-align: center;
    margin-bottom: 50px;
  }
  &-box {
    margin-left: 40px;
  }
}
</style>
