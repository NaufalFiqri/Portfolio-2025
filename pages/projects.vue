<template>
  <Navbar />
  <section class="projects">
    <h2>Projects</h2>
    <p>Check back soon for a showcase of my latest work!</p>
  </section>
  <Footer />
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
.projects {
  max-width: 900px;
  margin: 3rem auto 2rem auto;
  padding: 2rem;
  background: transparent;
  border-radius: 1rem;
  box-shadow: none;
  color: #fff;
}
.projects h2 {
  color: #fca311;
  margin-bottom: 1rem;
}
</style>
