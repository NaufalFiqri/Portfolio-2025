<template>
  <Navbar />
  <section class="about">
    <h2>About Me</h2>
    <p>
      Hi! I'm Naufal, a passionate developer and designer who loves building
      delightful digital experiences. I enjoy working with modern web
      technologies and creating products that make a difference.
    </p>
    <FunFacts />
  </section>
  <Footer />
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import FunFacts from "~/components/FunFacts.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
.about {
  max-width: 700px;
  margin: 3rem auto 2rem auto;
  padding: 2rem;
  background: transparent;
  border-radius: 1rem;
  box-shadow: none;
  color: #fff;
}
.about h2 {
  color: #fca311;
  margin-bottom: 1rem;
}
</style>
