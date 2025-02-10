<template>
  <div>
    <p>
      점수는 {{ randomNumber }}점
      <template v-if="randomNumber > 80">
        으로 매우 우수합니다
        <span style="color: red">대단해요!</span>
      </template>
    </p>
  </div>
</template>

<script setup lang="ts">
const randomNumber = computed(() => Math.round(Math.random() * 100));
</script>
