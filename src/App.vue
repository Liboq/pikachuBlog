<template>
  <div class="bgc">
    <router-view></router-view>
    <div @click="scrollToTop" :class="HuojianClass">
      <svg class="lbq" aria-hidden="true">
        <use xlink:href="#lbq-huojian"></use>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
const scrollTop = ref(0);

const scroll = () => {
  scrollTop.value =
    document.documentElement.scrollTop ||
    window.pageYOffset ||
    document.body.scrollTop;
};
const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};
const HuojianClass = computed(() => {
  if (scrollTop.value >= 900) {
    return {
      ['huojian']: true,
      ['huojian-down']: true
    };
  } else {
    return {
      ['huojian']: true,
      ['huojian-top']: true
    };
  }
});

document.addEventListener('scroll', scroll);
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
  .huojian-top {
    transform: translateY(-13rem) !important;
  }
  .huojian-down {
    transform: translateY(12rem) !important;
  }
  .huojian {
    top: -1rem !important;
    right: 0.8rem !important;

    .lbq {
      width: 1rem !important;
      height: 1rem !important;
    }
  }
}
.bgc {
  background-image: url(./assets/image/bgc2.png);
  background-attachment: fixed;
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: dengxian;
  .huojian {
    transition: all 1s;
    color: #fff;
    position: fixed;
    top: -100px;
    right: 300px;

    .lbq {
      width: 100px;
      height: 100px;
    }
  }
  .huojian-top {
    transform: translateY(-700px);
  }
  .huojian-down {
    transform: translateY(700px);
  }
  .huojian-none {
    top: -200px;
  }
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
