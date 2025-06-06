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
}
</style>
