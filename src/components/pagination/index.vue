<template>
  <div class="pagination-container" v-if="pageTotal > pageSize">
    <div @click="goPaging(indexActive-1)"  class="left-arrow small-box">
      <span class="lbq lbq-zuojiantou"></span>
    </div>
    <div class="page-num" >
      <div :class="indexActive === 1?'small-box active-small-box':'small-box '" @click="goPaging(1)">1</div>
      <div
        class="small-box"
        @click="controlNum - 4"
        v-if="controlNum > 1 && pageTotal > 5"
      >
        ...
      </div>
      <div @click="goPaging(num + 1 )" :class="indexActive === num+1?'small-box active-small-box':'small-box '" v-for="num in compNum">{{ num + controlNum }}</div>
      <div
        class="small-box"
        @click="controlNum + 4"
        v-if="pageTotal > 5 && pageTotal - 4 > controlNum"
      >
        ...
      </div>
      <div @click="goPaging(pageTotal)"  class="small-box" v-if="pageTotal > 5">{{ pageTotal }}</div>
    </div>
    <div @click="goPaging(indexActive+1)"  class="right-arrow small-box">
      <span  class="lbq lbq-youjiantou"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, defineEmits } from 'vue';

const props = defineProps({
  pageNum: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 5
  },
  pageTotal: {
    type: Number,
    default: 1
  }
});
const emit= defineEmits(['goPaging'])
const controlNum = ref(1);
const indexActive = ref(1)
const compNum = computed(() => {
  if (props.pageTotal > 5) {
    return 4;
  }
  if (props.pageTotal < 5) {
    return props.pageTotal - 1;
  }
});
const goPaging = (index:number) => {
  if(index<=0){
    return
  }
  if(index>props.pageTotal){
    return
  }
    indexActive.value = index
    
    emit('goPaging',index)
};
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  .page-num {
    display: flex;
  }
  .small-box {
    height: 42px;
    width: 42px;
    text-align: center;
    line-height: 42px;
    margin: 0 15px;
    color: #fff;
    background: #d1d9b4;
    cursor: pointer;
    font-size: 20px;
    &:hover {
      background: #577005;
    }
  }
  .active-small-box{
    background: #577005;
  }
}
</style>
