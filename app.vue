<template>
  <dl>
    <template v-for="(val, key, idx) in cocktailRef" :key="key">
      <dt>{{ idx + 1 }}. {{ key }}</dt>
      <dd>{{ val }}</dd>
    </template>
  </dl>
</template>

<script setup lang="ts">
const cocktailRef = ref({
  id: 2345,
  name: "White Lady",
  price: 1200,
  recipe: "진 30ml + 쿠앵트로 15ml + 레몬과즙 15ml",
});
</script>
