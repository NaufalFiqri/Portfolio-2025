<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden dark-bg scroll-snap-section"
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
          <img
            src="@/assets/NFGif.gif"
            alt="Naufal Fiqri Logo"
            class="w-12 h-12 text-cyan-300 drop-shadow-glow animate-pulse filter-white-logo"
          />
        </div>
        <h1
          class="glitch-text text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-xl"
        >
          {{ glitchText }}
        </h1>
        <div
          class="text-xl md:text-2xl text-cyan-200 mb-8 font-light tracking-wider drop-shadow"
        >
          <span class="inline-block">Web Developer</span>
          <span class="mx-4 text-purple-400 font-bold">//</span>
          <span class="inline-block">Malaysian</span>
          <span class="mx-4 text-purple-400 font-bold">//</span>
          <span class="inline-block">24 Years Old</span>
        </div>
        <p
          class="text-lg text-cyan-100 max-w-2xl mx-auto mb-12 leading-relaxed opacity-90 drop-shadow"
        >
          Navigating the intersection of digital mastery and natural
          exploration. Building experiences that bridge worlds.
        </p>

        <!-- Links -->
        <div
          class="flex flex-wrap justify-center items-center gap-6 mb-12 transition-opacity duration-500"
          :class="{ 'opacity-0': scrolled }"
        >
          <!-- Resume/CV Link -->
          <a
            href="/Naufal_Fiqri_Fauzi_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            <svg
              class="w-6 h-6 text-cyan-300 group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>

          <!-- LinkedIn Link -->
          <a
            href="https://www.linkedin.com/in/naufal-fiqri-fauzi/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            <svg
              class="w-6 h-6 text-cyan-300 group-hover:text-white transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>

          <!-- GitHub Link -->
          <a
            href="https://github.com/NaufalFiqri"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            <svg
              class="w-6 h-6 text-cyan-300 group-hover:text-white transition-colors"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>

          <!-- Email Link -->
          <a
            href="mailto:naufalfiqrifauzi@gmail.com"
            class="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            <svg
              class="w-6 h-6 text-cyan-300 group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
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
    <!-- Bottom tech transition elements -->
    <div class="absolute bottom-0 left-0 w-full h-32 z-35 pointer-events-none">
      <!-- Subtle tech grid emerging -->
      <div class="absolute inset-0 opacity-20">
        <div class="grid grid-cols-24 gap-1 h-full items-end p-4">
          <div
            v-for="i in 96"
            :key="`transition-${i}`"
            class="w-1 bg-gradient-to-t from-cyan-400/40 to-transparent rounded-t-full"
            :style="{
              height: `${Math.random() * 20 + 5}px`,
              animationDelay: `${i * 0.03}s`,
              animation: 'pulse 4s ease-in-out infinite',
            }"
          />
        </div>
      </div>
      <!-- Connecting energy lines -->
      <div
        class="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
      ></div>
      <div
        class="absolute bottom-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const mounted = ref(false);
const glitchText = ref("Naufal Fiqri");
const original = "Naufal Fiqri";
const scrolled = ref(false);
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

  // Scroll listener
  const handleScroll = () => {
    scrolled.value = window.scrollY > 300;
  };
  window.addEventListener("scroll", handleScroll);
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
  background: transparent;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.aurora-bg {
  background: radial-gradient(ellipse at 60% 20%, #00ffd0 0%, transparent 70%),
    radial-gradient(ellipse at 30% 80%, #7f5cff 0%, transparent 80%),
    radial-gradient(ellipse at 80% 60%, #0d9488 0%, transparent 50%),
    linear-gradient(120deg, #0a0f1c 0%, #0e2f3a 50%, #1e293b 100%);
  animation: auroraMove2 20s linear infinite alternate;
  z-index: 1;
}
@keyframes auroraMove2 {
  0% {
    background-position: 60% 20%, 30% 80%, 80% 60%, 0% 0%;
    filter: hue-rotate(0deg);
  }
  25% {
    background-position: 65% 25%, 35% 85%, 75% 55%, 25% 25%;
    filter: hue-rotate(5deg);
  }
  50% {
    background-position: 70% 30%, 40% 90%, 85% 65%, 50% 50%;
    filter: hue-rotate(10deg);
  }
  75% {
    background-position: 75% 35%, 25% 75%, 90% 70%, 75% 75%;
    filter: hue-rotate(5deg);
  }
  100% {
    background-position: 70% 30%, 40% 90%, 85% 65%, 100% 100%;
    filter: hue-rotate(0deg);
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

/* Scroll snap section */
.scroll-snap-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.filter-white-logo {
  filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(180deg);
}
</style>
