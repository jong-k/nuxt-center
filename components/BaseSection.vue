<template>
  <section>
    <h2>회원 리스트</h2>
    <p>모든 회원의 보유 포인트 합계: {{ totalPoints }}</p>
    <OneMember v-for="id in Object.keys(memberListRef)" :id="+id" :key="id" />
  </section>
</template>

<script setup lang="ts">
import type { Member } from "~/interfaces";
const memberListRef = inject<Ref<{ [key: number]: Member }>>("memberListRef", ref({}));

const totalPoints = computed(() => {
  let total = 0;
  // Map 객체의 값만 배열 형태로 순회하기 위해 values() 사용
  for (const member of Object.values(memberListRef.value)) {
    total += member.points;
  }
  return total;
});
</script>

<style scoped>
section {
  border: orange 1px dashed;
  margin: 10px;
}
</style>
