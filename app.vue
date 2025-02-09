<template>
  <div>
    <input v-model.trim="trimmedText" type="text" />
    <p>입력 문자열: {{ trimmedText }}</p>
  </div>
</template>

<script setup lang="ts">
const trimmedText = ref("");
</script>
