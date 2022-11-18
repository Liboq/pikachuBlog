<template>
    <NavContainer></NavContainer>
    
 pikachu
</template>
    
<script setup lang='ts'>
import NavContainer from '../../components/nav/index.vue'
    import { getAllUser } from '../../api/user';
    const getAllUser1: any = async () => {
    const res = await getAllUser()
    console.log(res)
    }

    getAllUser1()
</script>
    
<style>
    
</style>