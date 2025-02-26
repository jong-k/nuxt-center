<template>
  <ul>
    <li v-for="r in 5" :key="r">
      반지름이 {{ r }} 인 원의 둘레 길이: {{ 2 * r * Math.PI }}
    </li>
  </ul>
</template>
