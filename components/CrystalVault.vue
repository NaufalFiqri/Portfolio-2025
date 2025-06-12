<template>
  <section
    id="projects"
    class="relative py-32 bg-gradient-to-b from-slate-900 via-gray-900 to-black overflow-hidden"
  >
    <!-- Futuristic Chamber Walls -->
    <div class="absolute inset-0">
      <!-- Side panels with tech patterns -->
      <div
        class="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-800/60 via-slate-800/30 to-transparent"
      >
        <div class="absolute inset-0 opacity-40">
          <!-- Vertical energy conduits -->
          <div
            v-for="i in 20"
            :key="`left-tech-${i}`"
            class="absolute w-0.5 bg-gradient-to-b from-cyan-400/60 via-cyan-400/30 to-transparent rounded-full"
            :style="{
              left: `${15 + (i % 3) * 25}%`,
              top: `${i * 5}%`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${i * 0.15}s`,
              animation: 'pulse 3s ease-in-out infinite',
            }"
          />
          <!-- Horizontal connectors -->
          <div
            v-for="i in 8"
            :key="`left-connect-${i}`"
            class="absolute h-0.5 bg-gradient-to-r from-purple-400/40 to-transparent"
            :style="{
              left: '15%',
              top: `${i * 12.5}%`,
              width: '60%',
              animationDelay: `${i * 0.2}s`,
              animation: 'pulse 4s ease-in-out infinite',
            }"
          />
        </div>
      </div>
      <div
        class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-800/60 via-slate-800/30 to-transparent"
      >
        <div class="absolute inset-0 opacity-40">
          <div
            v-for="i in 20"
            :key="`right-tech-${i}`"
            class="absolute w-0.5 bg-gradient-to-b from-emerald-400/60 via-emerald-400/30 to-transparent rounded-full"
            :style="{
              right: `${15 + (i % 3) * 25}%`,
              top: `${i * 5}%`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${i * 0.15}s`,
              animation: 'pulse 3s ease-in-out infinite',
            }"
          />
          <div
            v-for="i in 8"
            :key="`right-connect-${i}`"
            class="absolute h-0.5 bg-gradient-to-l from-teal-400/40 to-transparent"
            :style="{
              right: '15%',
              top: `${i * 12.5}%`,
              width: '60%',
              animationDelay: `${i * 0.2}s`,
              animation: 'pulse 4s ease-in-out infinite',
            }"
          />
        </div>
      </div>

      <!-- Ceiling with tech grid -->
      <div
        class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-800/80 via-slate-900/60 to-transparent"
      >
        <!-- Aurora glow seeping through -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-purple-900/20 to-transparent opacity-60"
        ></div>
        <div class="absolute inset-0 opacity-50">
          <div class="grid grid-cols-16 gap-3 p-6">
            <div
              v-for="i in 64"
              :key="`ceiling-${i}`"
              class="w-2 h-2 rounded-full animate-pulse"
              :class="
                i % 4 === 0
                  ? 'bg-cyan-400/50'
                  : i % 4 === 1
                  ? 'bg-purple-400/40'
                  : i % 4 === 2
                  ? 'bg-emerald-400/45'
                  : 'bg-slate-400/30'
              "
              :style="{
                animationDelay: `${i * 0.08}s`,
                animation: 'pulse 2s ease-in-out infinite',
              }"
            />
          </div>
          <!-- Ceiling connection lines -->
          <div class="absolute top-8 left-8 right-8 grid grid-cols-4 gap-8">
            <div
              v-for="i in 4"
              :key="`ceiling-line-${i}`"
              class="h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"
              :style="{ animationDelay: `${i * 0.5}s` }"
            />
          </div>
        </div>
      </div>

      <!-- Floor grid pattern -->
      <div
        class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-slate-900/80 to-transparent"
      >
        <div class="absolute inset-0 opacity-60">
          <div class="grid grid-cols-32 gap-1 p-6 h-full items-end">
            <div
              v-for="i in 128"
              :key="`floor-${i}`"
              class="w-1 rounded-t-full"
              :class="
                i % 6 === 0
                  ? 'bg-gradient-to-t from-cyan-400/40 to-transparent'
                  : i % 6 === 1
                  ? 'bg-gradient-to-t from-emerald-400/35 to-transparent'
                  : i % 6 === 2
                  ? 'bg-gradient-to-t from-purple-400/30 to-transparent'
                  : 'bg-gradient-to-t from-slate-400/25 to-transparent'
              "
              :style="{
                height: `${8 + Math.random() * 16}px`,
                animationDelay: `${i * 0.025}s`,
                animation: 'pulse 3s ease-in-out infinite',
              }"
            />
          </div>
          <!-- Floor connection grid -->
          <div class="absolute bottom-8 left-8 right-8 space-y-2">
            <div
              class="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            ></div>
            <div
              class="h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
            ></div>
            <div
              class="h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating energy particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="i in 15"
        :key="`particle-${i}`"
        class="absolute w-1 h-1 rounded-full animate-pulse"
        :class="
          i % 3 === 0
            ? 'bg-cyan-400/60'
            : i % 3 === 1
            ? 'bg-purple-400/50'
            : 'bg-emerald-400/55'
        "
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.3}s`,
          animation: `float-${i % 3} ${
            4 + Math.random() * 2
          }s ease-in-out infinite`,
        }"
      />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative">
      <div class="text-center mb-20">
        <h2
          class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent font-mono drop-shadow-[0_0_40px_rgba(34,211,238,0.5)]"
        >
          &gt; CRYSTAL_VAULT
        </h2>
        <p
          class="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Enter the quantum chamber where crystallized achievements rest upon
          illuminated pedestals of mastery.
        </p>
        <div
          class="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 rounded-full text-cyan-300 backdrop-blur-sm animate-pulse"
        >
          &lt; Chamber access granted &gt;
        </div>
      </div>

      <!-- Navigation Controls -->
      <!-- <div class="flex justify-center items-center space-x-8 mb-16">
        <button
          @click="scrollLeft"
          class="group p-4 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-cyan-500/40 rounded-full text-cyan-400 hover:from-cyan-500/20 hover:to-emerald-500/20 hover:border-cyan-300 transition-all duration-500 backdrop-blur-md shadow-lg hover:shadow-cyan-400/25"
        >
          <svg
            class="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div
          class="text-cyan-300 font-mono text-sm px-6 py-2 bg-black/40 border border-cyan-400/30 rounded-full backdrop-blur-sm"
        >
          [ Navigate Chamber ]
        </div>
        <button
          @click="scrollRight"
          class="group p-4 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-cyan-500/40 rounded-full text-cyan-400 hover:from-cyan-500/20 hover:to-emerald-500/20 hover:border-cyan-300 transition-all duration-500 backdrop-blur-md shadow-lg hover:shadow-cyan-400/25"
        >
          <svg
            class="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div> -->

      <!-- Crystal Chamber Layout -->
      <div class="relative">
        <div
          ref="scrollContainer"
          class="grid grid-cols-2 md:grid-cols-4 gap-12 overflow-x-auto scrollbar-hide pb-8"
          style="scrollbar-width: none; -ms-overflow-style: none"
        >
          <div
            v-for="(project, index) in projects"
            :key="index"
            @click="openModal(project)"
            class="group relative cursor-pointer"
          >
            <!-- Illuminated Pedestal Base -->
            <div class="relative">
              <!-- Main pedestal structure -->
              <div
                class="relative w-full h-32 bg-gradient-to-t from-slate-700 via-slate-600 to-slate-500 rounded-t-lg shadow-2xl"
              >
                <!-- Glowing edges -->
                <div
                  :class="`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 rounded-t-lg`"
                />
                <div
                  :class="`absolute -inset-0.5 bg-gradient-to-t ${project.color} opacity-30 rounded-t-lg blur-sm`"
                />

                <!-- Tech panel details -->
                <div
                  class="absolute inset-2 bg-slate-800/80 rounded border border-slate-600/50"
                >
                  <div
                    class="absolute top-2 left-2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"
                  />
                  <div
                    class="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    style="animation-delay: 0.5s"
                  />
                  <div
                    class="absolute bottom-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
                  />
                </div>

                <!-- Energy conduits -->
                <div
                  class="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                >
                  <div
                    class="w-8 h-4 bg-gradient-to-t from-cyan-400/60 to-transparent rounded-t-full"
                  />
                  <div
                    class="absolute inset-0 w-8 h-4 bg-gradient-to-t from-emerald-400/40 to-transparent rounded-t-full animate-pulse"
                  />
                </div>
              </div>

              <!-- Pedestal base -->
              <div
                class="w-full h-8 bg-gradient-to-b from-slate-600 to-slate-800 shadow-xl"
              />
              <div
                class="w-11/12 mx-auto h-4 bg-gradient-to-b from-slate-700 to-slate-900 shadow-lg"
              />
              <div class="w-10/12 mx-auto h-2 bg-slate-900 shadow-inner" />
            </div>

            <!-- Crystal positioned on pedestal -->
            <div class="absolute -top-16 left-1/2 transform -translate-x-1/2">
              <div
                :class="`relative w-20 h-24 bg-gradient-to-t ${project.color} rounded-t-full rounded-b-lg ${project.glowColor} shadow-2xl transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 backdrop-blur-sm`"
              >
                <!-- Crystal inner effects -->
                <div
                  class="absolute inset-1 bg-gradient-to-t from-black/60 via-transparent to-white/20 rounded-t-full rounded-b-lg"
                />
                <div
                  class="absolute inset-2 bg-gradient-to-t from-black/40 via-transparent to-white/10 rounded-t-full rounded-b-lg"
                />

                <!-- Crystal core -->
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <div class="w-8 h-8 bg-white/40 rounded-full animate-pulse" />
                  <div
                    class="absolute inset-1 w-6 h-6 bg-white/60 rounded-full animate-ping"
                  />
                </div>

                <!-- Energy lines -->
                <div class="absolute inset-0 opacity-60">
                  <div
                    v-for="i in 6"
                    :key="`energy-line-${i}`"
                    class="absolute bg-gradient-to-t from-white/40 to-transparent rounded-full animate-pulse"
                    :style="{
                      left: `${40 + Math.sin(i) * 20}%`,
                      top: `${20 + i * 10}%`,
                      width: '2px',
                      height: `${10 + i * 5}%`,
                      transform: 'translateX(-50%)',
                      animationDelay: `${i * 0.2}s`,
                    }"
                  />
                </div>

                <!-- Hover aura -->
                <div
                  :class="`absolute -inset-4 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-40 transition-all duration-700 blur-lg rounded-full`"
                />
              </div>
            </div>

            <!-- Project info hologram -->
            <div
              class="absolute -bottom-8 left-0 right-0 p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-md rounded-lg border border-cyan-400/20"
            >
              <h3
                class="text-white font-bold text-sm font-mono mb-1 text-center"
              >
                {{ project.codename }}
              </h3>
              <p class="text-gray-300 text-xs text-center mb-2">
                {{ project.title }}
              </p>
              <div class="flex items-center justify-between text-xs">
                <div
                  class="text-cyan-300 uppercase tracking-wider font-semibold"
                >
                  {{ project.role }}
                </div>
                <div class="text-emerald-300 font-mono">
                  {{ project.year }}
                </div>
              </div>
            </div>

            <!-- Connecting energy beams between pedestals -->
            <div
              v-if="index < projects.length - 1 && index % 2 === 0"
              class="absolute top-16 -right-6 w-12 h-px bg-gradient-to-r from-cyan-400/40 via-emerald-400/60 to-cyan-400/40 animate-pulse hidden md:block"
            />
          </div>
        </div>
      </div>

      <!-- Chamber floor effect -->
      <div class="mt-16 space-y-2">
        <div
          class="h-px bg-gradient-to-r from-transparent via-cyan-500/70 to-transparent"
        />
        <div
          class="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"
        />
        <div
          class="h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"
        />
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @click="closeModal"
    >
      <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        class="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black/95 via-slate-900/95 to-black/95 border border-cyan-500/30 backdrop-blur-xl shadow-2xl rounded-2xl"
        @click.stop
      >
        <div class="p-8">
          <div class="flex justify-between items-start mb-6">
            <h3
              class="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent font-mono"
            >
              [ {{ selectedProject.codename }} ] — CRYSTAL_SPECS
            </h3>
            <button
              @click="closeModal"
              class="text-gray-400 hover:text-white transition-colors p-2"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="space-y-8 text-gray-300">
            <div
              class="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/30"
            >
              <h4
                class="text-cyan-300 font-semibold mb-3 uppercase tracking-wider text-lg flex items-center gap-2"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Mission Brief
              </h4>
              <p class="leading-relaxed text-lg">
                {{ selectedProject.description }}
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div
                class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/30"
              >
                <h4
                  class="text-cyan-300 font-semibold mb-4 uppercase tracking-wider flex items-center gap-2"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Tech Arsenal
                </h4>
                <div class="flex flex-wrap gap-3">
                  <span
                    v-for="(tech, techIndex) in selectedProject.stack"
                    :key="techIndex"
                    class="px-4 py-2 bg-gradient-to-r from-slate-700/80 to-slate-600/80 text-emerald-300 rounded-lg text-sm border border-slate-500/50 font-mono shadow-lg hover:scale-105 transition-transform"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div
                class="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600/30"
              >
                <h4
                  class="text-cyan-300 font-semibold mb-4 uppercase tracking-wider"
                >
                  Operative Role
                </h4>
                <p class="text-emerald-300 font-bold text-lg">
                  {{ selectedProject.role }}
                </p>
                <div class="mt-3 text-sm text-gray-400">
                  Mission Year:
                  <span class="text-cyan-300 font-mono">{{
                    selectedProject.year
                  }}</span>
                </div>
              </div>
            </div>

            <div
              class="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-6 rounded-xl border border-orange-500/30"
            >
              <h4
                class="text-orange-300 font-semibold mb-3 uppercase tracking-wider text-lg"
              >
                Primary Challenge
              </h4>
              <p class="leading-relaxed italic text-gray-300 text-lg">
                {{ selectedProject.challenges }}
              </p>
            </div>

            <div class="flex space-x-4 pt-6">
              <a
                v-if="selectedProject.liveUrl"
                :href="selectedProject.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-xl text-white font-semibold hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 hover:scale-105"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span>Deploy Site</span>
              </a>
              <a
                v-if="selectedProject.githubUrl"
                :href="selectedProject.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center space-x-3 px-8 py-4 border-2 border-slate-500 rounded-xl text-gray-300 hover:text-white hover:border-slate-400 hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-105"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const scrollContainer = ref(null);
const selectedProject = ref(null);

const projects = [
  {
    codename: "SkySavvy",
    title: "Weather Oracle",
    stack: ["Vue 3", "ApexCharts", "REST APIs", "Tailwind"],
    role: "Frontend Architect",
    description:
      "Advanced weather analytics with predictive modeling and interactive visualizations that adapt to real-time atmospheric data patterns.",
    challenges:
      "Implementing real-time data synchronization with multiple weather APIs while maintaining smooth chart animations",
    color: "from-blue-400 to-cyan-500",
    glowColor: "shadow-blue-500/50",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    codename: "TvFlix",
    title: "UI Replica Mission",
    stack: ["React", "Styled Components", "TMDB API", "Firebase"],
    role: "Interface Engineer",
    description:
      "Pixel-perfect Netflix clone with advanced streaming interface, user authentication, and personalized content recommendations.",
    challenges:
      "Recreating Netflix's complex UI animations and implementing efficient video streaming protocols",
    color: "from-red-500 to-orange-600",
    glowColor: "shadow-red-500/50",
    year: "2023",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    codename: "EmotiScan",
    title: "Neural Scanner",
    stack: ["Python", "TensorFlow", "OpenCV", "FastAPI"],
    role: "AI Developer",
    description:
      "Real-time emotion detection system using computer vision and machine learning for human-computer interaction.",
    challenges:
      "Training accurate emotion recognition models while ensuring real-time processing performance",
    color: "from-purple-500 to-pink-600",
    glowColor: "shadow-purple-500/50",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    codename: "CodeVault",
    title: "Developer Matrix",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Supabase"],
    role: "Full Stack Engineer",
    description:
      "Dynamic portfolio generator with AI-powered content optimization and real-time collaboration features.",
    challenges:
      "Building a flexible component system that adapts to different developer profiles and project types",
    color: "from-emerald-400 to-teal-500",
    glowColor: "shadow-emerald-500/50",
    year: "2024",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -400, behavior: "smooth" });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 400, behavior: "smooth" });
  }
};

const openModal = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedProject.value = null;
  document.body.style.overflow = "auto";
};

onMounted(() => {
  // Clean up on unmount
  return () => {
    document.body.style.overflow = "auto";
  };
});
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.transition-bg {
  transition: background-color 1s ease-in-out;
}

/* Floating particle animations */
@keyframes float-0 {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) translateX(10px);
    opacity: 1;
  }
}

@keyframes float-1 {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-15px) translateX(-8px);
    opacity: 0.9;
  }
}

@keyframes float-2 {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-25px) translateX(5px);
    opacity: 1;
  }
}

/* Enhanced pulse animation */
@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
}

/* Tech line animations */
@keyframes techPulse {
  0%,
  100% {
    opacity: 0.2;
    box-shadow: 0 0 5px currentColor;
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 15px currentColor;
  }
}

/* Aurora remnant animation */
@keyframes auroraRemnant {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

/* Apply aurora remnant animation */
.transition-bg .absolute.inset-0:first-child {
  animation: auroraRemnant 8s ease-in-out infinite;
}
</style>
