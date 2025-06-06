<template>
  <div
    class="relative w-full h-20 flex items-center justify-center overflow-visible"
  >
    <svg
      viewBox="0 0 1440 80"
      width="100%"
      height="80"
      preserveAspectRatio="none"
      class="w-full h-20"
    >
      <!-- Main neon line -->
      <path
        d="M0,40 Q360,0 720,40 T1440,40"
        stroke="#00fff7"
        stroke-width="4"
        fill="none"
        filter="url(#glow)"
        class="neon-path"
      />
      <!-- Secondary lines for depth -->
      <path
        d="M0,50 Q360,10 720,50 T1440,50"
        stroke="#00bfff"
        stroke-width="2"
        fill="none"
        opacity="0.5"
        filter="url(#glow)"
      />
      <path
        d="M0,60 Q360,20 720,60 T1440,60"
        stroke="#00fff7"
        stroke-width="1"
        fill="none"
        opacity="0.3"
        filter="url(#glow)"
      />
      <!-- Animated pulse/scan -->
      <circle
        :cx="scanX"
        cy="40"
        r="16"
        fill="none"
        stroke="#00fff7"
        stroke-width="4"
        filter="url(#glow)"
        class="scan-circle"
      />
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const scanX = ref(0);
let animationFrame: number;
function animateScan() {
  scanX.value += 6;
  if (scanX.value > 1440) scanX.value = 0;
  animationFrame = requestAnimationFrame(animateScan);
}
onMounted(() => {
  scanX.value = 0;
  animateScan();
});
</script>

<style scoped>
.neon-path {
  stroke-dasharray: 12 8;
  animation: neon-flicker 2.5s infinite alternate;
}
@keyframes neon-flicker {
  0% {
    filter: brightness(1.2) drop-shadow(0 0 8px #0ff);
  }
  100% {
    filter: brightness(2) drop-shadow(0 0 24px #0ff);
  }
}
.scan-circle {
  opacity: 0.7;
  animation: scan-pulse 1.2s infinite alternate;
}
@keyframes scan-pulse {
  0% {
    r: 12;
    opacity: 0.5;
  }
  100% {
    r: 22;
    opacity: 1;
  }
}
</style>
