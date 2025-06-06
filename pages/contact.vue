<template>
  <Navbar />
  <section class="contact">
    <h2>Contact</h2>
    <p>
      Let's connect! Email me at
      <a href="mailto:your@email.com">your@email.com</a> or reach out on social
      media.
    </p>
  </section>
  <Footer />
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
.contact {
  max-width: 700px;
  margin: 3rem auto 2rem auto;
  padding: 2rem;
  background: transparent;
  border-radius: 1rem;
  box-shadow: none;
  color: #fff;
}
.contact h2 {
  color: #fca311;
  margin-bottom: 1rem;
}
.contact a {
  color: #fca311;
  text-decoration: underline;
}
</style>
