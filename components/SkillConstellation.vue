<template>
  <section id="skills" class="relative min-h-screen overflow-hidden">
    <!-- Optimized Neural Network Background -->
    <div class="absolute inset-0 opacity-15">
      <svg
        class="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="neuralGrid"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="50" cy="50" r="0.5" fill="#00fff0" opacity="0.4" />
            <line
              x1="0"
              y1="50"
              x2="100"
              y2="50"
              stroke="#00fff0"
              stroke-width="0.3"
              opacity="0.2"
            />
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="100"
              stroke="#7f5cff"
              stroke-width="0.3"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#neuralGrid)" />
      </svg>
    </div>

    <!-- Simplified Data Streams -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        v-for="i in 8"
        :key="`data-stream-${i}`"
        class="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-data-stream"
        :style="getDataStreamStyle(i)"
      />
    </div>

    <!-- Simplified Interface Frame -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Corner brackets -->
      <div
        class="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-cyan-400/50"
      ></div>
      <div
        class="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-cyan-400/50"
      ></div>
      <div
        class="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-emerald-400/50"
      ></div>
      <div
        class="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-emerald-400/50"
      ></div>

      <!-- Simplified side panels -->
      <div class="absolute top-1/4 left-4 w-6 space-y-3">
        <div
          v-for="i in 6"
          :key="`left-data-${i}`"
          class="h-0.5 bg-gradient-to-r from-cyan-400/40 to-transparent animate-pulse"
          :style="{ width: '60%', animationDelay: `${i * 0.3}s` }"
        />
      </div>
      <div class="absolute top-1/4 right-4 w-6 space-y-3">
        <div
          v-for="i in 6"
          :key="`right-data-${i}`"
          class="h-0.5 bg-gradient-to-l from-emerald-400/40 to-transparent animate-pulse"
          :style="{ width: '60%', animationDelay: `${i * 0.3}s` }"
        />
      </div>
    </div>

    <!-- Main Content -->
    <div
      :class="['relative z-30 py-8 fade-in-section', { visible }]"
      id="skills-content"
    >
      <!-- Simplified Header -->
      <div class="text-center mb-8 relative">
        <!-- System Status -->
        <div
          class="inline-flex items-center gap-3 mb-3 px-6 py-3 bg-black/30 border border-cyan-400/30 rounded-full backdrop-blur-sm"
        >
          <div class="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <span class="text-emerald-300 font-mono text-sm tracking-wider"
            >NEURAL_MATRIX_ONLINE</span
          >
        </div>

        <h2
          class="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent font-mono"
        >
          &gt; SKILL_CONSTELLATION.EXE
        </h2>
      </div>

      <!-- Optimized Constellation Container -->
      <div
        ref="constellationRef"
        class="relative max-w-[90vw] h-[70vh] min-h-[400px] mx-auto rounded-3xl border-2 border-cyan-400/20 bg-gradient-to-br from-black/50 via-slate-900/30 to-black/50 backdrop-blur-md shadow-2xl overflow-hidden constellation-container"
      >
        <!-- Simplified inner interface -->
        <div
          class="absolute inset-4 border border-slate-600/20 rounded-2xl bg-gradient-to-br from-slate-800/10 to-black/20"
        >
          <div
            class="absolute top-2 left-2 w-4 h-4 border-l border-t border-cyan-400/40"
          ></div>
          <div
            class="absolute top-2 right-2 w-4 h-4 border-r border-t border-cyan-400/40"
          ></div>
          <div
            class="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-emerald-400/40"
          ></div>
          <div
            class="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-emerald-400/40"
          ></div>
        </div>

        <!-- Reduced background particles -->
        <div class="absolute inset-0">
          <div
            v-for="i in 20"
            :key="`bg-particle-${i}`"
            class="absolute w-1 h-1 rounded-full animate-pulse bg-cyan-400/20"
            :style="getParticleStyle(i)"
          />
        </div>

        <!-- Optimized SVG Constellation -->
        <svg
          class="absolute inset-0 w-full h-full"
          :width="svgWidth"
          :height="svgHeight"
          :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
          preserveAspectRatio="none"
          style="z-index: 10"
        >
          <defs>
            <!-- Enhanced gradients for more depth -->
            <radialGradient id="nodeGlow" cx="0.5" cy="0.3" r="0.7">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
              <stop offset="30%" stop-color="#00fff0" stop-opacity="0.7" />
              <stop offset="70%" stop-color="#7f5cff" stop-opacity="0.4" />
              <stop offset="100%" stop-color="transparent" />
            </radialGradient>
            <!-- Enhanced glow filter with multiple layers -->
            <filter
              id="enhancedGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="3" result="coloredBlur1" />
              <feGaussianBlur stdDeviation="8" result="coloredBlur2" />
              <feGaussianBlur stdDeviation="15" result="coloredBlur3" />
              <feMerge>
                <feMergeNode in="coloredBlur3" />
                <feMergeNode in="coloredBlur2" />
                <feMergeNode in="coloredBlur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <!-- Only render Skill Nodes -->
          <g>
            <g
              v-for="skill in visibleSkills"
              :key="'node-' + skill.name"
              @mouseenter="hoveredSkill = skill.name"
              @mouseleave="hoveredSkill = null"
              @click.stop="activeSkill = skill"
              class="skill-node-group"
            >
              <!-- Faded colored back star (no animation) -->
              <g :transform="`translate(${skill.x}, ${skill.y}) scale(0.64)`">
                <g transform="translate(-87, -85.5)">
                  <path
                    d="M101.191 32.5681C102.062 34.9974 104.972 35.978 107.136 34.5716L133.033 17.7414C136.18 15.6962 140.157 18.7203 139.027 22.2994L129.961 51.0206C129.147 53.5986 131.072 56.2246 133.775 56.2246H169.704C173.674 56.2246 175.219 61.3833 171.903 63.5658L141.395 83.646C139.09 85.1627 138.977 88.5016 141.173 90.1713L169.948 112.052C173.108 114.454 171.216 119.496 167.255 119.226L137.497 117.2C134.619 117.004 132.486 119.826 133.46 122.541L142.32 147.245C143.618 150.862 139.566 154.049 136.356 151.936L109.107 134.001C106.89 132.541 103.892 133.607 103.093 136.138L93.0584 167.93C91.9018 171.594 86.7472 171.678 85.471 168.054L73.5633 134.237C72.6998 131.785 69.7629 130.795 67.5912 132.225L37.6436 151.937C34.4341 154.049 30.3821 150.862 31.6792 147.245L42.9341 115.862C43.8302 113.364 42.0888 110.702 39.4407 110.521L6.89455 108.305C3.06102 108.044 1.76474 103.055 4.98647 100.961L26.9913 86.6589C29.4099 85.087 29.4201 81.5497 27.0107 79.9638L2.09696 63.5658C-1.21904 61.3833 0.326301 56.2246 4.29612 56.2246H40.4446C43.2031 56.2246 45.1337 53.4981 44.2175 50.8961L32.087 16.4458C30.7685 12.7014 35.121 9.53045 38.281 11.9332L66.8808 33.6795C69.0326 35.3157 72.1543 34.3905 73.067 31.8459L83.2347 3.49776C84.5018 -0.035007 89.498 -0.0349477 90.765 3.49785L101.191 32.5681Z"
                    :fill="getTierGlow(skill.tier)"
                    fill-opacity="0.18"
                    style="filter: drop-shadow(0 0 24px #000)"
                    :class="
                      unlockedSkills.includes(skill.name)
                        ? 'skill-visible'
                        : 'skill-hidden'
                    "
                  />
                </g>
              </g>
              <!-- Main star -->
              <g :transform="`translate(${skill.x}, ${skill.y}) scale(0.45)`">
                <g transform="translate(-87, -85.5)">
                  <path
                    d="M101.191 32.5681C102.062 34.9974 104.972 35.978 107.136 34.5716L133.033 17.7414C136.18 15.6962 140.157 18.7203 139.027 22.2994L129.961 51.0206C129.147 53.5986 131.072 56.2246 133.775 56.2246H169.704C173.674 56.2246 175.219 61.3833 171.903 63.5658L141.395 83.646C139.09 85.1627 138.977 88.5016 141.173 90.1713L169.948 112.052C173.108 114.454 171.216 119.496 167.255 119.226L137.497 117.2C134.619 117.004 132.486 119.826 133.46 122.541L142.32 147.245C143.618 150.862 139.566 154.049 136.356 151.936L109.107 134.001C106.89 132.541 103.892 133.607 103.093 136.138L93.0584 167.93C91.9018 171.594 86.7472 171.678 85.471 168.054L73.5633 134.237C72.6998 131.785 69.7629 130.795 67.5912 132.225L37.6436 151.937C34.4341 154.049 30.3821 150.862 31.6792 147.245L42.9341 115.862C43.8302 113.364 42.0888 110.702 39.4407 110.521L6.89455 108.305C3.06102 108.044 1.76474 103.055 4.98647 100.961L26.9913 86.6589C29.4099 85.087 29.4201 81.5497 27.0107 79.9638L2.09696 63.5658C-1.21904 61.3833 0.326301 56.2246 4.29612 56.2246H40.4446C43.2031 56.2246 45.1337 53.4981 44.2175 50.8961L32.087 16.4458C30.7685 12.7014 35.121 9.53045 38.281 11.9332L66.8808 33.6795C69.0326 35.3157 72.1543 34.3905 73.067 31.8459L83.2347 3.49776C84.5018 -0.035007 89.498 -0.0349477 90.765 3.49785L101.191 32.5681Z"
                    :fill="getTierGlow(skill.tier)"
                    fill-opacity="0.85"
                    style="filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.18))"
                    :class="
                      unlockedSkills.includes(skill.name)
                        ? 'skill-visible'
                        : 'skill-hidden'
                    "
                  />
                  <!-- Add CSS3 SVG icon for CSS skill only -->
                  <image
                    v-if="skillIcons[skill.name]"
                    :href="skillIcons[skill.name]"
                    x="48"
                    y="48"
                    width="75"
                    height="75"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>

        <!-- Hover Tooltip Modal with smart positioning -->
        <div
          v-if="hoveredSkill && !activeSkill"
          class="absolute pointer-events-none z-30"
          :class="`tooltip-emerge tooltip-${getTooltipPosition()}`"
          :style="getTooltipStyle()"
        >
          <div
            class="bg-black/90 border border-cyan-400/50 rounded-xl p-4 backdrop-blur-md shadow-2xl min-w-[200px] tooltip-content"
          >
            <div class="flex items-center gap-3 mb-2">
              <span class="text-2xl">{{ hoveredSkillObj?.icon }}</span>
              <div>
                <div class="text-cyan-300 font-bold text-lg">
                  {{ hoveredSkillObj?.name }}
                </div>
                <div class="text-yellow-400 font-semibold">
                  {{ hoveredSkillObj?.mastery }}
                </div>
              </div>
            </div>
            <div class="text-purple-300 text-sm mb-2">
              {{ hoveredSkillObj?.category }}
            </div>
            <div class="flex items-center gap-2 text-sm mb-2">
              <span class="text-cyan-400"
                >Level {{ hoveredSkillObj?.level }}%</span
              >
              <span class="text-gray-400">•</span>
              <span :class="getTierColorClass(hoveredSkillObj?.tier)">{{
                hoveredSkillObj?.tier
              }}</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2">
              <div
                class="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                :style="{
                  width:
                    (hoveredSkillObj?.xp / hoveredSkillObj?.maxXp) * 100 + '%',
                }"
              ></div>
            </div>
            <div class="text-xs text-gray-400 mt-1 text-center">
              {{ hoveredSkillObj?.xp }}/{{ hoveredSkillObj?.maxXp }} XP
            </div>
          </div>
        </div>

        <!-- Compact System Stats Legend -->
        <div class="absolute bottom-4 right-4 flex flex-col gap-2">
          <div
            class="text-center px-3 py-2 bg-black/60 border border-cyan-400/20 rounded-lg backdrop-blur-sm"
          >
            <div class="text-lg font-bold text-cyan-300 font-mono">
              {{ visibleSkills.length }}
            </div>
            <div class="text-xs text-gray-400 uppercase tracking-wider">
              Nodes
            </div>
          </div>
          <div
            class="text-center px-3 py-2 bg-black/60 border border-emerald-400/20 rounded-lg backdrop-blur-sm"
          >
            <div class="text-lg font-bold text-emerald-300 font-mono">
              {{ averageMastery }}%
            </div>
            <div class="text-xs text-gray-400 uppercase tracking-wider">
              Avg
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Modal (keeping existing modal code but with better styling) -->
    <Teleport to="body">
      <Dialog :open="!!activeSkill" @close="activeSkill = null">
        <DialogOverlay
          class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
        />
        <div
          class="fixed inset-0 flex items-center justify-center z-[10000] p-4"
        >
          <div
            class="bg-gradient-to-br from-black/95 via-slate-900/95 to-black/95 border-2 border-cyan-400/30 rounded-2xl p-8 w-full max-w-2xl text-white shadow-2xl relative backdrop-blur-xl modal-glitch"
            style="box-shadow: 0 0 60px rgba(34, 211, 238, 0.3)"
          >
            <!-- Modal content remains the same but with enhanced styling -->
            <button
              @click="activeSkill = null"
              class="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-2xl transition-colors hover:scale-110 transform"
            >
              &times;
            </button>
            <div v-if="activeSkill">
              <div class="flex items-center gap-4 mb-6">
                <span
                  v-if="skillIcons[activeSkill.name]"
                  class="inline-block align-middle"
                >
                  <img
                    :src="skillIcons[activeSkill.name]"
                    alt="icon"
                    style="
                      width: 56px;
                      height: 56px;
                      object-fit: contain;
                      vertical-align: middle;
                    "
                  />
                </span>
                <span v-else class="text-5xl">{{ activeSkill.icon }}</span>
                <div>
                  <div
                    class="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent"
                  >
                    {{ activeSkill.name }}
                  </div>
                  <div class="text-yellow-400 font-semibold text-lg">
                    {{ activeSkill.mastery }}
                  </div>
                  <div class="text-sm text-cyan-300 uppercase tracking-wider">
                    {{ activeSkill.category }}
                  </div>
                </div>
              </div>
              <!-- Rest of modal content remains the same -->
              <div class="grid grid-cols-3 gap-4 text-sm mb-4">
                <div
                  class="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/30"
                >
                  <div class="text-cyan-400 font-bold text-xl">
                    {{ activeSkill.level }}%
                  </div>
                  <div class="text-gray-400">Mastery</div>
                </div>
                <div
                  class="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/30"
                >
                  <div
                    :class="
                      activeSkill.tier === 'Legendary'
                        ? 'text-yellow-400'
                        : activeSkill.tier === 'Epic'
                        ? 'text-purple-400'
                        : 'text-cyan-400'
                    "
                    class="font-bold text-xl"
                  >
                    {{ activeSkill.tier }}
                  </div>
                  <div class="text-gray-400">Tier</div>
                </div>
                <div
                  class="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/30"
                >
                  <div class="text-emerald-400 font-bold text-xl">
                    {{ activeSkill.unlocked }}
                  </div>
                  <div class="text-gray-400">Unlocked</div>
                </div>
              </div>
              <div class="mb-6">
                <div class="text-gray-400 text-sm mb-2">
                  Neural Pathway Description
                </div>
                <div class="text-white leading-relaxed text-lg">
                  {{ activeSkill.description }}
                </div>
              </div>
              <div class="mb-6">
                <div class="text-gray-400 text-sm mb-2">Experience Matrix</div>
                <div class="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    class="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-1000"
                    :style="{
                      width: (activeSkill.xp / activeSkill.maxXp) * 100 + '%',
                    }"
                  ></div>
                </div>
                <div class="text-sm text-gray-400 text-center">
                  {{ activeSkill.xp }}/{{ activeSkill.maxXp }} XP
                </div>
              </div>
              <div
                v-if="
                  activeSkill.connections && activeSkill.connections.length > 0
                "
              >
                <div class="text-gray-400 text-sm mb-2">
                  Connected Neural Nodes
                </div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="conn in activeSkill.connections"
                    :key="conn"
                    class="px-4 py-2 bg-gradient-to-r from-slate-700/80 to-slate-600/80 rounded-full text-sm text-cyan-300 border border-cyan-400/30 font-mono"
                    >{{ conn }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from "vue";
import css3Icon from "~/assets/css-3-svgrepo-com.svg";
import html5Icon from "~/assets/html-5-svgrepo-com.svg";
import jsIcon from "~/assets/js-svgrepo-com.svg";
import vueIcon from "~/assets/vue-svgrepo-com.svg";
import tailwindIcon from "~/assets/tailwind-svgrepo-com.svg";
import reactIcon from "~/assets/react-svgrepo-com.svg";
import typescriptIcon from "~/assets/typescript-svgrepo-com.svg";
import figmaIcon from "~/assets/figma-svgrepo-com.svg";
import gitIcon from "~/assets/git-svgrepo-com.svg";

const visible = ref(false);
const constellationRef = ref(null);
const hoveredSkill = ref(null);
const activeSkill = ref(null);
const unlockedSkills = ref([]); // names of skills to show
const animatedConnections = ref([]);
const svgWidth = ref(1200);
const svgHeight = ref(400);

const skillIcons = {
  HTML: html5Icon,
  CSS: css3Icon,
  JavaScript: jsIcon,
  "Vue 3": vueIcon,
  "Tailwind CSS": tailwindIcon,
  React: reactIcon,
  TypeScript: typescriptIcon,
  Figma: figmaIcon,
  Git: gitIcon,
};

// Skill data (now with all fields)
const skillConstellation = [
  {
    name: "HTML",
    tier: "Rare",
    connections: ["CSS", "JavaScript", "Figma"],
    level: 95,
    category: "Core Foundation",
    mastery: "Markup Master",
    unlocked: "2021",
    xp: 9500,
    maxXp: 10000,
    description:
      "Semantic structure architect. Foundation of web development mastered.",
  },
  {
    name: "CSS",
    tier: "Epic",
    connections: ["HTML", "JavaScript", "Figma"],
    level: 92,
    category: "Design System",
    mastery: "Style Sovereign",
    unlocked: "2021",
    xp: 9200,
    maxXp: 10000,
    description:
      "Visual design mastery. Responsive layouts and modern styling perfected.",
  },
  {
    name: "JavaScript",
    tier: "Legendary",
    connections: ["HTML", "CSS", "Vue 3", "React"],
    level: 85,
    category: "Core Programming",
    mastery: "Script Wielder",
    unlocked: "2022",
    xp: 8500,
    maxXp: 10000,
    description:
      "Dynamic interactions. DOM manipulation. Modern ES6+ features mastered.",
  },
  {
    name: "Vue 3",
    tier: "Legendary",
    connections: ["JavaScript", "Tailwind CSS"],
    level: 78,
    category: "Frontend Framework",
    mastery: "Reactive Developer",
    unlocked: "2023",
    xp: 7800,
    maxXp: 10000,
    description:
      "Currently learning. Composition API and reactive programming in progress.",
  },
  {
    name: "Tailwind CSS",
    tier: "Rare",
    connections: ["CSS", "Vue 3", "React"],
    level: 82,
    category: "CSS Framework",
    mastery: "Utility Master",
    unlocked: "2023",
    xp: 8200,
    maxXp: 10000,
    description:
      "Utility-first approach. Rapid prototyping and responsive design specialist.",
  },
  {
    name: "React",
    tier: "Legendary",
    connections: ["JavaScript", "TypeScript", "Tailwind CSS"],
    level: 65,
    category: "Frontend Framework",
    mastery: "Component Builder",
    unlocked: "2023",
    xp: 6500,
    maxXp: 10000,
    description:
      "Adequate knowledge. Component architecture and hooks understanding.",
  },
  {
    name: "TypeScript",
    tier: "Legendary",
    connections: ["JavaScript", "React"],
    level: 60,
    category: "Programming Language",
    mastery: "Type Explorer",
    unlocked: "2023",
    xp: 6000,
    maxXp: 10000,
    description:
      "Adequate proficiency. Type safety and modern development practices.",
  },
  {
    name: "Figma",
    tier: "Epic",
    connections: ["HTML", "CSS"],
    level: 68,
    category: "Design Tool",
    mastery: "Design Apprentice",
    unlocked: "2022",
    xp: 6800,
    maxXp: 10000,
    description:
      "Adequate design skills. UI/UX prototyping and design system creation.",
  },
  {
    name: "Git",
    tier: "Epic",
    connections: ["JavaScript"],
    level: 88,
    category: "Version Control",
    mastery: "Repository Guardian",
    unlocked: "2021",
    xp: 8800,
    maxXp: 10000,
    description:
      "Version control mastery. Collaboration and code management expert.",
  },
];

// Tier order for appearance
const tierOrder = ["Legendary", "Epic", "Rare"];
const skillPositions = ref([]); // [{x, y, ...skill}]
const backgroundStars = ref([]); // moved to ref for client-only init

// Center-biased random position generator
function generateCenterBiasedPositions(count, minDist, width, height) {
  const positions = [];
  const margin = 60;
  const usableWidth = width - 2 * margin;
  const usableHeight = height - 2 * margin;

  // Create a grid-based distribution for better spacing
  const cols = Math.ceil(Math.sqrt(count * (usableWidth / usableHeight)));
  const rows = Math.ceil(count / cols);
  const cellWidth = usableWidth / cols;
  const cellHeight = usableHeight / rows;

  let skillIndex = 0;

  // Distribute skills across grid cells with randomization
  for (let row = 0; row < rows && skillIndex < count; row++) {
    for (let col = 0; col < cols && skillIndex < count; col++) {
      // Calculate cell boundaries
      const cellLeft = margin + col * cellWidth;
      const cellTop = margin + row * cellHeight;
      // Add random offset within cell (with padding to avoid edges)
      const padding = minDist;
      const x = cellLeft + padding + Math.random() * (cellWidth - 2 * padding);
      const y = cellTop + padding + Math.random() * (cellHeight - 2 * padding);
      // Ensure position is within bounds
      if (
        x >= margin &&
        x <= width - margin &&
        y >= margin &&
        y <= height - margin
      ) {
        positions.push({ x, y });
        skillIndex++;
      }
    }
  }
  return positions;
}

// --- NEW: Only initialize constellation after scroll ---
let hasInitialized = false;

function initConstellation() {
  if (hasInitialized) return;
  hasInitialized = true;

  // Assign center-biased random positions to each skill (client only)
  const positions = generateCenterBiasedPositions(
    skillConstellation.length,
    25,
    svgWidth.value,
    svgHeight.value
  );
  skillPositions.value = skillConstellation.map((skill, i) => ({
    ...skill,
    ...positions[i],
  }));

  // Animate appearance by tier with enhanced timing
  let delay = 0;
  tierOrder.forEach((tier) => {
    const skills = skillConstellation.filter((s) => s.tier === tier);
    skills.forEach((skill, idx) => {
      setTimeout(() => {
        unlockedSkills.value.push(skill.name);

        // If this is the last star, start line animations
        if (unlockedSkills.value.length === skillConstellation.length) {
          setTimeout(() => {
            animateLines();
          }, 500); // Wait 500ms after last star appears
        }
      }, delay + idx * 300); // Increased delay for better visual impact
    });
    delay += skills.length * 300 + 400;
  });
}

// Responsive: update svgWidth/svgHeight and re-init constellation on resize
function updateSvgSizeAndReinit() {
  if (!constellationRef.value) return;
  const rect = constellationRef.value.getBoundingClientRect();
  svgWidth.value = Math.max(400, Math.floor(rect.width));
  svgHeight.value = Math.max(300, Math.floor(rect.height));
  // Only re-generate positions if already initialized
  if (hasInitialized) {
    const positions = generateCenterBiasedPositions(
      skillConstellation.length,
      25,
      svgWidth.value,
      svgHeight.value
    );
    skillPositions.value = skillConstellation.map((skill, i) => ({
      ...skill,
      ...positions[i],
    }));
  }
}

let resizeObserver;

function onScrollInitConstellation() {
  if (window.scrollY > 0) {
    initConstellation();
    window.removeEventListener("scroll", onScrollInitConstellation);
  }
}

onMounted(() => {
  // Fade-in observer (keep as is)
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(document.getElementById("skills-content"));

  // Only initialize constellation after user scrolls
  window.addEventListener("scroll", onScrollInitConstellation, {
    passive: true,
  });

  // If user is already scrolled (e.g. reload mid-page), initialize immediately
  if (window.scrollY > 0) {
    initConstellation();
    window.removeEventListener("scroll", onScrollInitConstellation);
  }

  // Responsive: observe container size
  updateSvgSizeAndReinit();
  resizeObserver = new window.ResizeObserver(() => {
    updateSvgSizeAndReinit();
  });
  if (constellationRef.value) {
    resizeObserver.observe(constellationRef.value);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScrollInitConstellation);
  if (resizeObserver && constellationRef.value) {
    resizeObserver.unobserve(constellationRef.value);
  }
});

// Function to animate lines appearing one by one
function animateLines() {
  const allConnections = visibleConnections.value;
  allConnections.forEach((connection, index) => {
    setTimeout(() => {
      animatedConnections.value.push({
        ...connection,
        animationIndex: index,
      });
    }, index * 200); // 200ms delay between each line
  });
}

// Only show unlocked skills
const visibleSkills = computed(() =>
  skillPositions.value.filter((s) => unlockedSkills.value.includes(s.name))
);
// Only show connections between visible skills
const visibleConnections = computed(() => {
  const nodes = Object.fromEntries(visibleSkills.value.map((s) => [s.name, s]));
  const lines = [];
  visibleSkills.value.forEach((skill) => {
    skill.connections.forEach((conn) => {
      if (nodes[conn] && skill.name < conn) {
        // avoid duplicate lines
        lines.push({
          x1: skill.x,
          y1: skill.y,
          x2: nodes[conn].x,
          y2: nodes[conn].y,
          opacity: 0.5,
        });
      }
    });
  });
  return lines;
});

// Hovered skill object for tooltip
const hoveredSkillObj = computed(() =>
  visibleSkills.value.find((s) => s.name === hoveredSkill.value)
);

// Average mastery calculation
const averageMastery = computed(() => {
  return Math.round(
    skillConstellation.reduce((acc, skill) => acc + skill.level, 0) /
      skillConstellation.length
  );
});

function getTierColor(tier) {
  if (tier === "Legendary") return "#ffe066";
  if (tier === "Epic") return "#7f5cff";
  if (tier === "Rare") return "#00fff0";
  return "#fff";
}
function getTierGlow(tier) {
  if (tier === "Legendary") return "#ffe066";
  if (tier === "Epic") return "#7f5cff";
  if (tier === "Rare") return "#00fff0";
  return "#fff";
}

function animateStarsSequence() {
  // Enhanced star appearance animation
  console.log("Starting enhanced skill constellation animation");
}

function getDataStreamStyle(i) {
  // Pre-calculate positions to avoid random calculations during render
  const positions = [
    { left: 10, height: 250 },
    { left: 25, height: 320 },
    { left: 40, height: 280 },
    { left: 60, height: 300 },
    { left: 75, height: 270 },
    { left: 85, height: 290 },
    { left: 95, height: 310 },
    { left: 15, height: 260 },
  ];

  const pos = positions[i % positions.length];
  return {
    left: `${pos.left}%`,
    height: `${pos.height}px`,
    animationDelay: `${i * 0.5}s`,
    animationDuration: "4s",
  };
}

function getParticleStyle(i) {
  // Pre-calculate positions to avoid random calculations during render
  const positions = [
    { left: 15, top: 20 },
    { left: 35, top: 45 },
    { left: 55, top: 30 },
    { left: 75, top: 60 },
    { left: 25, top: 70 },
    { left: 45, top: 25 },
    { left: 65, top: 50 },
    { left: 85, top: 35 },
    { left: 10, top: 80 },
    { left: 30, top: 15 },
    { left: 50, top: 75 },
    { left: 70, top: 40 },
    { left: 90, top: 65 },
    { left: 20, top: 55 },
    { left: 40, top: 85 },
    { left: 60, top: 10 },
    { left: 80, top: 25 },
    { left: 5, top: 45 },
    { left: 95, top: 75 },
    { left: 12, top: 90 },
  ];

  const pos = positions[i % positions.length];
  return {
    left: `${pos.left}%`,
    top: `${pos.top}%`,
    animationDelay: `${i * 0.15}s`,
    animationDuration: "3s",
  };
}

function getDiamondPath(cx, cy, size) {
  const halfSize = size / 2;
  const curve = size * 0.2; // 20% of size for more rounded corners
  return `M ${cx} ${cy - halfSize}
          Q ${cx + curve} ${cy - halfSize + curve} ${cx + halfSize} ${cy}
          Q ${cx + halfSize - curve} ${cy + curve} ${cx} ${cy + halfSize}
          Q ${cx - curve} ${cy + curve} ${cx - halfSize} ${cy}
          Q ${cx - halfSize + curve} ${cy - curve} ${cx} ${cy - halfSize} Z`;
}

function getTooltipStyle() {
  if (!hoveredSkillObj.value) return { opacity: 0 };

  const skill = hoveredSkillObj.value;
  const skillXPercent = (skill.x / svgWidth.value) * 100;
  const skillYPercent = (skill.y / svgHeight.value) * 100;

  return {
    left: `${skillXPercent}%`,
    top: `${skillYPercent}%`,
    transformOrigin: "center center",
    opacity: 1,
  };
}

function getTooltipPosition() {
  if (!hoveredSkillObj.value) return "top";

  const skill = hoveredSkillObj.value;
  const skillXPercent = (skill.x / svgWidth.value) * 100;
  const skillYPercent = (skill.y / svgHeight.value) * 100;

  // Tooltip dimensions (approximate)
  const tooltipWidth = 200; // min-w-[200px]
  const tooltipHeight = 150; // approximate height
  const containerWidth = svgWidth.value;
  const containerHeight = svgHeight.value;

  // Convert percentages to actual pixels for calculation
  const skillXPx = (skillXPercent / 100) * containerWidth;
  const skillYPx = (skillYPercent / 100) * containerHeight;

  let position = "top"; // default
  let transform = "translate(-50%, -120%)";

  // Check if tooltip fits above (default position)
  const fitsAbove = skillYPx > tooltipHeight + 20;

  if (!fitsAbove) {
    // Priority 1: Try left
    const fitsLeft = skillXPx > tooltipWidth + 20;
    if (fitsLeft) {
      position = "left";
      transform = "translate(-120%, -50%)";
    } else {
      // Priority 2: Try right
      const fitsRight = skillXPx < containerWidth - tooltipWidth - 20;
      if (fitsRight) {
        position = "right";
        transform = "translate(20%, -50%)";
      } else {
        // Priority 3: Bottom (fallback)
        position = "bottom";
        transform = "translate(-50%, 20%)";
      }
    }
  }

  return position;
}

function getTierColorClass(tier) {
  if (tier === "Legendary") return "text-yellow-400";
  if (tier === "Epic") return "text-purple-400";
  if (tier === "Rare") return "text-cyan-400";
  return "";
}
</script>

<style scoped>
/* Optimized fade-in animation */
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Simplified data stream animation */
@keyframes data-stream {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  10%,
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.animate-data-stream {
  animation: data-stream 4s linear infinite;
  will-change: transform;
}

/* Enhanced skill node animations with brightness effects only */
.skill-hidden {
  opacity: 0;
  filter: brightness(0);
  transition: opacity 2s ease-out, filter 2s ease-out;
}

.skill-visible {
  opacity: 1;
  filter: brightness(1);
  transition: opacity 2s ease-out, filter 2s ease-out;
}

/* No hover effects - static diamonds */
.skill-node-group {
  cursor: pointer;
}

/* Star glow breathing effect */
.star-glow {
  animation: star-glow 6s ease-in-out infinite;
}

.star-brightness {
  animation: star-brightness 5s ease-in-out infinite;
}

.star-shimmer {
  animation: star-shimmer 4s ease-in-out infinite;
}

/* Star glow breathing effect */
@keyframes star-glow {
  0%,
  100% {
    opacity: 0.3;
    filter: brightness(1) saturate(1);
  }
  50% {
    opacity: 0.5;
    filter: brightness(1.2) saturate(1.1);
  }
}

@keyframes star-brightness {
  0%,
  100% {
    filter: brightness(1) saturate(1);
  }
  50% {
    filter: brightness(1.15) saturate(1.05);
  }
}

@keyframes star-shimmer {
  0%,
  100% {
    opacity: 0.9;
    filter: brightness(1);
  }
  50% {
    opacity: 1;
    filter: brightness(1.25) saturate(1.1);
  }
}

/* Hardware accelerated transitions */
.transition-all {
  transition: all 0.3s ease;
  will-change: transform, opacity;
}

/* Optimized constellation container */
.constellation-container {
  contain: layout style;
  transform: translateZ(0); /* Force hardware acceleration */
}

/* Remove expensive animations and use simpler alternatives */
.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

/* Optimized responsive design */
@media (max-width: 768px) {
  .skill-node-group {
    transform: scale(0.9);
  }

  .skill-node-group:hover {
    transform: scale(0.95);
  }
}

/* Remove all complex animations and keep only essential ones */
* {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
}

/* Star animations */
.star-pulse {
  animation: star-pulse 2s ease-in-out infinite;
}

.star-shimmer {
  animation: star-shimmer 1.5s ease-in-out infinite;
}

@keyframes star-pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

@keyframes star-shimmer {
  0%,
  100% {
    opacity: 0.9;
    filter: brightness(1);
  }
  50% {
    opacity: 1;
    filter: brightness(1.3);
  }
}

/* Enhanced pulse animation */

/* Tooltip emergence animation with smart positioning */
.tooltip-emerge {
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  transform-origin: center center;
}

.tooltip-top {
  animation-name: tooltip-emerge-top;
}

.tooltip-left {
  animation-name: tooltip-emerge-left;
}

.tooltip-right {
  animation-name: tooltip-emerge-right;
}

.tooltip-bottom {
  animation-name: tooltip-emerge-bottom;
}

.tooltip-content {
  animation: tooltip-content-emerge 0.3s ease-out forwards;
}

@keyframes tooltip-emerge-top {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -120%) scale(1);
  }
}

@keyframes tooltip-emerge-left {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-120%, -50%) scale(1);
  }
}

@keyframes tooltip-emerge-right {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(20%, -50%) scale(1);
  }
}

@keyframes tooltip-emerge-bottom {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 20%) scale(1);
  }
}

@keyframes tooltip-content-emerge {
  0% {
    opacity: 0;
    transform: scale(0.8);
    filter: blur(4px);
  }
  60% {
    opacity: 0.8;
    transform: scale(1.05);
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0px);
  }
}

/* Enhanced skill node animations with brightness effects only */

/* Modal Glitch Effect Animation */
.modal-glitch {
  animation: modal-glitch 0.6s ease-out forwards;
}

@keyframes modal-glitch {
  0% {
    opacity: 0;
    transform: scale(1.1);
    filter: hue-rotate(90deg) saturate(5) brightness(1.5);
    border-color: #ff00ff;
  }
  15% {
    transform: scale(0.9) skew(2deg);
    filter: hue-rotate(180deg) saturate(3) brightness(0.8);
    border-color: #00ffff;
  }
  30% {
    transform: scale(1.05) skew(-1deg);
    filter: hue-rotate(270deg) saturate(4) brightness(1.2);
    border-color: #ffff00;
  }
  45% {
    transform: scale(0.95) skew(1deg);
    filter: hue-rotate(45deg) saturate(2) brightness(0.9);
    border-color: #ff0080;
  }
  60% {
    transform: scale(1.02) skew(-0.5deg);
    filter: hue-rotate(0deg) saturate(1.5) brightness(1.1);
    border-color: #80ff00;
  }
  80% {
    transform: scale(0.98) skew(0.2deg);
    filter: hue-rotate(0deg) saturate(1.2) brightness(1.05);
    border-color: #00ff80;
  }
  100% {
    opacity: 1;
    transform: scale(1) skew(0deg);
    filter: hue-rotate(0deg) saturate(1) brightness(1);
    border-color: rgba(34, 211, 238, 0.3);
  }
}
</style>
