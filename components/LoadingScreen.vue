<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#0a0f1c] to-[#101c2c]"
    >
      <div class="flex flex-col items-center justify-center">
        <div class="relative">
          <img
            src="@/assets/NFGif.gif"
            class="w-40 h-40 rounded-xl border-4 border-cyan-400 shadow-xl neon-border animate-pulse filter-white-gif"
            alt="Loading..."
          />
          <!-- Neon animated border -->
          <div
            class="absolute inset-0 rounded-xl pointer-events-none neon-glow"
          ></div>
        </div>
        <div
          class="mt-8 text-cyan-200 font-orbitron text-2xl tracking-widest flex items-center gap-2"
        >
          <span class="loading-text">Loading</span>
          <span class="dots">...</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const show = ref(true);

onMounted(() => {
  // Simulate loading, or replace with Nuxt's ready event
  setTimeout(() => {
    show.value = false;
  }, 5000);
});
</script>

<style scoped>
.neon-border {
  box-shadow: 0 0 24px #0ff, 0 0 48px #0ff;
}
.neon-glow {
  box-shadow: 0 0 32px 8px #00fff7, 0 0 64px 16px #00fff7;
  border-radius: 1rem;
  opacity: 0.5;
}
.font-orbitron {
  font-family: "Orbitron", sans-serif;
}
.loading-text {
  letter-spacing: 0.2em;
  animation: flicker 1.2s infinite alternate;
}
@keyframes flicker {
  0% {
    opacity: 1;
    filter: brightness(1.2) drop-shadow(0 0 8px #0ff);
  }
  100% {
    opacity: 0.7;
    filter: brightness(2) drop-shadow(0 0 24px #0ff);
  }
}
.dots {
  animation: dots-bounce 1.2s infinite steps(4);
}
@keyframes dots-bounce {
  0%,
  100% {
    opacity: 1;
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.2;
  }
  75% {
    opacity: 0.5;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.filter-white-gif {
  filter: brightness(0) invert(1);
}
</style>
