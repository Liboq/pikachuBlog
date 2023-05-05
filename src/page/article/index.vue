<template>
  <div>
    <div class="article-content" v-if="article">
      <h1>{{ article.titleZh }}</h1>
      <img class="image" :src="article.image_main" alt="" />
      <div v-markdown="article.content"></div>
    </div>
    <div v-if="article">
      <Anchor
        :classes="classes"
        height="calc(100% - 500px)"
        :content="article.content"
        :target="['h2','h3','h4']"
        container=".article-content"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import './github.scss';
import  "markdown-it-navbar/lib/style.css";
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getOneMd } from '../../api/markdown';
import Anchor from 'markdown-it-navbar';

// import Anchor from '../../components/anchor/anchor.vue';
import { throttle } from 'lodash';

const route = useRoute();
const titleEn = route.query.titleEn;
const article = ref();
const getOneMds = async () => {
  const res = await getOneMd({ titleEn });
  article.value = res.data.data[0];
};
const classes = computed(() => {
  if (scrollTop.value <= 60) {
    return { ['anchor-nav']: true };
  } else {
    return {
      ['anchor-nav']: true,
      ['anchor-nav-sticky']: true
    };
  }
});
const scrollTop = ref(0);
const winScroll = throttle(() => {
  scrollTop.value =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop;
});
document.addEventListener('scroll', winScroll, false);

onMounted(() => {
  getOneMds();
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .article-content {
    width: 10rem !important;
    overflow: hidden;
    box-shadow: none;
  }
  .anchor-nav {
    display: none !important;
  }
}
.anchor-nav {
  transition: all 0.5s;
  margin: 10px;
  padding: 10px;
  position: fixed;
  top: 60px;
  right: 10px;
  user-select: none;
  width: 300px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: #fff;
}
.anchor-nav-sticky {
  top: 0;
}
.article-content {
  width: 868px;
  background-color: #fff;
  margin: 10px auto;
  padding: 20px;
  min-height: 100%;
  box-shadow: 0px 4px 4px 4px rgba(69, 141, 140, 0.3);
  .image {
    width: 100%;
    transition: all 0.6s;
    object-fit: cover;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
    }
    img {
      width: 300px;
      height: 300px;
    }
  }
}
</style>
