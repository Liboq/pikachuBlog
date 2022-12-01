<template>
  <div v-if="listItem" class="list-item-container">
    <div class="list-item-container-img"><Img :imgPath="listItem.imgUrl"></Img></div>
    <div class="list-item-container-item">
      <div class="list-item-info">
        <span class="mes-name">{{ listItem.mesName }} </span
        ><span class="mes-date">{{ dateFormate(listItem.date) }}</span>
        <div @click="toggle" class="icon-mes"> <span class="lbq lbq-wenda"></span></div>
      </div>
      <TextAreaBox :content="listItem.content"></TextAreaBox>
    </div>
  </div>
  <!-- 准备回复框 -->
  <div v-if="isShowMes">
    <MessageBox @sendMessage ="sendMessage"></MessageBox>
  </div>

  <!-- 回复的信息 -->
  <div class="list-item-son">
    <div class="list-item-container" v-for="son in listItem.children">
      <div class="list-item-container-img">
        <Img :imgPath="son.imgUrl" width="78px" height="78px"></Img>
      </div>
      <div class="list-item-container-item">
        <div class="list-item-info">
          <span class="mes-name">{{ son.mesName }}</span
          ><span class="mes-date">{{ dateFormate(son.date) }}</span>
        </div>
        <TextAreaBox
          :content="son.content"
          width="898px"
          height="auto"
        ></TextAreaBox>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,inject,InjectionKey} from 'vue'
import Img from '../img/index.vue';
import TextAreaBox from '../textarea/box.vue';
import moment from 'moment';
import MessageBox from './box.vue'
const type = {
  content: {
    type: String,
    default: ''
  },
  id: {
    type: Number,
    default: 0
  },
  mesName: {
    type: String,
    default: ''
  },
  date: {
    type: Number
  },
  children: {
    type: Array
  }
};
const props = defineProps({
  listItem: {
    type: Object,
    default: {}
  }
});
const isShowMes = ref(false)
const toggle = ()=>{
    isShowMes.value = !isShowMes.value
}
const dateFormate = (date: number) => {
  return moment(date).format('YYYY.MM.DD HH:mm:ss');
};
const addMessage:InjectionKey<Function>|any = inject('sendMessage')
const sendMessage = (data:any) => {
    // data['pid']= props.listItem.mid
    addMessage(data,props.listItem.mid)
    isShowMes.value= false
}
</script>

<style lang="scss" scoped>
.list-item-info {
  margin-bottom: 10px;
  .icon-mes{
    float: right;
    margin-right:20px;
    cursor: pointer;
    .lbq{
        font-size: 18px;
    }
    &:hover{
        .lbq{
            color: #d1d9b4;
        }
    }
  }
  .mes-name {
    width: 57px;
    height: 22px;
    font-size: 18px;
    font-family: Inter-Medium, Inter;
    font-weight: 500;
    color: #585e44;
    line-height: 21px;
    padding: 0 5px;
  }
  .mes-date {
    width: 73px;
    height: 19px;
    font-size: 14px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #bfc1b8;
    line-height: 16px;
    padding: 0 5px;
  }
}
.list-item-container {
  display: flex;
  margin-bottom: 20px;
  &-img {
    margin-right: 20px;
  }
  &-item {
    display: flex;
    flex-direction: column;
  }
}
.list-item-son {
  margin-left: 134px;
}
</style>
