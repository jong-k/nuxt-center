<template>
  <div>
    <img v-bind="imgAttributes" alt="nuxt logo" title="nuxt" />
  </div>
</template>

<script setup lang="ts">
const imgAttributes = ref({
  src: "/favicon.ico",
  alt: "logo",
  width: 75,
  height: 75,
  title: "nuxt logo",
});
</script>
