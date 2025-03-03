<template>
  <p>컴포넌트명: {{ currentCompName }}</p>
  <KeepAlive>
    <component :is="currentComp" />
  </KeepAlive>
  <button @click="switchComp">바꾸기</button>
</template>

<script setup lang="ts">
import AppInput from "~/components/AppInput.vue";
import AppRadio from "~/components/AppRadio.vue";
import AppSelect from "~/components/AppSelect.vue";

const currentComp = ref(AppInput);
const currentCompName = ref("Input");
const compList = [AppInput, AppRadio, AppSelect];
const compNameList = ["AppInput", "AppRadio", "AppSelect"];
const currentCompIndex = ref(0);

const switchComp = () => {
  currentCompIndex.value += 1;
  if (currentCompIndex.value >= 3) {
    currentCompIndex.value = 0;
  }
  currentComp.value = compList[currentCompIndex.value];
  currentCompName.value = compNameList[currentCompIndex.value];
};
</script>
