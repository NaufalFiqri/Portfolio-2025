<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden dark-bg"
  >
    <!-- Animated Aurora Gradient Background -->
    <div class="aurora-bg absolute inset-0 pointer-events-none z-0"></div>
    <!-- Noise Overlay -->
    <div class="noise-overlay absolute inset-0 pointer-events-none z-10"></div>
    <!-- Animated Particles -->
    <div class="particles absolute inset-0 pointer-events-none z-10">
      <canvas ref="particlesCanvas" class="w-full h-full"></canvas>
    </div>
    <!-- Glowing Circuit Branches SVG -->
    <div
      class="circuit-branches absolute inset-0 pointer-events-none flex items-center justify-center z-20"
    >
      <svg class="w-full h-full" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="circuit-gradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#00fff0" stop-opacity="0.2" />
            <stop offset="50%" stop-color="#00fff0" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#7f5cff" stop-opacity="0.2" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M0,800 Q400,600 800,650 T1600,700 Q1800,720 1920,750"
          stroke="url(#circuit-gradient2)"
          stroke-width="3"
          fill="none"
          filter="url(#glow)"
          class="animate-circuit"
        />
        <path
          d="M200,1000 Q600,800 1000,850 T1800,900"
          stroke="url(#circuit-gradient2)"
          stroke-width="2"
          fill="none"
          filter="url(#glow)"
          class="animate-circuit delay-1s"
        />
        <path
          d="M400,200 Q900,400 1400,300 T1920,400"
          stroke="url(#circuit-gradient2)"
          stroke-width="1.5"
          fill="none"
          filter="url(#glow)"
          class="animate-circuit delay-2s"
        />
      </svg>
    </div>
    <!-- Main Content -->
    <div
      class="relative z-30 text-center max-w-4xl mx-auto px-6 transition-all duration-1000"
      :class="
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      "
    >
      <div class="mb-8 flex flex-col items-center">
        <!-- Stylish Glowing Developer Icon -->
        <div
          class="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-400/40 shadow-lg shadow-cyan-400/20 relative"
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-cyan-300 drop-shadow-glow animate-pulse"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#00fff0"
              stroke-width="2"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M16 24L24 16L32 24"
              stroke="#00fff0"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 32L24 24L32 32"
              stroke="#7f5cff"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h1
          class="glitch-text text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-xl"
        >
          {{ glitchText }}
        </h1>
        <div
          class="text-xl md:text-2xl text-cyan-200 mb-8 font-light tracking-wider drop-shadow"
        >
          <span class="inline-block">Web Developer</span>
          <span class="mx-4 text-purple-400 font-bold">//</span>
          <span class="inline-block">Explorer</span>
          <span class="mx-4 text-purple-400 font-bold">//</span>
          <span class="inline-block">Precision Builder</span>
        </div>
        <p
          class="text-lg text-cyan-100 max-w-2xl mx-auto mb-12 leading-relaxed opacity-90 drop-shadow"
        >
          Navigating the intersection of digital mastery and natural
          exploration. Building experiences that bridge worlds.
        </p>
      </div>
      <button
        @click="scrollToSkills"
        class="group flex flex-col items-center space-y-2 mx-auto text-cyan-300 hover:text-purple-400 transition-all duration-300"
      >
        <span class="text-sm tracking-widest uppercase drop-shadow-glow"
          >Ascend</span
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 animate-bounce group-hover:animate-pulse drop-shadow-glow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
    <!-- <div
      class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-40"
    ></div> -->
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const mounted = ref(false);
const glitchText = ref("Naufal Fiqri");
const original = "Naufal Fiqri";
let glitchInterval = null;
const particlesCanvas = ref(null);
let animationFrameId = null;

function createParticles(ctx, w, h, count = 32) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1 + Math.random() * 2,
      dx: -0.5 + Math.random(),
      dy: -0.5 + Math.random(),
      alpha: 0.2 + Math.random() * 0.5,
    });
  }
  return particles;
}

function animateParticles(ctx, w, h, particles) {
  ctx.clearRect(0, 0, w, h);
  for (const p of particles) {
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    ctx.fillStyle = "cyan";
    ctx.shadowColor = "#00fff0";
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > w) p.dx *= -1;
    if (p.y < 0 || p.y > h) p.dy *= -1;
  }
}

onMounted(() => {
  mounted.value = true;
  glitchInterval = setInterval(() => {
    const glitched = original
      .split("")
      .map((char) =>
        Math.random() > 0.8
          ? String.fromCharCode(33 + Math.floor(Math.random() * 94))
          : char
      )
      .join("");
    glitchText.value = glitched;
    setTimeout(() => {
      glitchText.value = original;
    }, 100);
  }, 3000);

  // Particle animation
  const canvas = particlesCanvas.value;
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    let particles = createParticles(ctx, w, h, 32);
    function loop() {
      animateParticles(ctx, w, h, particles);
      animationFrameId = requestAnimationFrame(loop);
    }
    loop();
    window.addEventListener("resize", () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      particles = createParticles(ctx, w, h, 32);
    });
  }
});

onBeforeUnmount(() => {
  if (glitchInterval) clearInterval(glitchInterval);
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
});

function scrollToSkills() {
  const el = document.getElementById("skills");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped>
.dark-bg {
  background: #0a0f1c;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.aurora-bg {
  background: radial-gradient(ellipse at 60% 20%, #00ffd0 0%, transparent 70%),
    radial-gradient(ellipse at 30% 80%, #7f5cff 0%, transparent 80%),
    linear-gradient(120deg, #0a0f1c 0%, #0e2f3a 100%);
  animation: auroraMove2 16s linear infinite alternate;
  z-index: 1;
}
@keyframes auroraMove2 {
  0% {
    background-position: 60% 20%, 30% 80%, 0% 0%;
  }
  100% {
    background-position: 70% 30%, 40% 90%, 100% 100%;
  }
}

.noise-overlay {
  background: url("https://www.transparenttextures.com/patterns/noise.png");
  opacity: 0.12;
  z-index: 2;
}

.particles {
  z-index: 3;
}

.circuit-branches {
  z-index: 4;
}

.animate-circuit {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: circuitDraw 3s linear forwards, circuitPulse 2s infinite alternate;
}
.animate-circuit.delay-1s {
  animation-delay: 1s, 1s;
}
.animate-circuit.delay-2s {
  animation-delay: 2s, 2s;
}
@keyframes circuitDraw {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes circuitPulse {
  0% {
    filter: drop-shadow(0 0 8px #00fff0);
  }
  100% {
    filter: drop-shadow(0 0 16px #7f5cff);
  }
}

.glitch-text {
  color: #fff;
  position: relative;
  text-shadow: 2px 0 #00ffd0, -2px 0 #7f5cff, 0 4px 24px #00fff0;
  animation: glitch 2s infinite linear alternate-reverse;
  font-family: "Orbitron", "Share Tech Mono", "serif";
}
@keyframes glitch {
  0% {
    text-shadow: 2px 0 #00ffd0, -2px 0 #7f5cff, 0 4px 24px #00fff0;
  }
  20% {
    text-shadow: 2px 2px #00ffd0, -2px -2px #7f5cff, 0 4px 24px #00fff0;
  }
  40% {
    text-shadow: -2px 2px #00ffd0, 2px -2px #7f5cff, 0 4px 24px #00fff0;
  }
  60% {
    text-shadow: 2px -2px #00ffd0, -2px 2px #7f5cff, 0 4px 24px #00fff0;
  }
  80% {
    text-shadow: -2px 0 #00ffd0, 2px 0 #7f5cff, 0 4px 24px #00fff0;
  }
  100% {
    text-shadow: 2px 0 #00ffd0, -2px 0 #7f5cff, 0 4px 24px #00fff0;
  }
}

.drop-shadow-glow {
  filter: drop-shadow(0 0 8px #00fff0) drop-shadow(0 0 16px #7f5cff);
}

.scroll-cue span,
.group span {
  font-family: "Orbitron", "Share Tech Mono", "serif";
  font-size: 1.25rem;
  letter-spacing: 0.1em;
}
</style>
