<template>
  <div>
    <div>
      v-show 사용
      <p v-show="showOrNot">조건이 부합하여 표시</p>
    </div>
    <div>
      v-if 사용
      <p v-if="showOrNot">조건이 부합하여 표시</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const randomNumber = computed(() => Math.round(Math.random() * 100));
const showOrNot = computed(() => randomNumber.value >= 80);
</script>
