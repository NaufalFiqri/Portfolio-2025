<script setup>
import { ref, onMounted } from "vue";
import FloatingSocialLinks from "~/components/FloatingSocialLinks.vue";

const loading = ref(false);

onMounted(() => {
  // Loading screen removed
  loading.value = false;
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <FloatingSocialLinks />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap");

body {
  font-family: "Quicksand", sans-serif;
  background: linear-gradient(
    180deg,
    #0a0f1c 0%,
    #1e293b 20%,
    #374151 40%,
    #475569 60%,
    #1f2937 80%,
    #111827 100%
  );
  background-attachment: fixed;
  background-size: 100% 400vh;
  color: #ffffff;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
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

/* Custom Scrollbar Styling */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #374151 100%);
  border-radius: 0;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #00fff0 0%, #7f5cff 50%, #00fff0 100%);
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 255, 240, 0.3),
    inset 0 0 6px rgba(0, 255, 240, 0.2);
  border: 1px solid rgba(0, 255, 240, 0.3);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #67e8f9 0%, #a855f7 50%, #67e8f9 100%);
  box-shadow: 0 0 15px rgba(0, 255, 240, 0.5),
    inset 0 0 8px rgba(0, 255, 240, 0.3);
  border: 1px solid rgba(0, 255, 240, 0.5);
}

::-webkit-scrollbar-thumb:active {
  background: linear-gradient(180deg, #06b6d4 0%, #8b5cf6 50%, #06b6d4 100%);
  box-shadow: 0 0 20px rgba(0, 255, 240, 0.7),
    inset 0 0 10px rgba(0, 255, 240, 0.4);
}

::-webkit-scrollbar-corner {
  background: #0f172a;
}

/* Firefox scrollbar styling */
* {
  scrollbar-width: thin;
  scrollbar-color: #00fff0 #1e293b;
}

/* Cyberpunk glow effect for scrollbar */
::-webkit-scrollbar-thumb {
  animation: scrollbarGlow 3s ease-in-out infinite alternate;
}

@keyframes scrollbarGlow {
  0% {
    box-shadow: 0 0 10px rgba(0, 255, 240, 0.3),
      inset 0 0 6px rgba(0, 255, 240, 0.2);
  }
  100% {
    box-shadow: 0 0 20px rgba(0, 255, 240, 0.6),
      inset 0 0 10px rgba(0, 255, 240, 0.4);
  }
}
</style>
