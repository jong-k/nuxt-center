<template>
  <section>
    <h4>{{ member.name }} 님의 정보</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>메일 주소</dt>
      <dd>{{ member.email }}</dd>
      <dt>보유 포인트</dt>
      <dd>
        <input v-model.number="member.points" type="number" />
      </dd>
      <dt>비고</dt>
      <dd>{{ localNote }}</dd>
    </dl>
  </section>
</template>

<script setup lang="ts">
import type { Member } from "~/interfaces";

interface Props {
  id: number;
}

const props = defineProps<Props>();
const memberListRef = inject<Ref<{ [key: number]: Member }>>("memberListRef", ref({}));
const member = computed(() => memberListRef.value[props.id]);
const localNote = computed(() => {
  let localNote = member.value.note;
  if (localNote === undefined) {
    localNote = "--";
  }
  return localNote;
});
</script>
