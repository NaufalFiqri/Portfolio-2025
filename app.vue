<script setup>
import { ref, onMounted } from "vue";
import LoadingScreen from "~/components/LoadingScreen.vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1200);
});
</script>

<template>
  <div>
    <LoadingScreen />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap");

body {
  font-family: "Quicksand", sans-serif;
  background: #14213d;
  color: #ffffff;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Smooth scroll for better UX */
* {
  scroll-behavior: smooth;
}

/* Custom smooth scrolling with CSS */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 0;
  }
}
</style>
