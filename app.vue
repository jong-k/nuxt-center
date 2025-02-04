<template>
  <p>
    <!--  <a v-bind:href="url" target="_blank">Vue.js 공식문서</a>  -->
    <!--  아래는 v-bind directive 축약형  -->
    <a :href="url" target="_blank">Vue.js 공식문서</a>
  </p>
  <p>
    <a :href="url + 'style-guide'" target="_blank">Vue.js 스타일 가이드</a>
  </p>
</template>

<script setup lang="ts">
const url = ref("https://vuejs.org/");
</script>
