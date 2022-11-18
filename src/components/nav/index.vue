<template>
        <div class="nav-container">
            <div class="nav-content">
                <div class="nav-item">首页 ></div>
                <div class="nav-item">个人介绍 ></div>
                <div class="nav-item">留言 ></div>
                <div class="nav-item">图库 ></div>
            </div>
            <div class="nav-other">
                <div class="nav-other-item github-img"></div>
            </div>
        </div>
</template>
    
<script setup lang='ts'>
    
</script>
    
<style lang="scss" scoped>  
.nav-container{
    width: 100%;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .nav-content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-item{
        padding: 0 10px;
    }
    .nav-other{
        position: absolute;
        right: 20px;
        height: 60px;
        top: 0;
        display: flex;

        align-items: center ;
        &-item{
            height: 60px;
            display: flex;
            align-content: center;
        }
        .github-img{
            background-image: url("../../../public/github.svg");
            background-repeat: no-repeat;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            border: 1px solid #ccc;
        }
    }
    }  
</style>