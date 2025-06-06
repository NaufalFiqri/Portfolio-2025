<template>
  <div v-if="false" class="loader-overlay">
    <img src="/assets/NFGif.gif" alt="Loading..." class="loader-gif" />
  </div>
</template>

<script setup>
defineProps({ show: Boolean });
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  z-index: 9999;
  inset: 0;
  background: rgba(20, 33, 61, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader-gif {
  width: 80px;
  height: 80px;
}
</style>
