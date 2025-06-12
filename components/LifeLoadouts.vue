<template>
  <section
    id="loadouts"
    ref="sectionRef"
    class="relative py-16 bg-gradient-to-b from-slate-900 to-black overflow-hidden"
  >
    <!-- Enhanced Background with Scanlines -->
    <div class="absolute inset-0">
      <!-- Animated scanlines -->
      <div class="absolute inset-0 opacity-10">
        <div
          v-for="i in 50"
          :key="`scanline-${i}`"
          class="absolute w-full h-px bg-cyan-400 animate-pulse"
          :style="{
            top: `${i * 2}%`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '3s',
          }"
        />
      </div>

      <!-- Grid overlay -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-12 gap-4 h-full">
          <div
            v-for="i in 144"
            :key="`grid-${i}`"
            class="border border-cyan-400/20"
          />
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center mb-8">
        <h2
          class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-orbitron"
        >
          &gt; LIFE_LOADOUTS.SYS
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Central hub connects to evolved traits, powering development
          mastery...
        </p>

        <!-- Mode Selector -->
        <!-- <div class="mt-8 flex justify-center">
          <div
            class="flex space-x-2 p-2 bg-black/60 border border-cyan-400/30 rounded-full backdrop-blur-sm"
          >
            <button
              v-for="(mode, key) in modes"
              :key="key"
              @click="selectedMode = key"
              :class="[
                'px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300',
                selectedMode === key
                  ? `bg-${mode.color}-500/20 text-${mode.color}-300 border border-${mode.color}-400/40`
                  : 'text-gray-400 hover:text-white',
              ]"
            >
              {{ mode.title }}
            </button>
          </div>
        </div> -->
      </div>

      <!-- Main Content Layout: Character Profile Left, Loadout Cards Right -->
      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Enhanced Central Character Profile - Left Side -->
        <div class="lg:w-1/2">
          <div
            class="relative w-full h-[800px] cursor-pointer transition-all duration-700 preserve-3d"
            @click="toggleCharacterFlip"
          >
            <!-- Front Side - Character Profile -->
            <div
              :class="[
                'absolute inset-0 w-full h-full p-8 bg-black/90 backdrop-blur-lg border-2 border-cyan-400/50 rounded-3xl shadow-2xl shadow-cyan-400/20 backface-hidden transition-transform duration-700',
                flippedCharacter ? 'rotate-y-180' : 'rotate-y-0',
              ]"
            >
              <!-- Cyberpunk Level Indicator - Top Left -->
              <div
                class="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-lg backdrop-blur-sm"
              >
                <span class="text-cyan-400 font-mono text-sm font-bold"
                  >LVL.{{ biodata.level }}</span
                >
              </div>

              <!-- Holographic Scanning Effect -->
              <div class="absolute inset-0 rounded-3xl overflow-hidden">
                <div
                  class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
                ></div>
                <div
                  class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"
                  style="animation-delay: 1s"
                ></div>
              </div>

              <!-- AI Companion Module -->
              <div
                class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse"
              >
                <Icon name="lucide:cpu" class="w-8 h-8 text-white" />
              </div>

              <!-- Character Profile Content -->
              <div class="relative z-10 text-center">
                <div class="mb-6">
                  <h3 class="text-3xl font-bold text-white mb-2">
                    {{ biodata.name }}
                  </h3>
                  <p class="text-cyan-400 text-xl font-semibold mb-1">
                    {{ biodata.class }}
                  </p>
                  <p class="text-emerald-400 text-sm mb-4">
                    {{ biodata.experience }}
                  </p>

                  <!-- Role Dropdown -->
                  <div class="relative inline-block">
                    <button
                      @click.stop="showRoleDropdown = !showRoleDropdown"
                      class="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 rounded-full text-sm text-emerald-300 hover:bg-emerald-400/30 transition-all"
                    >
                      <span>Central Processing Unit</span>
                      <Icon name="lucide:chevron-down" class="w-4 h-4" />
                    </button>

                    <div
                      v-if="showRoleDropdown"
                      class="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-black/90 border border-cyan-400/30 rounded-lg backdrop-blur-sm z-20"
                    >
                      <div
                        v-for="(role, index) in biodata.alternateRoles"
                        :key="index"
                        class="px-4 py-2 text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all"
                      >
                        {{ role }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- RPG Stats Block -->
                <div
                  class="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                >
                  <h4
                    class="text-cyan-300 font-semibold mb-4 text-sm uppercase tracking-wider"
                  >
                    Endurance Protocol Stats
                  </h4>
                  <div
                    v-for="(value, stat) in biodata.stats"
                    :key="stat"
                    class="flex items-center justify-between mb-2"
                  >
                    <span class="text-gray-300 capitalize text-sm"
                      >{{ stat }}:</span
                    >
                    <div class="flex items-center space-x-2">
                      <span class="text-cyan-400 font-bold text-sm w-8">{{
                        value
                      }}</span>
                      <div class="flex">
                        <span
                          v-for="i in 10"
                          :key="i"
                          :class="[
                            'inline-block w-3 h-3 mr-1 rounded-sm',
                            i <= value / 10 ? 'bg-cyan-400' : 'bg-gray-700',
                          ]"
                        >
                          ▮
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Character Info Grid -->
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div
                    class="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  >
                    <div class="text-sm text-gray-400">Projects</div>
                    <div class="text-emerald-400 font-bold">
                      {{ biodata.projectsCompleted }}
                    </div>
                  </div>
                  <div
                    class="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                  >
                    <div class="text-sm text-gray-400">Rank</div>
                    <div class="text-cyan-400 font-bold">
                      {{ biodata.rank }}
                    </div>
                  </div>
                </div>

                <!-- Achievements -->
                <div class="mb-6">
                  <h4
                    class="text-cyan-300 font-semibold mb-3 text-sm uppercase tracking-wider"
                  >
                    Achievements
                  </h4>
                  <div class="space-y-2">
                    <div
                      v-for="achievement in biodata.achievements"
                      :key="achievement"
                      class="flex items-center space-x-2 text-sm text-gray-300"
                    >
                      <span class="text-green-400">✓</span>
                      <span>{{ achievement }}</span>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex space-x-4 mt-6">
                  <button
                    @click.stop="toggleCharacterFlip"
                    class="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-xl text-white font-semibold hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 hover:scale-105"
                  >
                    <Icon name="lucide:briefcase" class="w-4 h-4" />
                    <span>Work Experience</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Back Side - Work Experience -->
            <div
              :class="[
                'absolute inset-0 w-full h-full p-8 bg-black/90 backdrop-blur-lg border-2 border-cyan-400/50 rounded-3xl shadow-2xl shadow-cyan-400/20 backface-hidden overflow-y-auto transition-transform duration-700',
                flippedCharacter ? 'rotate-y-0' : 'rotate-y-180',
              ]"
            >
              <!-- Holographic Scanning Effect -->
              <div class="absolute inset-0 rounded-3xl overflow-hidden">
                <div
                  class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"
                ></div>
                <div
                  class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"
                  style="animation-delay: 1s"
                ></div>
              </div>

              <!-- Work Experience Tree -->
              <div class="relative z-10">
                <h4
                  class="text-center text-2xl font-bold text-emerald-400 mb-6"
                >
                  Work Experience Tree
                </h4>

                <!-- Experience Timeline -->
                <div class="relative mb-6">
                  <!-- Timeline Line -->
                  <div
                    class="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-purple-400"
                    style="height: calc(100% - 2rem)"
                  ></div>

                  <!-- Experience Items -->
                  <div class="space-y-4">
                    <!-- Current Position -->
                    <div class="relative flex items-start">
                      <div
                        class="absolute left-4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full border-2 border-gray-800"
                      ></div>
                      <div
                        class="ml-12 p-3 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/30 rounded-lg backdrop-blur-sm"
                      >
                        <div class="flex items-center justify-between mb-1">
                          <h5 class="text-cyan-300 font-semibold text-sm">
                            Full-Stack Developer
                          </h5>
                          <span class="text-xs text-emerald-400 font-mono"
                            >2022-Present</span
                          >
                        </div>
                        <p class="text-gray-400 text-xs mb-1">
                          Freelance & Personal Projects
                        </p>
                        <div class="flex flex-wrap gap-1 mt-2">
                          <span
                            class="px-2 py-1 bg-cyan-400/20 text-cyan-300 rounded text-xs font-mono"
                            >React</span
                          >
                          <span
                            class="px-2 py-1 bg-emerald-400/20 text-emerald-300 rounded text-xs font-mono"
                            >Vue.js</span
                          >
                          <span
                            class="px-2 py-1 bg-purple-400/20 text-purple-300 rounded text-xs font-mono"
                            >Node.js</span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Previous Position -->
                    <div class="relative flex items-start">
                      <div
                        class="absolute left-4 w-4 h-4 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full border-2 border-gray-800"
                      ></div>
                      <div
                        class="ml-12 p-3 bg-gradient-to-r from-emerald-400/10 to-blue-400/10 border border-emerald-400/30 rounded-lg backdrop-blur-sm"
                      >
                        <div class="flex items-center justify-between mb-1">
                          <h5 class="text-emerald-300 font-semibold text-sm">
                            Frontend Developer
                          </h5>
                          <span class="text-xs text-blue-400 font-mono"
                            >2021-2022</span
                          >
                        </div>
                        <p class="text-gray-400 text-xs mb-1">Contract Work</p>
                        <div class="flex flex-wrap gap-1 mt-2">
                          <span
                            class="px-2 py-1 bg-emerald-400/20 text-emerald-300 rounded text-xs font-mono"
                            >JavaScript</span
                          >
                          <span
                            class="px-2 py-1 bg-blue-400/20 text-blue-300 rounded text-xs font-mono"
                            >CSS</span
                          >
                          <span
                            class="px-2 py-1 bg-purple-400/20 text-purple-300 rounded text-xs font-mono"
                            >HTML</span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Earlier Position -->
                    <div class="relative flex items-start">
                      <div
                        class="absolute left-4 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-gray-800"
                      ></div>
                      <div
                        class="ml-12 p-3 bg-gradient-to-r from-blue-400/10 to-purple-400/10 border border-blue-400/30 rounded-lg backdrop-blur-sm"
                      >
                        <div class="flex items-center justify-between mb-1">
                          <h5 class="text-blue-300 font-semibold text-sm">
                            Junior Developer
                          </h5>
                          <span class="text-xs text-purple-400 font-mono"
                            >2020-2021</span
                          >
                        </div>
                        <p class="text-gray-400 text-xs mb-1">
                          Learning & Building
                        </p>
                        <div class="flex flex-wrap gap-1 mt-2">
                          <span
                            class="px-2 py-1 bg-blue-400/20 text-blue-300 rounded text-xs font-mono"
                            >Git</span
                          >
                          <span
                            class="px-2 py-1 bg-purple-400/20 text-purple-300 rounded text-xs font-mono"
                            >SQL</span
                          >
                          <span
                            class="px-2 py-1 bg-orange-400/20 text-orange-300 rounded text-xs font-mono"
                            >Python</span
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Skills Evolution -->
                    <div class="relative flex items-start">
                      <div
                        class="absolute left-4 w-4 h-4 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full border-2 border-gray-800"
                      ></div>
                      <div
                        class="ml-12 p-3 bg-gradient-to-r from-purple-400/10 to-orange-400/10 border border-purple-400/30 rounded-lg backdrop-blur-sm"
                      >
                        <div class="flex items-center justify-between mb-1">
                          <h5 class="text-purple-300 font-semibold text-sm">
                            Skill Development
                          </h5>
                          <span class="text-xs text-orange-400 font-mono"
                            >2019-2020</span
                          >
                        </div>
                        <p class="text-gray-400 text-xs mb-1">
                          Self-Taught Learning
                        </p>
                        <div class="flex flex-wrap gap-1 mt-2">
                          <span
                            class="px-2 py-1 bg-purple-400/20 text-purple-300 rounded text-xs font-mono"
                            >Algorithms</span
                          >
                          <span
                            class="px-2 py-1 bg-orange-400/20 text-orange-300 rounded text-xs font-mono"
                            >Data Structures</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Progress Stats -->
                <div class="mt-6 pt-4 border-t border-gray-700/50">
                  <div class="space-y-3">
                    <div
                      class="flex items-center justify-between p-3 bg-cyan-400/10 rounded-lg border border-cyan-400/20"
                    >
                      <div class="flex items-center space-x-3">
                        <Icon
                          name="lucide:calendar"
                          class="w-5 h-5 text-cyan-400"
                        />
                        <div class="text-sm text-gray-300">
                          Years Experience
                        </div>
                      </div>
                      <div class="text-cyan-400 font-bold text-xl">4+</div>
                    </div>
                    <div
                      class="flex items-center justify-between p-3 bg-emerald-400/10 rounded-lg border border-emerald-400/20"
                    >
                      <div class="flex items-center space-x-3">
                        <Icon
                          name="lucide:folder"
                          class="w-5 h-5 text-emerald-400"
                        />
                        <div class="text-sm text-gray-300">Projects</div>
                      </div>
                      <div class="text-emerald-400 font-bold text-xl">15+</div>
                    </div>
                    <div
                      class="flex items-center justify-between p-3 bg-purple-400/10 rounded-lg border border-purple-400/20"
                    >
                      <div class="flex items-center space-x-3">
                        <Icon
                          name="lucide:cpu"
                          class="w-5 h-5 text-purple-400"
                        />
                        <div class="text-sm text-gray-300">Technologies</div>
                      </div>
                      <div class="text-purple-400 font-bold text-xl">10+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Loadout Cards - Right Side (2x2 Grid) -->
        <div class="lg:w-1/2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div
              v-for="(loadout, index) in loadouts"
              :key="loadout.id"
              :class="[
                'relative w-full h-96 cursor-pointer transition-all duration-700 preserve-3d',
                visibleCards.includes(index) ? 'opacity-100' : 'opacity-0',
                index === activeLoadout ? 'scale-105 z-20' : 'scale-100 z-10',
                flippedCards.includes(index) ? 'rotate-y-180' : '',
              ]"
              @mouseenter="handleMouseEnter(index)"
              @mouseleave="hoveredLoadout = null"
              @click="toggleFlip(index)"
            >
              <!-- Front Side -->
              <div
                :class="[
                  'absolute inset-0 w-full h-full rounded-2xl border-2 transition-all duration-300 backface-hidden bg-black/70 backdrop-blur-sm overflow-hidden',
                  index === activeLoadout
                    ? `border-${loadout.accentColor}-400 shadow-2xl shadow-${loadout.accentColor}-400/20`
                    : 'border-gray-700',
                ]"
              >
                <!-- Particle Effects -->
                <div class="absolute inset-0">
                  <component
                    :is="getParticleComponent(loadout.particles)"
                    :accent-color="loadout.accentColor"
                  />
                </div>

                <!-- Quest Completion Ring -->
                <div class="absolute top-4 right-4 w-14 h-14">
                  <svg
                    class="w-full h-full transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      :stroke-dasharray="`${loadout.masteryLevel}, 100`"
                      :class="`text-${loadout.accentColor}-400`"
                    />
                  </svg>
                  <div
                    class="absolute inset-0 flex items-center justify-center text-xs font-bold text-white"
                  >
                    {{ loadout.masteryLevel }}%
                  </div>
                </div>

                <!-- Content -->
                <div
                  class="relative z-10 p-6 h-full flex flex-col justify-between"
                >
                  <div>
                    <div
                      :class="[
                        'text-4xl mb-3 transform transition-transform duration-300',
                        index === activeLoadout ? 'scale-110' : 'scale-100',
                      ]"
                    >
                      {{ loadout.icon }}
                    </div>

                    <h3 class="text-lg font-bold text-white mb-2 leading-tight">
                      {{ loadout.title }}
                    </h3>

                    <p class="text-gray-300 text-sm mb-3 leading-relaxed">
                      {{ loadout.description }}
                    </p>

                    <div
                      :class="`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-${loadout.accentColor}-400/20 text-${loadout.accentColor}-300 border border-${loadout.accentColor}-400/30 mb-3`"
                    >
                      {{ loadout.trait }}
                    </div>

                    <!-- Skill Branches -->
                    <div class="mb-3">
                      <div class="text-xs text-gray-400 mb-1">
                        {{ loadout.systemType }}:
                      </div>
                      <div class="flex flex-wrap gap-1">
                        <span
                          v-for="(skill, idx) in loadout.skillBranches.slice(
                            0,
                            2
                          )"
                          :key="idx"
                          :class="`text-xs px-2 py-1 rounded bg-${loadout.accentColor}-400/10 text-${loadout.accentColor}-400 border border-${loadout.accentColor}-400/20`"
                        >
                          {{ skill }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <div class="flex justify-between text-xs text-gray-400">
                      <span
                        >Rank:
                        <span
                          :class="`text-${loadout.accentColor}-400 font-semibold`"
                          >{{ loadout.rank }}</span
                        ></span
                      >
                      <span>Projects: {{ loadout.projectsUsed }}</span>
                    </div>
                    <div class="text-xs text-gray-500">
                      Active: {{ loadout.activeYears }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Back Side -->
              <div
                :class="[
                  'absolute inset-0 w-full h-full rounded-2xl border-2 transition-all duration-300 rotate-y-180 backface-hidden bg-black/90 backdrop-blur-sm overflow-hidden',
                  index === activeLoadout
                    ? `border-${loadout.accentColor}-400 shadow-2xl shadow-${loadout.accentColor}-400/20`
                    : 'border-gray-700',
                ]"
              >
                <div class="relative z-10 p-6 h-full flex flex-col">
                  <div class="text-center mb-4">
                    <h3
                      :class="`text-lg font-bold text-${loadout.accentColor}-400 mb-2`"
                    >
                      {{ loadout.systemName }}
                    </h3>
                  </div>

                  <!-- Stats Grid -->
                  <div class="space-y-4 flex-1">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="text-center p-3 bg-gray-800/50 rounded">
                        <Icon
                          name="lucide:trophy"
                          :class="`w-6 h-6 text-${loadout.accentColor}-400 mx-auto mb-1`"
                        />
                        <div
                          :class="`text-lg font-bold text-${loadout.accentColor}-400`"
                        >
                          {{ loadout.rank }}
                        </div>
                        <div class="text-xs text-gray-400">Rank</div>
                      </div>
                      <div class="text-center p-3 bg-gray-800/50 rounded">
                        <Icon
                          name="lucide:target"
                          :class="`w-6 h-6 text-${loadout.accentColor}-400 mx-auto mb-1`"
                        />
                        <div
                          :class="`text-lg font-bold text-${loadout.accentColor}-400`"
                        >
                          {{ loadout.projectsUsed }}
                        </div>
                        <div class="text-xs text-gray-400">Projects</div>
                      </div>
                    </div>

                    <!-- Applied Projects -->
                    <div>
                      <h4 class="text-sm font-semibold text-gray-300 mb-2">
                        Achievements:
                      </h4>
                      <div class="space-y-1">
                        <div
                          v-for="(
                            achievement, idx
                          ) in loadout.achievements.slice(0, 3)"
                          :key="idx"
                          :class="`text-xs p-2 rounded bg-${loadout.accentColor}-400/10 text-${loadout.accentColor}-300 border border-${loadout.accentColor}-400/20`"
                        >
                          ✓ {{ achievement }}
                        </div>
                      </div>
                    </div>

                    <!-- Core Philosophy -->
                    <div
                      :class="`p-3 bg-gradient-to-r from-${loadout.accentColor}-400/10 to-transparent border-l-2 border-${loadout.accentColor}-400 rounded`"
                    >
                      <p class="text-xs text-gray-300 italic">
                        "{{ loadout.description }}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Navigation Hint -->
      <div class="text-center mt-12">
        <p class="text-gray-500 text-sm">
          Central hub connects to evolved data, powering development mastery...
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, nextTick } from "vue";

// Reactive data
const activeLoadout = ref(0);
const visibleCards = ref([]);
const flippedCards = ref([]);
const hoveredLoadout = ref(null);
const showRoleDropdown = ref(false);
const selectedMode = ref("developer");
const sectionRef = ref(null);
const scrollProgress = ref(0);
const flippedCharacter = ref(false);

// Loadouts data
const loadouts = [
  {
    id: 1,
    title: "Endurance Protocol",
    description: "Long-distance athletic conditioning",
    trait: "Persistence Engine",
    systemName: "STAMINA_SYS.CORE",
    systemType: "Active Components",
    rank: "Elite",
    activeYears: "2020-Present",
    projectsUsed: 6,
    masteryLevel: 86,
    achievements: ["Marathon Finisher", "Mental Fortitude", "Consistency King"],
    icon: "🏃‍♂️",
    accentColor: "cyan",
    particles: "pulse",
    skillBranches: [
      "Marathon Finisher",
      "Mental Fortress",
      "Crisis Management",
    ],
  },
  {
    id: 2,
    title: "Digital Strategist",
    description: "Competitive gaming tactical analysis",
    trait: "Meta Analyst",
    systemName: "STRATEGY_SYS.CORE",
    systemType: "Strategic Modules",
    rank: "Diamond",
    activeYears: "2018-Present",
    projectsUsed: 15,
    masteryLevel: 94,
    achievements: ["Diamond Rank", "Team Leader", "Pattern Master"],
    icon: "♟️",
    accentColor: "purple",
    particles: "grid",
    skillBranches: ["Meta Analysis", "Diamond Rank", "Team Leader"],
  },
  {
    id: 3,
    title: "Automotive Precision",
    description: "Engineering focus meets real dynamics",
    trait: "Systematic Problem Solver",
    systemName: "PRECISION_SYS.CORE",
    systemType: "Engineering Protocols",
    rank: "Expert",
    activeYears: "2019-Present",
    projectsUsed: 8,
    masteryLevel: 92,
    achievements: ["5+ Years Experience", "Expert Calibration", "Zero Defects"],
    icon: "🔧",
    accentColor: "orange",
    particles: "gear",
    skillBranches: [
      "Systematic Problem Solver",
      "Expert Calibration",
      "Zero Defects",
    ],
  },
  {
    id: 4,
    title: "Natural Explorer",
    description: "Adaptable navigator with exploration mindset",
    trait: "Adaptive Navigator",
    systemName: "EXPLORATION_SYS.CORE",
    systemType: "Navigation Systems",
    rank: "Ranger",
    activeYears: "2015-Present",
    projectsUsed: 12,
    masteryLevel: 88,
    achievements: ["Trail Guide", "Survival Skills", "Exploration Badge"],
    icon: "🌲",
    accentColor: "emerald",
    particles: "leaf",
    skillBranches: ["Navigation", "Adaptability", "Exploration"],
  },
];

// Character biodata
const biodata = reactive({
  name: "Naufal Fiqri",
  class: "Full-Stack Developer",
  level: 25,
  experience: "Central Processing Unit",
  rank: "Elite",
  projectsCompleted: 6,
  achievements: ["Marathon Finisher", "Mental Fortress", "Consistency King"],
  alternateRoles: [
    "Frontend Architect",
    "Backend Systems",
    "Creative Strategist",
    "System Designer",
  ],
  stats: {
    Intelligence: 92,
    Stamina: 95,
    Focus: 88,
    Adaptability: 90,
  },
});

// Mode configurations
const modes = {
  developer: {
    title: "Developer Mode",
    description: "Technical focus on coding and architecture",
    color: "cyan",
  },
  strategist: {
    title: "Strategist Mode",
    description: "Leadership and project management focus",
    color: "purple",
  },
  explorer: {
    title: "Explorer Mode",
    description: "Creative and experimental approach",
    color: "emerald",
  },
};

// Particle effect components
const getParticleComponent = (type) => {
  return {
    name: "ParticleEffect",
    props: ["accentColor"],
    template: `<div>${getParticleTemplate(type)}</div>`,
  };
};

const getParticleTemplate = (type) => {
  switch (type) {
    case "gear":
      return Array.from(
        { length: 8 },
        (_, i) =>
          `<div class="absolute w-3 h-3 border-2 border-orange-400 rounded opacity-30 animate-spin" style="left: ${
            15 + i * 12
          }%; top: ${20 + (i % 3) * 25}%; animation-delay: ${
            i * 0.3
          }s; animation-duration: ${3 + i * 0.5}s; transform: rotate(${
            i * 45
          }deg);"></div>`
      ).join("");
    case "leaf":
      return Array.from(
        { length: 12 },
        (_, i) =>
          `<div class="absolute w-2 h-4 bg-emerald-400 rounded-full opacity-25 animate-float" style="left: ${
            Math.random() * 80 + 10
          }%; top: ${Math.random() * 80 + 10}%; animation-delay: ${
            i * 0.2
          }s; animation-duration: ${4 + Math.random() * 2}s;"></div>`
      ).join("");
    case "grid":
      return Array.from(
        { length: 25 },
        (_, i) =>
          `<div class="absolute w-1 h-1 bg-purple-400 opacity-20 animate-pulse" style="left: ${
            (i % 5) * 20
          }%; top: ${Math.floor(i / 5) * 20}%; animation-delay: ${
            i * 0.05
          }s;"></div>`
      ).join("");
    case "pulse":
      return Array.from(
        { length: 5 },
        (_, i) =>
          `<div class="absolute w-6 h-6 border border-cyan-400 rounded-full opacity-30 animate-ping" style="left: 50%; top: 50%; transform: translate(-50%, -50%); animation-delay: ${
            i * 0.3
          }s;"></div>`
      ).join("");
    default:
      return "";
  }
};

// Methods
const toggleFlip = (index) => {
  if (flippedCards.value.includes(index)) {
    flippedCards.value = flippedCards.value.filter((i) => i !== index);
  } else {
    flippedCards.value = [...flippedCards.value, index];
  }
};

const handleMouseEnter = (index) => {
  activeLoadout.value = index;
  hoveredLoadout.value = index;
};

const handleScroll = () => {
  if (sectionRef.value) {
    const rect = sectionRef.value.getBoundingClientRect();
    const progress = Math.max(
      0,
      Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)
    );
    scrollProgress.value = progress;

    const newActive = Math.floor(progress * loadouts.length);
    if (newActive !== activeLoadout.value && newActive < loadouts.length) {
      activeLoadout.value = newActive;
    }
  }
};

const toggleCharacterFlip = () => {
  flippedCharacter.value = !flippedCharacter.value;
};

// Lifecycle
onMounted(() => {
  // Intersection Observer for card visibility
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadouts.forEach((_, index) => {
            setTimeout(() => {
              if (!visibleCards.value.includes(index)) {
                visibleCards.value = [...visibleCards.value, index];
              }
            }, index * 200);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  // Scroll listener
  window.addEventListener("scroll", handleScroll);

  // Cleanup function stored for onUnmounted
  onUnmounted(() => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(180deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.rotate-y-0 {
  transform: rotateY(0deg);
}

.font-orbitron {
  font-family: "Orbitron", monospace;
}
</style>
