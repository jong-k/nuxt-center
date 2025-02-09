<template>
  <div>
    <div>{{ htmlStr }}</div>
    <div v-html="htmlStr"></div>
  </div>
</template>

<script setup lang="ts">
const htmlStr = ref(`<a href="https://www.naver.com/">네이버<a/>`);
</script>
