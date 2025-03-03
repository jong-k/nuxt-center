<template>
  <label>
    <input v-model="memberType" type="radio" name="memberType" value="1" />
    일반 회원
  </label>
  <label>
    <input v-model="memberType" type="radio" name="memberType" value="2" />
    특별 회원
  </label>
  <label>
    <input v-model="memberType" type="radio" name="memberType" value="3" />
    우수 회원
  </label>
  <br />
  <p>선택된 라디오 버튼: {{ memberType }}</p>
</template>

<script setup lang="ts">
const memberType = ref(1);
</script>
