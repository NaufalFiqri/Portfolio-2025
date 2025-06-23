<template>
  <section id="projects" class="relative min-h-screen py-32 overflow-hidden">
    <!-- Top Gradient to Match SkillConstellation Bottom -->
    <div
      class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/50 via-slate-900/30 to-transparent z-5 pointer-events-none"
    ></div>

    <!-- Deep Aurora Vault Atmosphere -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div
        class="absolute inset-0 opacity-30"
        style="
          background: radial-gradient(
              ellipse at 30% 20%,
              #00ffd0 0%,
              transparent 60%
            ),
            radial-gradient(ellipse at 70% 80%, #7f5cff 0%, transparent 70%),
            radial-gradient(ellipse at 50% 50%, #0d9488 0%, transparent 40%);
          animation: vaultAura 25s ease-in-out infinite alternate;
        "
      ></div>
    </div>

    <!-- Vault Opening Light Beam -->
    <div v-if="isVaultOpening" class="fixed inset-0 pointer-events-none z-40">
      <!-- Main light beam -->
      <div
        class="absolute bg-gradient-to-t from-transparent via-cyan-300/30 to-cyan-100/40"
        :style="{
          left: `${beamOrigin.x - 25}px`,
          top: `${beamOrigin.y}px`,
          width: '50px',
          height: `${window.innerHeight - beamOrigin.y}px`,
          transformOrigin: 'center top',
          animation: 'beamExpand 0.6s ease-out forwards',
        }"
      />
      <!-- Beam particles -->
      <div
        v-for="i in 8"
        :key="`beam-particle-${i}`"
        class="absolute w-0.5 h-0.5 bg-cyan-300/80 rounded-full"
        :style="{
          left: `${beamOrigin.x + (Math.random() - 0.5) * 40}px`,
          top: `${beamOrigin.y + Math.random() * 100}px`,
          animation: `beamParticle 0.8s ease-out forwards`,
          animationDelay: `${Math.random() * 0.3}s`,
        }"
      />
      <!-- Expanding energy ring -->
      <div
        class="absolute border border-cyan-400/40 rounded-full"
        :style="{
          left: `${beamOrigin.x - 15}px`,
          top: `${beamOrigin.y - 15}px`,
          width: '30px',
          height: '30px',
          animation: 'energyRing 0.8s ease-out forwards',
        }"
      />
    </div>

    <!-- Vault Depth Layers -->
    <div class="absolute inset-0 pointer-events-none z-5">
      <!-- Background tech mesh -->
      <div class="absolute inset-0 opacity-20">
        <div
          v-for="i in 12"
          :key="`mesh-${i}`"
          class="absolute border border-cyan-400/20 rounded-lg"
          :style="{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            width: `${50 + Math.random() * 100}px`,
            height: `${30 + Math.random() * 60}px`,
            animationDelay: `${i * 0.4}s`,
            animation: 'meshFloat 8s ease-in-out infinite alternate',
          }"
        />
      </div>
    </div>

    <!-- Scanner Lines -->
    <div class="absolute inset-0 pointer-events-none z-10">
      <div
        v-for="i in 3"
        :key="`scanner-${i}`"
        class="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        :style="{
          top: `${20 + i * 30}%`,
          animationDelay: `${i * 2}s`,
          animation: 'scannerSweep 6s ease-in-out infinite',
        }"
      />
    </div>

    <!-- Data Streams -->
    <div class="absolute inset-0 pointer-events-none z-10">
      <div
        v-for="i in 8"
        :key="`stream-${i}`"
        class="absolute w-0.5 bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent"
        :style="{
          left: `${10 + i * 12}%`,
          height: '100%',
          animationDelay: `${i * 0.8}s`,
          animation: 'dataStream 4s ease-in-out infinite',
        }"
      />
    </div>

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
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-15">
      <div
        v-for="i in 25"
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

    <!-- Holographic Interface Elements -->
    <div class="absolute inset-0 pointer-events-none z-20">
      <!-- Corner HUD elements -->
      <div
        class="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-cyan-400/40 opacity-60"
      >
        <div
          class="absolute top-2 left-2 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"
        ></div>
        <div class="absolute top-4 left-4 text-xs text-cyan-400/70 font-mono">
          VAULT
        </div>
      </div>
      <div
        class="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-emerald-400/40 opacity-60"
      >
        <div
          class="absolute top-2 right-2 w-2 h-2 bg-emerald-400/60 rounded-full animate-pulse"
          style="animation-delay: 0.5s"
        ></div>
        <div
          class="absolute top-4 right-4 text-xs text-emerald-400/70 font-mono"
        >
          ACTIVE
        </div>
      </div>
      <div
        class="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-purple-400/40 opacity-60"
      >
        <div
          class="absolute bottom-2 left-2 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute bottom-4 left-4 text-xs text-purple-400/70 font-mono"
        >
          SCAN
        </div>
      </div>
      <div
        class="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-cyan-400/40 opacity-60"
      >
        <div
          class="absolute bottom-2 right-2 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"
          style="animation-delay: 1.5s"
        ></div>
        <div
          class="absolute bottom-4 right-4 text-xs text-cyan-400/70 font-mono"
        >
          SYNC
        </div>
      </div>
    </div>

    <!-- Atmospheric Noise -->
    <div
      class="absolute inset-0 opacity-10 pointer-events-none z-10"
      style="
        background: url('https://www.transparenttextures.com/patterns/noise.png');
      "
    ></div>

    <div class="max-w-7xl mx-auto px-6 relative z-30">
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
            @click="triggerVaultSequence(project, $event, index)"
            class="group relative cursor-pointer vault-item"
            :ref="
              (el) => {
                if (el) vaultItems[index] = el;
              }
            "
          >
            <!-- Illuminated Pedestal Base -->
            <div class="relative pedestal-container">
              <!-- Main pedestal structure -->
              <div
                class="relative w-full h-32 bg-gradient-to-t from-slate-700 via-slate-600 to-slate-500 rounded-t-lg shadow-2xl pedestal-base"
              >
                <!-- Glowing edges -->
                <div
                  :class="`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 rounded-t-lg glow-edge`"
                />
                <div
                  :class="`absolute -inset-0.5 bg-gradient-to-t ${project.color} opacity-30 rounded-t-lg blur-sm glow-outer`"
                />

                <!-- Tech panel details -->
                <div
                  class="absolute inset-2 bg-slate-800/80 rounded border border-slate-600/50 tech-panel"
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
            <div
              class="absolute -top-16 left-1/2 transform -translate-x-1/2 crystal-container"
            >
              <div
                :class="`relative w-20 h-24 bg-gradient-to-t ${project.color} rounded-t-full rounded-b-lg ${project.glowColor} shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-2 backdrop-blur-sm crystal-core`"
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
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="closeModal"
      >
        <div
          class="absolute inset-0 bg-black/80 backdrop-blur-sm modal-backdrop"
        />
        <div
          class="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black/95 via-slate-900/95 to-black/95 border border-cyan-500/30 backdrop-blur-xl shadow-2xl rounded-2xl modal-content"
          @click.stop
          :style="{
            transformOrigin: `${modalOrigin.x}px ${modalOrigin.y}px`,
          }"
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
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const scrollContainer = ref(null);
const selectedProject = ref(null);
const isVaultOpening = ref(false);
const clickedIndex = ref(-1);
const beamOrigin = ref({ x: 0, y: 0 });
const modalOrigin = ref({ x: 0, y: 0 });
const vaultItems = ref([]);

const projects = [
  {
    codename: "SkySavvy",
    title: "Weather Oracle",
    stack: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
    role: "Frontend Architect",
    description:
      "A clean and intuitive weather dashboard that auto-detects your location or allows manual searches, presenting real-time meteorological data using the OpenWeatherMap API.",
    challenges:
      "Designing clear and informative visualizations for varied weather metrics such as wind direction, pressure trends, and humidity levels without overwhelming the user interface.",
    color: "from-blue-400 to-cyan-500",
    glowColor: "shadow-blue-500/50",
    year: "2024",
    liveUrl: "https://sky-savvy.netlify.app/",
    githubUrl: "https://github.com/NaufalFiqri/prototype-3",
  },
  {
    codename: "TvFlix",
    title: "UI Replica Mission",
    stack: ["JavaScript", "HTML", "CSS", "TMDB API"],
    role: "Interface Engineer",
    description:
      "A sleek and responsive movie discovery app that lets users browse, search, and explore the latest films using real-time data from The Movie Database (TMDb) API.",
    challenges:
      "The main challenge was that it was my first time integrating an API into a project, so I had to learn how to fetch and handle external data while building a functional and responsive interface from scratch.",
    color: "from-red-500 to-orange-600",
    glowColor: "shadow-red-500/50",
    year: "2023",
    liveUrl: "https://flixxer.netlify.app/",
    githubUrl: "https://github.com/NaufalFiqri/Netflix-Clone",
  },
  {
    codename: "CipherCart",
    title: "E-commerce Website",
    stack: ["JavaScript", "HTML", "CSS"],
    role: "Frontend Cadet",
    description:
      "A static, visually polished e‑commerce mockup showcasing product listings, cart interactions, and responsive layout for a futuristic shopping experience.",
    challenges:
      "Recreating dynamic cart and product behaviors using only static markup and styles while ensuring responsive, immersive UI fidelity across devices.",
    color: "from-purple-500 to-pink-600",
    glowColor: "shadow-purple-500/50",
    year: "2022",
    liveUrl: "https://trial-e-commerce.netlify.app/",
    githubUrl: "https://github.com/NaufalFiqri/E-commerce_website",
  },
  {
    codename: "NeonMock",
    title: "Treact Clone",
    stack: ["HTML", "CSS"],
    role: "Frontend Recruit",
    description:
      "A responsive landing page clone of Treact to explore modular UI design and layout structuring.",
    challenges:
      "Creating reusable components while keeping styles consistent and the layout easily maintainable.",
    color: "from-emerald-400 to-teal-500",
    glowColor: "shadow-emerald-500/50",
    year: "2022",
    liveUrl: "https://treact-dupe.netlify.app/",
    githubUrl: "https://github.com/NaufalFiqri/First_Website",
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

const triggerVaultSequence = (project, event, index) => {
  // STEP 1: IMMEDIATE VISUAL RESPONSE - Only glow effects
  const vaultElement = vaultItems.value[index];
  if (vaultElement) {
    // Immediate glow effects only
    const glowEdge = vaultElement.querySelector(".glow-edge");
    const glowOuter = vaultElement.querySelector(".glow-outer");
    const techPanel = vaultElement.querySelector(".tech-panel");

    if (glowEdge) glowEdge.style.opacity = "0.8";
    if (glowOuter) glowOuter.style.opacity = "1";
    if (techPanel) {
      techPanel.style.boxShadow = "inset 0 0 20px rgba(34, 211, 238, 0.4)";
      techPanel.style.borderColor = "rgba(34, 211, 238, 0.8)";
    }
  }

  // STEP 2: Light beam effect
  const rect = event.currentTarget.getBoundingClientRect();
  const crystalX = rect.left + rect.width / 2;
  const crystalY = rect.top + rect.height / 2;

  beamOrigin.value = {
    x: Math.max(0, Math.min(crystalX, window.innerWidth)),
    y: Math.max(0, Math.min(crystalY, window.innerHeight)),
  };
  modalOrigin.value = { x: crystalX, y: crystalY };

  isVaultOpening.value = true;
  clickedIndex.value = index;

  // STEP 3: Modal after 1 second
  setTimeout(() => {
    selectedProject.value = project;
    document.body.style.overflow = "hidden";
  }, 1000);

  // STEP 4: Reset effects
  setTimeout(() => {
    isVaultOpening.value = false;
    if (vaultElement) {
      const glowEdge = vaultElement.querySelector(".glow-edge");
      const glowOuter = vaultElement.querySelector(".glow-outer");
      const techPanel = vaultElement.querySelector(".tech-panel");

      if (glowEdge) glowEdge.style.opacity = "";
      if (glowOuter) glowOuter.style.opacity = "";
      if (techPanel) {
        techPanel.style.boxShadow = "";
        techPanel.style.borderColor = "";
      }
    }
  }, 1500);
};

const closeModal = () => {
  selectedProject.value = null;
  clickedIndex.value = -1;
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

/* Custom Futuristic Scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: linear-gradient(to bottom, #1e293b, #0f172a);
  border-radius: 6px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #22d3ee, #059669, #22d3ee);
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.3),
    inset 0 0 6px rgba(34, 211, 238, 0.2);
  border: 1px solid rgba(34, 211, 238, 0.3);
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #67e8f9, #10b981, #67e8f9);
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.5),
    inset 0 0 8px rgba(34, 211, 238, 0.3);
  border: 1px solid rgba(34, 211, 238, 0.5);
}

::-webkit-scrollbar-thumb:active {
  background: linear-gradient(to bottom, #06b6d4, #059669, #06b6d4);
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.7),
    inset 0 0 10px rgba(34, 211, 238, 0.4);
}

::-webkit-scrollbar-corner {
  background: #0f172a;
}

/* Firefox scrollbar styling */
* {
  scrollbar-width: thin;
  scrollbar-color: #22d3ee #1e293b;
}

/* Modal animations */
.modal-backdrop {
  animation: backdropFade 0.6s ease-out;
}

.modal-content {
  animation: modalEmerge 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Vault opening animations */
.vault-opening {
  animation: vaultShake 0.8s ease-out;
}

.vault-pedestal-opening {
  animation: pedestalOpen 0.8s ease-out;
}

.vault-panel-opening {
  animation: panelGlow 0.8s ease-out;
}

/* Modal emergence animations */
@keyframes backdropFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes modalEmerge {
  0% {
    transform: scale(0.1) translateY(50px);
    opacity: 0;
    filter: blur(10px);
  }
  60% {
    transform: scale(1.05) translateY(-10px);
    opacity: 0.8;
    filter: blur(2px);
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
    filter: blur(0);
  }
}

/* Vault opening keyframes */
@keyframes vaultShake {
  0%,
  100% {
    transform: translateY(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateY(-2px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateY(2px);
  }
}

@keyframes pedestalOpen {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.95) scaleX(1.02);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
}

@keyframes panelGlow {
  0% {
    box-shadow: inset 0 0 0 rgba(34, 211, 238, 0);
    border-color: rgba(100, 116, 139, 0.5);
  }
  50% {
    box-shadow: inset 0 0 20px rgba(34, 211, 238, 0.3);
    border-color: rgba(34, 211, 238, 0.8);
  }
  100% {
    box-shadow: inset 0 0 0 rgba(34, 211, 238, 0);
    border-color: rgba(100, 116, 139, 0.5);
  }
}

/* Light beam animations */
@keyframes beamExpand {
  0% {
    transform: scaleY(0) scaleX(0.8);
    opacity: 0;
  }
  30% {
    transform: scaleY(0.3) scaleX(1);
    opacity: 0.6;
  }
  100% {
    transform: scaleY(1) scaleX(1);
    opacity: 0.4;
  }
}

@keyframes beamParticle {
  0% {
    transform: translateY(0) scale(0);
    opacity: 0;
  }
  30% {
    transform: translateY(-30px) scale(1);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-80px) scale(0);
    opacity: 0;
  }
}

@keyframes energyRing {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

/* Vault atmosphere animation */
@keyframes vaultAura {
  0% {
    background-position: 30% 20%, 70% 80%, 50% 50%;
    filter: hue-rotate(0deg);
  }
  25% {
    background-position: 35% 25%, 75% 85%, 45% 45%;
    filter: hue-rotate(5deg);
  }
  50% {
    background-position: 40% 30%, 80% 90%, 55% 55%;
    filter: hue-rotate(10deg);
  }
  75% {
    background-position: 35% 25%, 75% 85%, 50% 50%;
    filter: hue-rotate(5deg);
  }
  100% {
    background-position: 30% 20%, 70% 80%, 45% 45%;
    filter: hue-rotate(0deg);
  }
}

/* Scanner line animation */
@keyframes scannerSweep {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

/* Data stream animation */
@keyframes dataStream {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

/* Tech mesh floating animation */
@keyframes meshFloat {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-10px) rotate(1deg);
    opacity: 0.6;
  }
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

/* Immediate vault animations - no delays */
@keyframes vaultShakeImmediate {
  0% {
    transform: translateY(0) translateX(0);
  }
  10% {
    transform: translateY(-4px) translateX(2px);
  }
  20% {
    transform: translateY(4px) translateX(-2px);
  }
  30% {
    transform: translateY(-3px) translateX(1px);
  }
  40% {
    transform: translateY(3px) translateX(-1px);
  }
  50% {
    transform: translateY(-2px) translateX(0);
  }
  60% {
    transform: translateY(2px) translateX(0);
  }
  70% {
    transform: translateY(-1px) translateX(0);
  }
  80% {
    transform: translateY(1px) translateX(0);
  }
  90% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

/* Smooth transitions for hover effects only */
.crystal-core {
  transition: transform 0.3s ease;
}

.group:hover .crystal-core {
  transform: scale(1.1) translateY(-4px) !important;
}
</style>
