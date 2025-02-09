<template>
  <div>
    <div>
      <h2>v-model</h2>
      <input v-model="textOnInput" type="text" />
      <p>입력 문자열: {{ textOnInput }}</p>
    </div>
    <div>
      <h2>v-model.lazy</h2>
      <input v-model.lazy="textOnChange" type="text" />
      <p>입력 문자열: {{ textOnChange }}</p>
    </div>
    <div>
      <h2>v-mode.trim</h2>
      <input v-model.trim="trimmedText" type="text" />
      <p>입력 문자열: {{ trimmedText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const textOnInput = ref("");
const textOnChange = ref("");
const trimmedText = ref("");
</script>
