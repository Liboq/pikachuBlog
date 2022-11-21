<template>
    <SwiperContainer></SwiperContainer>
</template>

<script setup lang="ts">
import SwiperContainer from '../../components/swiper/index.vue'
import { getAllUser } from '../../api/user';
import { onMounted } from 'vue';
const getAllUser1: any = async () => {
    const res = await getAllUser()
    console.log(res)
}
onMounted(()=>{
    getAllUser1()
})

</script>

<style>

</style>
