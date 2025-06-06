<template>
  <section
    class="relative w-full max-w-4xl mx-auto p-6 bg-carbon-fiber rounded-2xl shadow-xl overflow-hidden border border-cyan-500/30"
  >
    <!-- Nameplate -->
    <div class="flex items-center gap-4 mb-6">
      <span
        class="font-orbitron text-cyan-300 text-xl tracking-widest glow mt-2"
        >📛 Naufal Fiqri — Lvl 24 Developer</span
      >
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-12 gap-6 mb-8">
      <!-- CLASS -->
      <div class="col-span-3 flex flex-col gap-2">
        <div class="font-orbitron text-cyan-400 text-lg">CLASS</div>
        <div class="font-orbitron text-cyan-200">Web Developer</div>
        <div class="font-orbitron text-cyan-200">Frontend Dev</div>
      </div>
      <!-- STATS -->
      <div class="col-span-5 flex flex-col gap-3">
        <div class="font-orbitron text-cyan-400 text-lg mb-1">STATS</div>
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="flex items-center gap-2 group relative"
        >
          <span class="font-orbitron text-cyan-200 w-24">{{ stat.name }}</span>
          <div
            class="flex-1 h-4 bg-cyan-900/40 rounded-full overflow-hidden relative"
          >
            <div
              class="h-full rounded-full transition-all duration-1000 ease-out cyber-bar"
              :style="{
                width: revealed ? stat.percent + '%' : '0%',
                background: stat.gradient,
              }"
              @mouseenter="showTooltip(stat)"
              @mouseleave="hideTooltip"
            ></div>
          </div>
          <span class="font-orbitron text-cyan-300 ml-2">{{
            revealed ? stat.percent + "%" : ""
          }}</span>
          <!-- Tooltip -->
          <div
            v-if="tooltipStat === stat"
            class="absolute left-0 top-8 bg-cyan-950/90 text-cyan-100 px-3 py-1 rounded shadow-lg font-inter text-xs animate-fade-in"
          >
            {{ stat.tooltip }}
          </div>
        </div>
      </div>
      <!-- PERKS -->
      <div class="col-span-4 flex flex-col gap-2">
        <div class="font-orbitron text-cyan-400 text-lg mb-1">PERKS</div>
        <div class="flex flex-wrap gap-2">
          <span v-for="perk in perks" :key="perk" class="perk-tag"
            >🎓 {{ perk }}</span
          >
        </div>
      </div>
    </div>

    <!-- TRAITS & RACE -->
    <div class="flex items-center justify-between mb-8">
      <div class="flex gap-4">
        <span
          v-for="trait in traits"
          :key="trait.label"
          class="trait-icon pulse"
        >
          <span :title="trait.label">{{ trait.icon }}</span>
        </span>
      </div>
      <div class="font-orbitron text-cyan-300 flex items-center gap-2">
        <span>HUMAN</span> <span class="text-lg">+</span> <span>💪</span>
      </div>
    </div>

    <!-- SIDE QUESTS -->
    <div>
      <div class="font-orbitron text-cyan-400 text-lg mb-2">SIDE QUESTS</div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="quest in sideQuests"
          :key="quest.title"
          class="side-quest-card pulse-hover cursor-pointer"
          @click="openQuest(quest)"
        >
          <span class="text-2xl">{{ quest.icon }}</span>
          <span class="block font-orbitron text-cyan-200 mt-1">{{
            quest.title
          }}</span>
        </div>
      </div>
    </div>

    <!-- Neon Roots SVG at bottom -->
    <svg class="absolute left-0 bottom-0 w-full h-24 z-0" viewBox="0 0 600 100">
      <path
        d="M300,100 Q320,80 340,100 Q360,80 380,100 Q400,80 420,100 Q440,80 460,100 Q480,80 500,100"
        stroke="#0ff"
        stroke-width="3"
        fill="none"
        filter="url(#glow)"
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

    <!-- Modal for Side Quest -->
    <div
      v-if="modalQuest"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
    >
      <div
        class="bg-carbon-fiber border border-cyan-500/40 rounded-2xl p-8 max-w-md w-full relative animate-fade-in"
      >
        <button
          class="absolute top-2 right-2 text-cyan-300 text-2xl"
          @click="closeQuest"
        >
          ×
        </button>
        <img
          :src="modalQuest.image"
          alt=""
          class="w-full h-40 object-cover rounded-lg mb-4"
        />
        <div class="font-orbitron text-cyan-200 text-lg mb-2">
          {{ modalQuest.title }}
        </div>
        <div class="font-serif text-cyan-100 mb-2 italic">
          "{{ modalQuest.quote }}"
        </div>
        <div class="font-inter text-cyan-100 text-sm">
          {{ modalQuest.story }}
        </div>
      </div>
    </div>

    <!-- Section Title Overlay -->
    <div
      class="absolute left-4 top-2 text-cyan-500 font-orbitron text-sm tracking-widest opacity-80 z-30"
    >
      📍 PROFILE CORE: Identity Sequence
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const stats = [
  {
    name: "Vue 3",
    percent: 89,
    gradient: "linear-gradient(90deg, #06b6d4 0%, #67e8f9 100%)",
    tooltip: "Mastered Blade",
  },
  {
    name: "Tailwind",
    percent: 94,
    gradient: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)",
    tooltip: "Style Virtuoso",
  },
  {
    name: "React",
    percent: 78,
    gradient: "linear-gradient(90deg, #38bdf8 0%, #7dd3fc 100%)",
    tooltip: "Component Alchemist",
  },
  {
    name: "API Work",
    percent: 80,
    gradient: "linear-gradient(90deg, #818cf8 0%, #a5b4fc 100%)",
    tooltip: "Data Whisperer",
  },
  {
    name: "IoT Dash",
    percent: 65,
    gradient: "linear-gradient(90deg, #f472b6 0%, #f9a8d4 100%)",
    tooltip: "Signal Tamer",
  },
];
const perks = ["React MUI", "PM Basics", "SEO Cert"];
const traits = [
  { icon: "🌱", label: "Explorer" },
  { icon: "🤝", label: "Collaborator" },
  { icon: "🧠", label: "Problem Solver" },
  { icon: "💡", label: "Systems Thinker" },
];
const sideQuests = [
  {
    icon: "⚽",
    title: "Football",
    image: "/sidequests/football.jpg",
    quote: "Football taught me how to trust systems under pressure.",
    story:
      "Years of playing as a midfielder made me value teamwork and quick decision-making.",
  },
  {
    icon: "🏍️",
    title: "Superbikes",
    image: "/sidequests/bike.jpg",
    quote: "Speed sharpens focus.",
    story: "Riding superbikes is my meditation and adrenaline rush.",
  },
  {
    icon: "🏃",
    title: "Marathons",
    image: "/sidequests/marathon.jpg",
    quote: "Endurance is a mindset.",
    story: "Long runs taught me to break big goals into small steps.",
  },
  {
    icon: "🕹️",
    title: "RPG Games",
    image: "/sidequests/games.jpg",
    quote: "Every quest is a lesson.",
    story: "RPGs shaped my love for stories and systems.",
  },
  {
    icon: "🏕️",
    title: "Nature Hikes",
    image: "/sidequests/hike.jpg",
    quote: "Nature resets the mind.",
    story: "Hiking is how I reconnect and recharge.",
  },
  {
    icon: "🚘",
    title: "Car Lover",
    image: "/sidequests/car.jpg",
    quote: "Engineering in motion.",
    story: "Cars are my passion for design and mechanics.",
  },
];

const revealed = ref(false);
const tooltipStat = ref<any>(null);
const modalQuest = ref<any>(null);

function showTooltip(stat: any) {
  tooltipStat.value = stat;
}
function hideTooltip() {
  tooltipStat.value = null;
}
function openQuest(quest: any) {
  modalQuest.value = quest;
  // Optionally play sound FX here
}
function closeQuest() {
  modalQuest.value = null;
}
onMounted(() => {
  setTimeout(() => (revealed.value = true), 500);
});
</script>

<style scoped>
.bg-carbon-fiber {
  background: repeating-linear-gradient(
    135deg,
    #23272a 0 8px,
    #181a1b 8px 16px
  );
}
.glow {
  text-shadow: 0 0 8px #0ff, 0 0 16px #0ff;
}
.font-orbitron {
  font-family: "Orbitron", sans-serif;
}
.font-inter {
  font-family: "Inter", sans-serif;
}
.font-serif {
  font-family: serif;
}
.perk-tag {
  background: rgba(34, 211, 238, 0.12);
  border: 1px solid #67e8f9;
  color: #67e8f9;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.95rem;
  font-family: "Orbitron", sans-serif;
  box-shadow: 0 0 8px #0ff2, 0 0 2px #0ff2;
  transition: background 0.2s, box-shadow 0.2s;
}
.perk-tag:hover {
  background: #0ff2;
  color: #23272a;
  box-shadow: 0 0 16px #0ff, 0 0 32px #0ff;
}
.trait-icon {
  font-size: 2rem;
  color: #67e8f9;
  filter: drop-shadow(0 0 8px #0ff);
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  background: rgba(34, 211, 238, 0.08);
  border: 1px solid #67e8f9;
  margin-right: 0.5rem;
  animation: pulse-trait 2.5s infinite alternate;
}
@keyframes pulse-trait {
  0% {
    filter: drop-shadow(0 0 8px #0ff);
  }
  100% {
    filter: drop-shadow(0 0 16px #0ff);
  }
}
.pulse {
  animation: pulse-trait 2.5s infinite alternate;
}
.side-quest-card {
  background: rgba(34, 211, 238, 0.1);
  border: 1px solid #67e8f9;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  min-width: 120px;
  text-align: center;
  box-shadow: 0 0 8px #0ff2;
  transition: box-shadow 0.4s, background 0.4s;
  font-family: "Orbitron", sans-serif;
  position: relative;
}
.pulse-hover:hover {
  box-shadow: 0 0 24px #0ff, 0 0 48px #0ff;
  background: #0ff2;
  color: #23272a;
  animation: pulse-bar 2s infinite alternate;
}
.cyber-bar {
  box-shadow: 0 0 8px #0ff, 0 0 16px #0ff;
  filter: brightness(1.2);
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.animate-fade-in {
  animation: fade-in 0.5s;
}
</style>
