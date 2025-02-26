<template>
  <BaseSection />
</template>

<script setup lang="ts">
import type { Member } from "~/interfaces";
import BaseSection from "~/components/BaseSection.vue";

const memberList = new Map<number, Member>();
memberList.set(33456, {
  id: 33456,
  name: "소희",
  email: "abc@sample.com",
  points: 35,
  note: "신규 가입 특전",
});
memberList.set(47783, {
  id: 47783,
  name: "채영",
  email: "def@sample.com",
  points: 53,
});
const memberListRef = ref({
  33456: {
    id: 33456,
    name: "소희",
    email: "abc@sample.com",
    points: 35,
    note: "신규 가입 특전",
  },
  47783: {
    id: 47783,
    name: "채영",
    email: "def@sample.com",
    points: 53,
  },
});
provide("memberList", reactive(memberList));
provide("memberListRef", memberListRef as Ref<{ [key: number]: Member }>);
</script>
