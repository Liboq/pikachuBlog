<template>
  <div class="swiper-container">
    <div class="swiper-container-item">
      <div v-for="item in imgList" >
        <Transition name="fade">
        <SwiperItem
        :key="(item as string)"
          v-if="item === imgList[activeIndex-1]"
          :img-path="(item as string)"
        ></SwiperItem>
    </Transition>

      </div>
    </div>
    <div class="dot">
      <Dot
        @click="activeIndex = item"
        v-for="item in imgList.length"
        :key="item"
        :class="item == activeIndex ? 'dot-active' : ''"
      ></Dot>
    </div>
    <div @click="arrowClick('left')" class="left-arrow arrow">
      <span class="lbq lbq-jiantou-zuo"></span>
    </div>
    <div @click="arrowClick('right')" class="right-arrow arrow">
      <span class="lbq lbq-jiantou-you"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue';
import Dot from './dot.vue';
import SwiperItem from './item.vue';
const activeIndex = ref(1);
const isPlay = ref(false)
const props = defineProps({
  autoPlay: {
    type: Boolean,
    default: true
  },
  duration: {
    type: Number,
    default: 3000
  },
  imgList: {
    type: Array,
    default: []
  }
});
// methods
const arrowClick = (arrow: string) => {
  if(props.autoPlay){
    isPlay.value=true
  }
  goSwiper(arrow)
  setTimeout(()=>{
   isPlay.value = false 
  },1000)
  }
const goSwiper = (arrow: string) => {
  if (arrow === 'left') {
    if (activeIndex.value === 1) {
      return (activeIndex.value = props.imgList.length);
    }
    activeIndex.value = activeIndex.value - 1;
  }
  if (arrow === 'right') {
    if (activeIndex.value === props.imgList.length) {
      return (activeIndex.value = 1);
    }
    activeIndex.value = activeIndex.value + 1;
  }
};
let timer: any = null;
const autoPlay = () => {
  if (props.autoPlay) {
    timer = setInterval(() => {
      if(!isPlay.value){
        
        goSwiper('right');
      }
    }, props.duration);
  }
};
autoPlay();
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  &-item {  
    height: 946px;
    width: 100%;
    overflow: hidden;
    transition: all 0.3s;
  }
  .dot {
    position: absolute;
    bottom: 20px;
    left: 50%;
    &-active {
      background-color: skyblue;
    }
  }
  .arrow {
    cursor: pointer;
    .lbq {
      font-size: 30px;
      color: #fff;
    }
    position: absolute;
  }
  .left-arrow {
    left: 20px;
    top: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right-arrow {
    right: 20px;
    top: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.fade-enter-active {
//   transition: all 0.3s ease-out;
transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

}
</style>
