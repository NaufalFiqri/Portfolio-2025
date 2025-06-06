<template>
  <span>{{ displayedText }}</span>
</template>

<script setup>
import { ref, onMounted } from "vue";
const tagline = "Building delightful digital experiences.";
const displayedText = ref("");
onMounted(() => {
  let i = 0;
  const interval = setInterval(() => {
    displayedText.value = tagline.slice(0, i++);
    if (i > tagline.length) clearInterval(interval);
  }, 50);
});
</script>
