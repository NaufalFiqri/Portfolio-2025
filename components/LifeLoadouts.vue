<template>
  <section
    id="loadouts"
    ref="sectionRef"
    class="relative py-16 overflow-hidden life-loadouts-section"
  >
    <!-- Top Black Gradient to Match CrystalVault Bottom -->
    <div
      class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-5 pointer-events-none life-loadouts-gradient"
    ></div>

    <!-- Enhanced Background with Scanlines -->
    <div class="absolute inset-0 life-loadouts-bg">
      <!-- Animated scanlines -->
      <div class="absolute inset-0 opacity-10 life-loadouts-scanlines">
        <div
          v-for="i in 50"
          :key="`scanline-${i}`"
          class="absolute w-full h-px bg-cyan-400 animate-pulse life-loadouts-scanline-item"
          :style="{
            top: `${i * 2}%`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '3s',
          }"
        />
      </div>

      <!-- Grid overlay -->
      <div class="absolute inset-0 opacity-5 life-loadouts-grid-overlay">
        <div class="grid grid-cols-12 gap-4 h-full life-loadouts-grid">
          <div
            v-for="i in 144"
            :key="`grid-${i}`"
            class="border border-cyan-400/20 life-loadouts-grid-item"
          />
        </div>
      </div>
    </div>

    <div
      class="max-w-7xl mx-auto px-6 relative z-10 life-loadouts-main-container"
    >
      <div class="text-center mb-8 life-loadouts-header">
        <h2
          class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-orbitron life-loadouts-title"
        >
          &gt; LIFE_LOADOUTS.SYS
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto life-loadouts-desc">
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
      <div
        class="flex flex-col lg:flex-row gap-8 items-start life-loadouts-content-layout"
      >
        <!-- Enhanced Central Character Profile - Left Side -->
        <div class="lg:w-1/2 life-loadouts-profile-col">
          <div
            class="relative w-full h-[800px] cursor-pointer transition-all duration-700 preserve-3d life-loadouts-profile-card"
            @click="toggleCharacterFlip"
          >
            <!-- Front Side - Character Profile -->
            <div
              :class="[
                'absolute inset-0 w-full h-full p-8 bg-black/90 backdrop-blur-lg border-2 border-cyan-400/50 rounded-3xl shadow-2xl shadow-cyan-400/20 backface-hidden transition-transform duration-700 life-loadouts-profile-front',
                flippedCharacter ? 'rotate-y-180' : 'rotate-y-0',
              ]"
            >
              <!-- Cyberpunk Level Indicator - Top Left -->
              <div
                class="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 rounded-lg backdrop-blur-sm life-loadouts-level-indicator"
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
              <!-- <div
                class="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse"
              >
                <Icon name="lucide:cpu" class="w-8 h-8 text-white" />
              </div> -->

              <!-- Character Profile Content -->
              <div
                class="relative z-10 text-center life-loadouts-profile-content"
              >
                <div class="mb-6 life-loadouts-profile-maininfo">
                  <h3
                    class="text-3xl font-bold text-white mb-2 life-loadouts-profile-name"
                  >
                    {{ biodata.name }}
                  </h3>
                  <p
                    class="text-cyan-400 text-xl font-semibold mb-1 life-loadouts-profile-class"
                  >
                    {{ biodata.class }}
                  </p>
                  <p
                    class="text-emerald-400 text-sm mb-4 life-loadouts-profile-exp"
                  >
                    {{ biodata.experience }}
                  </p>

                  <!-- Role Dropdown -->
                  <div
                    class="relative inline-block life-loadouts-role-dropdown"
                  >
                    <button
                      @click.stop="showRoleDropdown = !showRoleDropdown"
                      class="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 rounded-full text-sm text-emerald-300 hover:bg-emerald-400/30 transition-all life-loadouts-role-btn"
                    >
                      <span>Central Processing Unit</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4 h-4"
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

                    <div
                      v-if="showRoleDropdown"
                      class="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-64 bg-black/90 border border-cyan-400/30 rounded-lg backdrop-blur-sm z-20 life-loadouts-role-list"
                    >
                      <div
                        v-for="(role, index) in biodata.alternateRoles"
                        :key="index"
                        class="px-4 py-2 text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all life-loadouts-role-item"
                      >
                        {{ role }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- RPG Stats Block -->
                <div
                  class="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 life-loadouts-stats-block"
                >
                  <h4
                    class="text-cyan-300 font-semibold mb-4 text-sm uppercase tracking-wider life-loadouts-stats-title"
                  >
                    Endurance Protocol Stats
                  </h4>
                  <div
                    v-for="(value, stat) in biodata.stats"
                    :key="stat"
                    class="mb-3"
                  >
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-gray-300 capitalize text-sm">{{
                        stat
                      }}</span>
                      <span class="text-cyan-400 font-bold text-sm">{{
                        value
                      }}</span>
                    </div>
                    <div
                      class="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
                    >
                      <div
                        :style="{ width: value + '%' }"
                        class="h-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"
                      ></div>
                    </div>
                  </div>
                </div>

                <!-- Character Info Grid -->
                <div
                  class="grid grid-cols-2 gap-4 mb-6 life-loadouts-info-grid"
                >
                  <div
                    class="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 life-loadouts-info-item"
                  >
                    <div class="text-sm text-gray-400">Projects</div>
                    <div class="text-emerald-400 font-bold">
                      {{ biodata.projectsCompleted }}
                    </div>
                  </div>
                  <div
                    class="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 life-loadouts-info-item"
                  >
                    <div class="text-sm text-gray-400">Rank</div>
                    <div class="text-cyan-400 font-bold">
                      {{ biodata.rank }}
                    </div>
                  </div>
                </div>

                <!-- Achievements -->
                <div class="mb-6 life-loadouts-achievements">
                  <h4
                    class="text-cyan-300 font-semibold mb-3 text-sm uppercase tracking-wider life-loadouts-achievements-title"
                  >
                    Achievements
                  </h4>
                  <div class="space-y-2 life-loadouts-achievements-list">
                    <div
                      v-for="achievement in biodata.achievements"
                      :key="achievement"
                      class="flex items-center space-x-2 text-sm text-gray-300 life-loadouts-achievement-item"
                    >
                      <span class="text-green-400">✓</span>
                      <span>{{ achievement }}</span>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex space-x-4 mt-6 life-loadouts-action-btns">
                  <button
                    @click.stop="toggleCharacterFlip"
                    class="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-xl text-white font-semibold hover:from-cyan-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 hover:scale-105 life-loadouts-workexp-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19.428 15.341A8 8 0 116.343 2.257M22 12.08V12a10 10 0 10-9.05 9.95"
                      />
                    </svg>
                    <span>Work Experience</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Back Side - Work Experience -->
            <div
              :class="[
                'absolute inset-0 w-full h-full p-8 bg-black/90 backdrop-blur-lg border-2 border-cyan-400/50 rounded-3xl shadow-2xl shadow-cyan-400/20 backface-hidden overflow-y-auto transition-transform duration-700 life-loadouts-profile-back',
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
              <div class="relative z-10 life-loadouts-workexp-tree">
                <h4
                  class="text-center text-2xl font-bold text-emerald-400 mb-6 life-loadouts-workexp-title"
                >
                  Work Experience Tree
                </h4>

                <!-- Experience Timeline -->
                <div class="relative mb-6 life-loadouts-workexp-timeline">
                  <!-- Timeline Line -->
                  <div
                    class="absolute left-6 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-purple-400 life-loadouts-workexp-timeline-line"
                    style="height: calc(100% - 2rem)"
                  ></div>

                  <!-- Experience Items -->
                  <div class="space-y-4 life-loadouts-workexp-items">
                    <!-- Current Position -->
                    <div
                      class="relative flex items-start life-loadouts-workexp-item"
                    >
                      <div
                        class="absolute left-4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full border-2 border-gray-800 life-loadouts-workexp-dot"
                      ></div>
                      <div
                        class="ml-12 p-3 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 border border-cyan-400/30 rounded-lg backdrop-blur-sm life-loadouts-workexp-card"
                      >
                        <div
                          class="flex items-center justify-between mb-1 life-loadouts-workexp-card-header"
                        >
                          <h5
                            class="text-cyan-300 font-semibold text-sm life-loadouts-workexp-role"
                          >
                            Full-Stack Developer
                          </h5>
                          <span
                            class="text-xs text-emerald-400 font-mono life-loadouts-workexp-date"
                          >
                            2022-Present</span
                          >
                        </div>
                        <p
                          class="text-gray-400 text-xs mb-1 life-loadouts-workexp-desc"
                        >
                          Freelance & Personal Projects
                        </p>
                        <div
                          class="flex flex-wrap gap-1 mt-2 life-loadouts-workexp-skills"
                        >
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
                    <div
                      class="relative flex items-start life-loadouts-workexp-item"
                    >
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
                    <div
                      class="relative flex items-start life-loadouts-workexp-item"
                    >
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
                    <div
                      class="relative flex items-start life-loadouts-workexp-item"
                    >
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

          <!-- Character flip state indicator -->
          <div
            v-if="flippedCharacter"
            class="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse pointer-events-none z-20"
            title="Character card is flipped"
          ></div>
        </div>

        <!-- Enhanced Loadout Cards - Right Side (2x2 Grid) -->
        <div class="lg:w-1/2 life-loadouts-cards-col">
          <div
            class="grid grid-cols-1 md:grid-cols-2 gap-3 life-loadouts-cards-grid"
          >
            <div
              v-for="(loadout, index) in loadouts"
              :key="loadout.id"
              :class="[
                'relative w-full h-96 cursor-pointer transition-all duration-700 preserve-3d life-loadouts-card',
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
                  'absolute inset-0 w-full h-full rounded-2xl border-2 transition-all duration-300 backface-hidden bg-black/70 backdrop-blur-sm overflow-hidden life-loadouts-card-front',
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
                  class="relative z-10 p-6 h-full flex flex-col justify-between life-loadouts-card-content"
                >
                  <div class="life-loadouts-card-maininfo">
                    <div
                      :class="[
                        'text-4xl mb-3 transform transition-transform duration-300 life-loadouts-card-icon',
                        index === activeLoadout ? 'scale-110' : 'scale-100',
                      ]"
                    >
                      {{ loadout.icon }}
                    </div>

                    <h3
                      class="text-lg font-bold text-white mb-2 leading-tight life-loadouts-card-title"
                    >
                      {{ loadout.title }}
                    </h3>

                    <p
                      class="text-gray-300 text-sm mb-3 leading-relaxed life-loadouts-card-desc"
                    >
                      {{ loadout.description }}
                    </p>

                    <div
                      :class="`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-${loadout.accentColor}-400/20 text-${loadout.accentColor}-300 border border-${loadout.accentColor}-400/30 mb-3 life-loadouts-card-trait`"
                    >
                      {{ loadout.trait }}
                    </div>

                    <!-- Skill Branches -->
                    <div class="mb-3 life-loadouts-card-skills">
                      <div
                        class="text-xs text-gray-400 mb-1 life-loadouts-card-skills-label"
                      >
                        {{ loadout.systemType }}:
                      </div>
                      <div
                        class="flex flex-wrap gap-1 life-loadouts-card-skills-list"
                      >
                        <span
                          v-for="(skill, idx) in loadout.skillBranches.slice(
                            0,
                            2
                          )"
                          :key="idx"
                          :class="`text-xs px-2 py-1 rounded bg-${loadout.accentColor}-400/10 text-${loadout.accentColor}-400 border border-${loadout.accentColor}-400/20 life-loadouts-card-skill`"
                        >
                          {{ skill }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-2 life-loadouts-card-meta">
                    <div
                      class="flex justify-between text-xs text-gray-400 life-loadouts-card-meta-row"
                    >
                      <span
                        >Rank:
                        <span
                          :class="`text-${loadout.accentColor}-400 font-semibold`"
                          >{{ loadout.rank }}</span
                        ></span
                      >
                      <span>Projects: {{ loadout.projectsUsed }}</span>
                    </div>
                    <div
                      class="text-xs text-gray-500 life-loadouts-card-meta-active"
                    >
                      Active: {{ loadout.activeYears }}
                    </div>
                  </div>
                </div>

                <!-- Flip state indicator -->
                <div
                  v-if="flippedCards.includes(index)"
                  class="absolute top-3 left-3 w-3 h-3 bg-green-400 rounded-full animate-pulse pointer-events-none z-20"
                  title="Card is flipped"
                ></div>

                <!-- Card clickable hint (desktop) -->
                <div
                  class="life-loadouts-card-click-hint hidden md:flex items-center gap-1 absolute bottom-3 right-3 text-xs text-cyan-300 bg-black/60 px-2 py-1 rounded-full border border-cyan-400/30 pointer-events-none select-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.341A8 8 0 116.343 2.257M22 12.08V12a10 10 0 10-9.05 9.95"
                    />
                  </svg>
                  Tap to flip
                </div>

                <!-- Card clickable hint (mobile) -->
                <div
                  class="life-loadouts-card-click-hint-mobile flex md:hidden items-center absolute bottom-3 right-3 text-cyan-300 bg-black/60 p-2 rounded-full border border-cyan-400/30 pointer-events-none select-none z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19.428 15.341A8 8 0 116.343 2.257M22 12.08V12a10 10 0 10-9.05 9.95"
                    />
                  </svg>
                </div>
              </div>

              <!-- Back Side -->
              <div
                :class="[
                  'absolute inset-0 w-full h-full rounded-2xl border-2 transition-all duration-300 rotate-y-180 backface-hidden bg-black/90 backdrop-blur-sm overflow-hidden life-loadouts-card-back',
                  index === activeLoadout
                    ? `border-${loadout.accentColor}-400 shadow-2xl shadow-${loadout.accentColor}-400/20`
                    : 'border-gray-700',
                ]"
              >
                <div
                  class="relative z-10 p-6 h-full flex flex-col life-loadouts-card-back-content"
                >
                  <div class="text-center mb-4 life-loadouts-card-back-header">
                    <h3
                      :class="`text-lg font-bold text-${loadout.accentColor}-400 mb-2 life-loadouts-card-back-title`"
                    >
                      {{ loadout.systemName }}
                    </h3>
                  </div>

                  <!-- Stats Grid -->
                  <div class="space-y-4 flex-1 life-loadouts-card-back-stats">
                    <div
                      class="grid grid-cols-2 gap-4 life-loadouts-card-back-stats-grid"
                    >
                      <div
                        class="text-center p-3 bg-gray-800/50 rounded life-loadouts-card-back-rank"
                      >
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
                      <div
                        class="text-center p-3 bg-gray-800/50 rounded life-loadouts-card-back-projects"
                      >
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
                    <div class="life-loadouts-card-back-achievements">
                      <h4
                        class="text-sm font-semibold text-gray-300 mb-2 life-loadouts-card-back-achievements-title"
                      >
                        Achievements:
                      </h4>
                      <div
                        class="space-y-1 life-loadouts-card-back-achievements-list"
                      >
                        <div
                          v-for="(
                            achievement, idx
                          ) in loadout.achievements.slice(0, 3)"
                          :key="idx"
                          :class="`text-xs p-2 rounded bg-${loadout.accentColor}-400/10 text-${loadout.accentColor}-300 border border-${loadout.accentColor}-400/20 life-loadouts-card-back-achievement`"
                        >
                          ✓ {{ achievement }}
                        </div>
                      </div>
                    </div>

                    <!-- Core Philosophy -->
                    <div
                      :class="`p-3 bg-gradient-to-r from-${loadout.accentColor}-400/10 to-transparent border-l-2 border-${loadout.accentColor}-400 rounded life-loadouts-card-back-philosophy`"
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
      <div class="text-center mt-12 life-loadouts-nav-hint">
        <p class="text-gray-500 text-sm life-loadouts-nav-hint-text">
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
    activeYears: "2010-Present",
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
    activeYears: "2003-Present",
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
    activeYears: "2005-Present",
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
    activeYears: "2010-Present",
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
  level: 24,
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

/* Enhanced flip animation with longer duration */
.life-loadouts-card,
.life-loadouts-profile-card {
  transition: transform 1.2s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.life-loadouts-card-front,
.life-loadouts-card-back,
.life-loadouts-profile-front,
.life-loadouts-profile-back {
  transition: transform 1.2s cubic-bezier(0.4, 0.2, 0.2, 1);
}

/* Hover effects for cards - no flip, just visual feedback */
.life-loadouts-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.life-loadouts-card:hover .life-loadouts-card-front,
.life-loadouts-card:hover .life-loadouts-card-back {
  border-color: rgba(34, 211, 238, 0.6);
}

.font-orbitron {
  font-family: "Orbitron", monospace;
}

/* Media Queries */
@media (max-width: 769px) {
  .life-loadouts-section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .life-loadouts-main-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .life-loadouts-header {
    margin-bottom: 2rem;
  }
  .life-loadouts-title {
    font-size: 2rem;
  }
  .life-loadouts-content-layout {
    flex-direction: column;
    gap: 2rem;
  }
  .life-loadouts-profile-col,
  .life-loadouts-cards-col {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .life-loadouts-profile-card,
  .life-loadouts-card {
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .life-loadouts-cards-grid {
    grid-template-columns: 1fr;
  }
  .life-loadouts-nav-hint {
    margin-top: 2rem;
  }
}
@media (max-width: 480px) {
  .life-loadouts-section {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .life-loadouts-title {
    font-size: 1.5rem;
  }
  .life-loadouts-desc {
    font-size: 1rem;
  }
  .life-loadouts-content-layout {
    flex-direction: column;
    gap: 1rem;
  }
  .life-loadouts-profile-col {
    height: 100%;
  }
  .life-loadouts-profile-card {
    height: 600px;
    margin-bottom: 1rem;
  }
  .life-loadouts-card-content {
    padding: 0.75rem;
  }
  .life-loadouts-card-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .life-loadouts-card-title {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  .life-loadouts-card-desc {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  .life-loadouts-card-trait {
    font-size: 0.7rem;
    padding: 0.25rem 0.75rem;
    margin-bottom: 0.5rem;
  }
  .life-loadouts-card-skills-label {
    font-size: 0.7rem;
    margin-bottom: 0.2rem;
  }
  .life-loadouts-card-skills-list {
    gap: 0.25rem;
  }
  .life-loadouts-card-skill {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
  .life-loadouts-card-meta-row {
    font-size: 0.8rem;
  }
  .life-loadouts-card-meta-active {
    font-size: 0.7rem;
  }
  .life-loadouts-card-back-content {
    padding: 0.75rem;
  }
  .life-loadouts-card-back-title {
    font-size: 1rem;
  }
  .life-loadouts-card-back-achievements-title {
    font-size: 0.8rem;
  }
  .life-loadouts-card-back-achievement {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
  .life-loadouts-card-back-philosophy {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  .life-loadouts-profile-maininfo {
    margin-bottom: 0.5rem;
  }
  .life-loadouts-profile-exp,
  .life-loadouts-role-btn {
    display: none;
  }

  .life-loadouts-achievements {
    display: none;
  }
  .life-loadouts-action-btn {
    align-items: center;
  }
  .life-loadouts-nav-hint {
    margin-top: 1rem;
  }
  .life-loadouts-nav-hint-text {
    font-size: 0.8rem;
  }
  /* Mastery ring size */
  .life-loadouts-card-front .absolute.top-4.right-4.w-14.h-14 {
    width: 2.5rem !important;
    height: 2.5rem !important;
    top: 0.5rem !important;
    right: 0.5rem !important;
  }
  .life-loadouts-card-front .absolute.top-4.right-4.w-14.h-14 svg {
    width: 2.5rem !important;
    height: 2.5rem !important;
  }
  .life-loadouts-card-front
    .absolute.top-4.right-4.w-14.h-14
    .absolute.inset-0 {
    font-size: 0.8rem !important;
  }
  .life-loadouts-card-click-hint {
    display: none !important;
  }
  .life-loadouts-card-click-hint-mobile {
    right: 1rem;
    left: auto;
    bottom: 1rem;
    z-index: 10;
    display: flex !important;
  }
  .life-loadouts-card-meta-row {
    justify-content: space-between;
    gap: 0.5rem;
  }
  .Project-btm {
    display: none;
  }
}
</style>
