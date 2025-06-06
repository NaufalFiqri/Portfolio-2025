<template>
  <Navbar />
  <section class="not-found">
    <h2>404 - Page Not Found</h2>
    <p>
      Oops! Looks like you took a wrong turn.
      <NuxtLink to="/">Go back home</NuxtLink>
    </p>
  </section>
  <Footer />
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
.not-found {
  max-width: 600px;
  margin: 5rem auto 2rem auto;
  padding: 2rem;
  background: transparent;
  border-radius: 1rem;
  box-shadow: none;
  color: #fff;
  text-align: center;
}
.not-found h2 {
  color: #fca311;
  margin-bottom: 1rem;
}
.not-found a {
  color: #fca311;
  text-decoration: underline;
}
</style>
