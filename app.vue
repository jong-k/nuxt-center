<template>
  <div class="4f" @click="handleClick">
    <div class="3f" @click="handleClick">
      <div class="2f" @click="handleClick">
        <button
          class="1f"
          :style="{ padding: '10px', color: 'red' }"
          @click="handleClick"
        >
          클릭
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleClick = (e: MouseEvent) => {
  console.log(e.currentTarget); // 버블링 단계에서 각 부모 요소
  // console.log(e.target); // event 발생지 근원
};
</script>
