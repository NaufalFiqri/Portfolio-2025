<template>
  <section
    id="contact"
    class="relative py-32 bg-gradient-to-b from-black to-slate-900"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-20">
        <h2
          class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
        >
          &gt; FINAL_SYNC.EXE
        </h2>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          Cracked command terminal sprouting digital moss. Initialize contact
          protocols.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Terminal Interface -->
        <div class="relative">
          <div
            class="bg-gradient-to-br from-slate-900/90 to-black/90 backdrop-blur-sm border border-emerald-500/30 rounded-lg overflow-hidden"
          >
            <!-- Terminal Header -->
            <div
              class="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-emerald-500/20"
            >
              <div class="flex items-center space-x-3">
                <Icon name="lucide:terminal" class="w-5 h-5 text-emerald-400" />
                <span class="text-emerald-400 font-mono text-sm"
                  >contact_terminal.sh</span
                >
              </div>
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
            </div>

            <!-- Terminal Output -->
            <div class="p-6 h-64 overflow-y-auto bg-black/50">
              <div
                v-for="(line, index) in terminalOutput"
                :key="index"
                class="text-emerald-400 font-mono text-sm mb-1"
              >
                {{ line }}
              </div>
              <div class="flex items-center text-emerald-400 font-mono text-sm">
                <span class="mr-2">$</span>
                <div class="w-2 h-4 bg-emerald-400 animate-pulse"></div>
              </div>
            </div>
          </div>

          <!-- Moss Effect -->
          <div
            class="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl"
          ></div>
          <div
            class="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-xl"
          ></div>
        </div>

        <!-- Contact Form -->
        <div class="relative">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label
                class="block text-cyan-400 font-mono text-sm mb-2 uppercase tracking-wider"
              >
                Identification_String
              </label>
              <input
                v-model="formData.name"
                type="text"
                name="name"
                class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                placeholder="Enter your designation..."
                required
              />
            </div>

            <div>
              <label
                class="block text-cyan-400 font-mono text-sm mb-2 uppercase tracking-wider"
              >
                Communication_Channel
              </label>
              <input
                v-model="formData.email"
                type="email"
                name="email"
                class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                placeholder="your@signal.frequency"
                required
              />
            </div>

            <div>
              <label
                class="block text-cyan-400 font-mono text-sm mb-2 uppercase tracking-wider"
              >
                Data_Transmission
              </label>
              <textarea
                v-model="formData.message"
                name="message"
                rows="5"
                class="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all duration-300 resize-none"
                placeholder="Encode your message here..."
                required
              />
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              :class="[
                'w-full py-4 px-6 rounded-lg font-bold text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3',
                isSubmitting
                  ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse'
                  : 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400',
              ]"
            >
              <div
                v-if="isSubmitting"
                class="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"
              ></div>
              <Icon v-else name="lucide:send" class="w-5 h-5" />
              <span>{{
                isSubmitting ? "BEAMING UP..." : "INITIATE BEAM UP"
              }}</span>
            </button>
          </form>

          <!-- Contact Links -->
          <div class="mt-12 grid grid-cols-2 gap-6">
            <NuxtLink
              to="https://github.com/naufalfiqri"
              target="_blank"
              external
              class="group flex items-center space-x-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-600/30 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
            >
              <Icon
                name="lucide:github"
                class="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <div class="text-white font-medium">GitHub</div>
                <div class="text-gray-400 text-sm">@naufalfiqri</div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="https://linkedin.com/in/naufalfiqri"
              target="_blank"
              external
              class="group flex items-center space-x-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-600/30 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
            >
              <Icon
                name="lucide:linkedin"
                class="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <div class="text-white font-medium">LinkedIn</div>
                <div class="text-gray-400 text-sm">Professional Network</div>
              </div>
            </NuxtLink>

            <NuxtLink
              to="mailto:naufalfiqrifauzi@gmail.com"
              class="group flex items-center space-x-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-600/30 rounded-lg hover:border-cyan-500/50 transition-all duration-300"
            >
              <Icon
                name="lucide:mail"
                class="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <div class="text-white font-medium">Direct Mail</div>
                <div class="text-gray-400 text-sm">Primary Channel</div>
              </div>
            </NuxtLink>

            <div
              class="group flex items-center space-x-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-600/30 rounded-lg"
            >
              <Icon name="lucide:map-pin" class="w-6 h-6 text-cyan-400" />
              <div>
                <div class="text-white font-medium">Location</div>
                <div class="text-gray-400 text-sm">Global Remote</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";

// Reactive form data
const formData = reactive({
  name: "",
  email: "",
  message: "",
});

// Terminal output state
const terminalOutput = ref([
  "> Initializing Contact Protocol...",
  "> Syncing with Naufal Terminal...",
  "> Ready for incoming transmissions",
]);

// Submission state
const isSubmitting = ref(false);

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true;

  // Simulate terminal processing
  const processingMessages = [
    "> Processing transmission...",
    "> Validating credentials...",
    "> Establishing secure connection...",
    "> Message queued for delivery...",
    "> Beam up sequence initiated...",
    "> Transmission successful!",
  ];

  // Add processing messages with delay
  for (let i = 0; i < processingMessages.length; i++) {
    setTimeout(() => {
      terminalOutput.value.push(processingMessages[i]);
    }, i * 500);
  }

  // Reset form after processing
  setTimeout(() => {
    isSubmitting.value = false;
    formData.name = "";
    formData.email = "";
    formData.message = "";

    // Add completion message
    setTimeout(() => {
      terminalOutput.value.push("> Ready for new transmissions...");
    }, 500);
  }, 3000);
};
</script>

<style scoped>
/* Additional custom styles if needed */
.terminal-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

/* Scrollbar styling for terminal */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 0.5);
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(16, 185, 129, 0.7);
}
</style>
