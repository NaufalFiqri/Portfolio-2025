<template>
  <section id="skills" class="relative min-h-screen overflow-hidden">
    <!-- Aurora Gradient Background -->
    <div class="aurora-bg absolute inset-0 z-0 pointer-events-none"></div>
    <!-- Noise Overlay -->
    <div class="noise-overlay absolute inset-0 z-10 pointer-events-none"></div>
    <!-- Particles -->
    <div class="particles absolute inset-0 z-20 pointer-events-none">
      <canvas ref="particlesCanvas" class="w-full h-full"></canvas>
    </div>
    <!-- Main Content -->
    <div
      :class="['relative z-30 pt-8 fade-in-section', { visible }]"
      id="skills-content"
    >
      <div class="text-center mb-10">
        <h2
          class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
        >
          &gt; SKILL_CONSTELLATION.EXE
        </h2>
        <p class="text-md text-cyan-200 max-w-2xl mx-auto">
          Technical mastery mapped across development domains. Each node
          represents earned expertise...
        </p>
      </div>
      <div
        ref="constellationRef"
        class="relative w-full max-w-5xl h-[700px] mx-auto rounded-3xl border border-cyan-400/10 bg-black/30 z-40 overflow-hidden"
      >
        <!-- SVG Star Constellation -->
        <svg
          class="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
          style="z-index: 1"
        >
          <!-- Background faint stars -->
          <circle
            v-for="(star, i) in backgroundStars"
            :key="'bg-star-' + i"
            :cx="star.x"
            :cy="star.y"
            :r="star.r"
            fill="#b5f3ff"
            :opacity="star.opacity"
          />
          <!-- Connection lines -->
          <g>
            <line
              v-for="(conn, i) in visibleConnections"
              :key="'conn-' + i"
              :x1="conn.x1"
              :y1="conn.y1"
              :x2="conn.x2"
              :y2="conn.y2"
              stroke="url(#starLine)"
              stroke-width="2.5"
              :opacity="conn.opacity"
              filter="url(#glow)"
            />
          </g>
          <defs>
            <linearGradient id="starLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#00fff0" stop-opacity="0.7" />
              <stop offset="100%" stop-color="#7f5cff" stop-opacity="0.7" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <!-- Skill Stars -->
          <g>
            <g
              v-for="skill in visibleSkills"
              :key="'star-' + skill.name"
              @mouseenter="hoveredSkill = skill.name"
              @mouseleave="hoveredSkill = null"
              @click.stop="activeSkill = skill"
              style="cursor: pointer"
            >
              <!-- Star glow -->
              <circle
                :cx="skill.x"
                :cy="skill.y"
                :r="hoveredSkill === skill.name ? 72 : 56"
                :fill="getTierGlow(skill.tier)"
                :opacity="hoveredSkill === skill.name ? 0.28 : 0.18"
                filter="url(#glow)"
                style="transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
                :class="[
                  'star-glow',
                  unlockedSkills.includes(skill.name)
                    ? 'star-visible'
                    : 'star-hidden',
                ]"
              />
              <!-- Main star -->
              <circle
                :cx="skill.x"
                :cy="skill.y"
                :r="hoveredSkill === skill.name ? 52 : 40"
                :fill="getTierColor(skill.tier)"
                filter="url(#glow)"
                style="transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
                :class="[
                  'star-main',
                  unlockedSkills.includes(skill.name)
                    ? 'star-visible'
                    : 'star-hidden',
                ]"
              />
              <!-- Star icon: always as emoji/text -->
              <text
                :x="skill.x"
                :y="skill.y + 10"
                text-anchor="middle"
                :font-size="hoveredSkill === skill.name ? 32 : 22"
                font-family="monospace"
                fill="#fff"
                style="
                  pointer-events: none;
                  transition: font-size 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                "
                :class="[
                  'star-icon',
                  unlockedSkills.includes(skill.name)
                    ? 'star-visible'
                    : 'star-hidden',
                ]"
              >
                {{ skill.icon }}
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <!-- Teleport the modal to body so it's always on top -->
    <Teleport to="body">
      <Dialog :open="!!activeSkill" @close="activeSkill = null">
        <DialogOverlay class="fixed inset-0 bg-black/70 z-[9999]" />
        <div class="fixed inset-0 flex items-center justify-center z-[10000]">
          <div
            class="bg-black/95 border border-cyan-400/20 rounded-2xl p-8 w-full max-w-lg text-white shadow-2xl relative animate-fade-in"
          >
            <button
              @click="activeSkill = null"
              class="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 text-2xl"
            >
              &times;
            </button>
            <div v-if="activeSkill">
              <div class="flex items-center gap-4 mb-4">
                <span class="text-4xl">{{ activeSkill.icon }}</span>
                <div>
                  <div class="text-2xl font-bold">{{ activeSkill.name }}</div>
                  <div class="text-yellow-400 font-semibold">
                    {{ activeSkill.mastery }}
                  </div>
                  <div class="text-xs text-cyan-300">
                    {{ activeSkill.category }}
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4 text-sm mb-4">
                <div class="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div class="text-cyan-400 font-bold text-lg">
                    {{ activeSkill.level }}%
                  </div>
                  <div class="text-gray-400">Mastery</div>
                </div>
                <div class="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div
                    :class="
                      activeSkill.tier === 'Legendary'
                        ? 'text-yellow-400'
                        : activeSkill.tier === 'Epic'
                        ? 'text-purple-400'
                        : 'text-cyan-400'
                    "
                    class="font-bold text-lg"
                  >
                    {{ activeSkill.tier }}
                  </div>
                  <div class="text-gray-400">Tier</div>
                </div>
                <div class="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div class="text-emerald-400 font-bold text-lg">
                    {{ activeSkill.unlocked }}
                  </div>
                  <div class="text-gray-400">Unlocked</div>
                </div>
              </div>
              <div class="mb-4">
                <div class="text-gray-400 text-sm mb-1">Skill Description</div>
                <div class="text-white leading-relaxed">
                  {{ activeSkill.description }}
                </div>
              </div>
              <div class="mb-4">
                <div class="text-gray-400 text-sm mb-1">
                  Experience Progress
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2 mb-1">
                  <div
                    class="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                    :style="{
                      width: (activeSkill.xp / activeSkill.maxXp) * 100 + '%',
                    }"
                  ></div>
                </div>
                <div class="text-xs text-gray-400 text-center">
                  {{ activeSkill.xp }}/{{ activeSkill.maxXp }} XP
                </div>
              </div>
              <div
                v-if="
                  activeSkill.connections && activeSkill.connections.length > 0
                "
              >
                <div class="text-gray-400 text-sm mb-1">Connected Skills</div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="conn in activeSkill.connections"
                    :key="conn"
                    class="px-3 py-1 bg-gray-800 rounded-full text-xs text-cyan-300 border border-cyan-400/30"
                    >{{ conn }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Teleport>
    <!-- Custom hover popover -->
    <div
      v-if="hoveredSkillObj && !activeSkill"
      class="absolute z-50 bg-black/90 text-white rounded-lg px-4 py-2 shadow-lg border border-cyan-400/30 pointer-events-none"
      :style="{
        left: `${hoveredSkillObj.x + 40}px`,
        top: `${hoveredSkillObj.y - 30}px`,
        minWidth: '160px',
        maxWidth: '220px',
        transition: 'opacity 0.2s',
      }"
    >
      <div class="font-bold text-lg mb-1 flex items-center gap-2">
        <span class="text-2xl">{{ hoveredSkillObj.icon }}</span>
        {{ hoveredSkillObj.name }}
      </div>
      <div class="text-xs text-cyan-300 mb-1">
        {{ hoveredSkillObj.category }}
      </div>
      <div class="text-xs mb-1">{{ hoveredSkillObj.mastery }}</div>
      <div class="text-xs text-gray-300">{{ hoveredSkillObj.description }}</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { Dialog, DialogOverlay } from "@headlessui/vue";
import { Teleport } from "vue";
// Import SVGs as Vue components from the correct path
import TypeScriptIcon from "~/assets/Icons/typescript-svgrepo-com.svg?component";
import ReactIcon from "~/assets/Icons/react-svgrepo-com.svg?component";
import VueIcon from "~/assets/Icons/vue-svgrepo-com.svg?component";
import TailwindIcon from "~/assets/Icons/tailwind-svgrepo-com.svg?component";
import FigmaIcon from "~/assets/Icons/figma-svgrepo-com.svg?component";
import NodeIcon from "~/assets/Icons/nodejs-icon-svgrepo-com.svg?component";
import GitIcon from "~/assets/Icons/git-svgrepo-com.svg?component";
import GlobeIcon from "~/assets/Icons/rest-api-svgrepo-com.svg?component";
const visible = ref(false);
const constellationRef = ref(null);
const hoveredSkill = ref(null);
const activeSkill = ref(null);
const svgWidth = 1200;
const svgHeight = 700;

// Skill data (now with all fields)
const skillConstellation = [
  {
    name: "TypeScript",
    tier: "Legendary",
    icon: "⚡",
    connections: ["React", "Vue 3", "Node.js"],
    level: 87,
    category: "Core Foundation",
    mastery: "Type Guardian",
    unlocked: "2023",
    xp: 8750,
    maxXp: 10000,
    description:
      "Static analysis. Runtime safety. The foundation of scalable architecture.",
  },
  {
    name: "React",
    tier: "Epic",
    icon: "⚛️",
    connections: ["TypeScript", "Tailwind CSS"],
    level: 89,
    category: "Frontend Mastery",
    mastery: "Component Architect",
    unlocked: "2022",
    xp: 8900,
    maxXp: 10000,
    description:
      "Virtual DOM manipulation. State orchestration. UI harmony achieved.",
  },
  {
    name: "Vue 3",
    tier: "Legendary",
    icon: "🔥",
    connections: ["TypeScript", "REST APIs"],
    level: 94,
    category: "Frontend Mastery",
    mastery: "Reactive Sovereign",
    unlocked: "2021",
    xp: 9400,
    maxXp: 10000,
    description:
      "Composition API mastery. Reactivity perfected. User experience elevated.",
  },
  {
    name: "Tailwind CSS",
    tier: "Legendary",
    icon: "🎨",
    connections: ["React", "Figma"],
    level: 96,
    category: "Design System",
    mastery: "Style Weaver",
    unlocked: "2022",
    xp: 9600,
    maxXp: 10000,
    description:
      "Utility-first philosophy. Design system architect. Pixel-perfect execution.",
  },
  {
    name: "Figma",
    tier: "Rare",
    icon: "✨",
    connections: ["Tailwind CSS"],
    level: 82,
    category: "Design System",
    mastery: "Interface Sculptor",
    unlocked: "2022",
    xp: 8200,
    maxXp: 10000,
    description:
      "Design thinking. Prototype to production. Visual communication mastered.",
  },
  {
    name: "Node.js",
    tier: "Rare",
    icon: "🔧",
    connections: ["TypeScript", "REST APIs"],
    level: 78,
    category: "Backend Systems",
    mastery: "Runtime Controller",
    unlocked: "2023",
    xp: 7800,
    maxXp: 10000,
    description:
      "Server architecture. Event-driven design. Performance optimization core.",
  },
  {
    name: "REST APIs",
    tier: "Epic",
    icon: "🌐",
    connections: ["Vue 3", "Node.js", "Git"],
    level: 85,
    category: "Data Integration",
    mastery: "Protocol Master",
    unlocked: "2022",
    xp: 8500,
    maxXp: 10000,
    description:
      "HTTP mastery. Data flow architect. Service integration expert.",
  },
  {
    name: "Git",
    tier: "Epic",
    icon: "📚",
    connections: ["REST APIs"],
    level: 91,
    category: "Version Control",
    mastery: "Timeline Keeper",
    unlocked: "2021",
    xp: 9100,
    maxXp: 10000,
    description:
      "Version history mastery. Collaboration flow. Merge conflict resolver.",
  },
];

// Tier order for appearance
const tierOrder = ["Legendary", "Epic", "Rare"];
const skillPositions = ref([]); // [{x, y, ...skill}]
const unlockedSkills = ref([]); // names of skills to show
const backgroundStars = ref([]); // moved to ref for client-only init

// Center-biased random position generator
function generateCenterBiasedPositions(count, minDist) {
  const positions = [];
  let attempts = 0;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const maxRadius = Math.min(svgWidth, svgHeight) * 0.45; // increased from 0.35 for more spread
  while (positions.length < count && attempts < 2000) {
    // Polar coordinates for center bias
    const angle = Math.random() * 2 * Math.PI;
    const radius =
      Math.sqrt(Math.random()) * maxRadius * (0.5 + 0.5 * Math.random()); // reduced center bias from 0.7 to 0.5
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    // Keep within bounds
    if (x < 80 || x > svgWidth - 80 || y < 80 || y > svgHeight - 80) {
      attempts++;
      continue;
    }
    const tooClose = positions.some((pos) => {
      const dx = pos.x - x;
      const dy = pos.y - y;
      return Math.sqrt(dx * dx + dy * dy) < minDist;
    });
    if (!tooClose) {
      positions.push({ x, y });
    }
    attempts++;
  }
  return positions;
}

// Animate skill appearance by tier and generate random positions only on client
onMounted(() => {
  // Fade-in observer
  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        // Start the star animation sequence after a brief delay
        setTimeout(() => {
          animateStarsSequence();
        }, 500);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(document.getElementById("skills-content"));

  // Assign center-biased random positions to each skill (client only)
  const positions = generateCenterBiasedPositions(
    skillConstellation.length,
    120
  );
  skillPositions.value = skillConstellation.map((skill, i) => ({
    ...skill,
    ...positions[i],
  }));

  // Generate faint background stars (client only)
  backgroundStars.value = Array.from({ length: 32 }, () => ({
    x: Math.random() * svgWidth,
    y: Math.random() * svgHeight,
    r: 1 + Math.random() * 2,
    opacity: 0.08 + Math.random() * 0.12,
  }));

  // Animate appearance by tier
  let delay = 0;
  tierOrder.forEach((tier) => {
    const skills = skillConstellation.filter((s) => s.tier === tier);
    skills.forEach((skill, idx) => {
      setTimeout(() => {
        unlockedSkills.value.push(skill.name);
      }, delay + idx * 200);
    });
    delay += skills.length * 200 + 200;
  });
});

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

// Hovered skill object for popover
const hoveredSkillObj = computed(() =>
  skillPositions.value.find((s) => s.name === hoveredSkill.value)
);

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
</script>

<style scoped>
.aurora-bg {
  background: radial-gradient(ellipse at 30% 0%, #7f5cff 0%, transparent 60%),
    radial-gradient(ellipse at 70% 100%, #00ffd0 0%, transparent 60%),
    linear-gradient(180deg, #3b2f7f 0%, #0a0f1c 50%, #00ffd0 100%);
  animation: auroraMove2 16s linear infinite alternate;
  z-index: 1;
}
@keyframes auroraMove2 {
  0% {
    background-position: 30% 0%, 70% 100%, 0% 0%;
  }
  100% {
    background-position: 40% 10%, 60% 90%, 100% 100%;
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
.fade-in-section {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1),
    transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Star animation classes */
.star-hidden {
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.star-visible {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.star-glow.star-visible {
  animation: starGlow 1.2s ease-out;
}

.star-main.star-visible {
  animation: starAppear 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.star-icon.star-visible {
  animation: iconPop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    calc(0.2s + var(--random-delay, 0) * 0.1s) backwards;
}

@keyframes starGlow {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.18;
    transform: scale(1);
  }
}

@keyframes starAppear {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  70% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes iconPop {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  60% {
    opacity: 1;
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
