<template>
  <div class="message-container">
    <div class="message-container-title">留言板</div>
    <div class="message-container-box"><MessageBox @send-message="(data:any)=>addMessages(data,0)"></MessageBox></div>
    <div><MessageList :message-list="messageList"></MessageList></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, provide } from 'vue';
import { addMessage, getAllMes } from '../../api/message';
import MessageBox from '../../components/message/box.vue';
import MessageList from '../../components/message/list.vue';
import {arrayToTree} from'../../utils/common'
const messageList = ref()
const addMessages = async(data:any,index:number)=>{
    data['pid']=index
   const res = await addMessage(data)
   if(res.status === 200){
    getAllMess()
   }else{
    console.log('error');
   }

} 
const getAllMess = async()=>{
   const res= await getAllMes()

   const result = res.data
   const treeData = arrayToTree(result.data)
   messageList.value = treeData
} 
onMounted(()=>{
    getAllMess()
})
provide('sendMessage',addMessages )
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .message-container{
    height: 100%;
    width: 100% !important;
    &-title{
      font-size: 1rem !important;
    }
    &-box{
        
    }
  }
}
.message-container {
  margin: 0 auto;
  width: 1126px;
  &-title {
    padding: 30px 0 20px; 
    text-align: center;
    font-size: 24px;
    font-family: YouSheBiaoTiHei-Regular, YouSheBiaoTiHei;
    font-weight: 400;
    color: #b9bf8f;
  }
  &-box {
    margin: 50px 0;
  }
}
</style>
