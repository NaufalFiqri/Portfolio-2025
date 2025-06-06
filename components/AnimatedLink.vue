<template>
  <a :href="href" class="animated-link">
    <slot />
    <span class="underline"></span>
  </a>
</template>

<script setup>
defineProps({ href: String });
</script>

<style scoped>
.animated-link {
  position: relative;
  color: #fca311;
  text-decoration: none;
  font-weight: 600;
}
.underline {
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: #fca311;
  transform: scaleX(0);
  transition: transform 0.3s;
}
.animated-link:hover .underline {
  transform: scaleX(1);
}
</style>
