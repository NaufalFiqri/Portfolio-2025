<template>
  <div
    class="relative w-full h-[600px] flex items-center justify-center bg-black overflow-hidden"
  >
    <!-- Rain Particle Canvas -->
    <canvas
      ref="rainCanvas"
      class="absolute inset-0 w-full h-full pointer-events-none z-10"
    />

    <!-- Tree of Life SVG -->
    <svg viewBox="0 0 400 600" class="relative z-20 w-[400px] h-[600px]">
      <!-- Neon Roots and Skill Nodes -->
      <g v-for="(skill, i) in skills" :key="skill.name">
        <!-- Example root path, adjust d for each root -->
        <path
          :d="rootPaths[i]"
          :stroke="skill.colorHex"
          stroke-width="4"
          fill="none"
          :filter="'url(#glow)'"
        />
        <!-- Skill Node -->
        <circle
          :cx="nodePositions[i].x"
          :cy="nodePositions[i].y"
          r="18"
          :fill="skill.colorHex"
          class="drop-shadow-[0_0_16px_var(--tw-shadow-color)] cursor-pointer transition-transform duration-200 hover:scale-110"
          :style="{ '--tw-shadow-color': skill.colorHex }"
          @mouseenter="playAudio(i)"
        />
        <!-- Skill Label -->
        <text
          :x="nodePositions[i].x"
          :y="nodePositions[i].y + 40"
          text-anchor="middle"
          class="fill-white font-bold text-lg select-none"
        >
          {{ skill.name }}
        </text>
      </g>
      <!-- SVG Glow Filter -->
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

    <!-- Animated Skill Bars (Reveal on Scroll) -->
    <div class="absolute right-8 top-1/2 -translate-y-1/2 z-30 space-y-8 w-56">
      <div v-for="skill in skills" :key="skill.name" class="">
        <div class="flex justify-between items-center mb-1">
          <span class="text-white font-semibold">{{ skill.name }}</span>
          <span class="text-cyan-200 font-mono">{{
            revealed ? skill.percent + "%" : ""
          }}</span>
        </div>
        <div class="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
          <div
            class="h-full rounded-full transition-all duration-1000 ease-out pulse-bar"
            :class="{ 'animate-pulse': revealed }"
            :style="{
              width: revealed ? skill.percent + '%' : '0%',
              background: skill.gradient,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

// Skill data
const skills = [
  {
    name: "Vue 3",
    percent: 89,
    colorHex: "#06b6d4", // cyan-400
    gradient: "linear-gradient(90deg, #06b6d4 0%, #67e8f9 100%)",
    audio: "/audio/vue.mp3",
  },
  {
    name: "Tailwind",
    percent: 94,
    colorHex: "#3b82f6", // blue-500
    gradient: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)",
    audio: "/audio/tailwind.mp3",
  },
  {
    name: "React",
    percent: 78,
    colorHex: "#38bdf8", // sky-400
    gradient: "linear-gradient(90deg, #38bdf8 0%, #7dd3fc 100%)",
    audio: "/audio/react.mp3",
  },
];

// SVG root paths and node positions (customize for your design)
const rootPaths = [
  "M200,550 Q180,500 200,450", // Vue
  "M200,550 Q220,500 250,470", // Tailwind
  "M200,550 Q160,500 150,470", // React
];
const nodePositions = [
  { x: 200, y: 450 }, // Vue
  { x: 250, y: 470 }, // Tailwind
  { x: 150, y: 470 }, // React
];

// Audio refs
const audioRefs = skills.map(() => ref<HTMLAudioElement | null>(null));
function playAudio(i: number) {
  if (!audioRefs[i].value) {
    audioRefs[i].value = new Audio(skills[i].audio);
  }
  audioRefs[i].value!.currentTime = 0;
  audioRefs[i].value!.play();
}

// Reveal skill bars on scroll
const revealed = ref(false);
const skillBarRef = ref<HTMLElement | null>(null);
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) revealed.value = true;
    },
    { threshold: 0.3 }
  );
  if (skillBarRef.value) observer.observe(skillBarRef.value);
});

// Rain particle effect
const rainCanvas = ref<HTMLCanvasElement | null>(null);
function drawRain() {
  const canvas = rainCanvas.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const drops = Array.from({ length: 60 }, () => ({
    x: Math.random() * (canvas?.width || 0),
    y: Math.random() * (canvas?.height || 0),
    l: 10 + Math.random() * 20,
    xs: -2 + Math.random() * 4,
    ys: 4 + Math.random() * 4,
  }));
  function animate() {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(173,216,230,0.3)";
    ctx.lineWidth = 2;
    for (const d of drops) {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x + d.xs, d.y + d.l);
      ctx.stroke();
      d.x += d.xs;
      d.y += d.ys;
      if (canvas && d.y > canvas.height) {
        d.x = Math.random() * canvas.width;
        d.y = -20;
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}
onMounted(() => {
  const canvas = rainCanvas.value;
  if (!canvas) return;
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  drawRain();
});
</script>

<style scoped>
.pulse-bar {
  animation: pulse-bar 1.2s infinite alternate;
}
@keyframes pulse-bar {
  0% {
    filter: brightness(1) drop-shadow(0 0 8px #0ff);
  }
  100% {
    filter: brightness(1.2) drop-shadow(0 0 16px #0ff);
  }
}
</style>
