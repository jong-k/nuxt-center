<template>
  <div>
    <ul>
      <li v-for="[id, cocktailName] in cocktailListRef" :key="id">
        ID가 {{ id }}인 칵테일은 {{ cocktailName }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const cocktailList = new Map<number, string>();
cocktailList.set(2345, "White Lady");
cocktailList.set(4412, "Blue hawaii");
cocktailList.set(6792, "New York");
console.log(cocktailList);
const cocktailListRef = ref(cocktailList);
</script>
