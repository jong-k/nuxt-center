<template>
  <div>
    <ul>
      <li v-for="(val, key, idx) in cocktailRef" :key="val">
        {{ idx + 1 }}: ID가 {{ key }}인 칵테일은 {{ val }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const cocktailRef = ref({
  2345: "화이트 레이디",
  4412: "블루 하와이",
  6792: "뉴욕",
});
</script>
