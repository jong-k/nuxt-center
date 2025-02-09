<template>
  <div>
    <h2>{{ msg }}</h2>
    <input type="text" @keydown.enter="onEnterKey" />
    <br />
    <button @click.right="onRightButtonClick">마우스 우클릭</button>
    <br />
    <button @click.shift="onShiftClick">시프트 키를 누르면서 클릭</button>
    <br />
  </div>
</template>

<script setup lang="ts">
const msg = ref("시작 전");
const onEnterKey = () => {
  msg.value = "엔터 키가 입력되었습니다";
};

const onRightButtonClick = () => {
  msg.value = "마우스 우클릭되었습니다";
};

const onShiftClick = () => {
  msg.value = "시프트 키를 누르면서 클릭했습니다";
};
</script>
