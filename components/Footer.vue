<template>
  <footer class="footer">
    <div>
      <!-- <img src="/assets/logo.svg" alt="Logo" height="24" style="opacity: 0.7" /> -->
    </div>
    <div>
      © {{ new Date().getFullYear() }} Naufal Fiqri. All rights reserved.
    </div>
    <div class="socials">
      <a href="https://github.com/yourusername" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/yourusername" target="_blank"
        >LinkedIn</a
      >
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 1rem 1rem 1rem;
  background: #14213d;
  color: #fff;
  font-size: 1rem;
  margin-top: 3rem;
}
.socials {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
}
.socials a {
  color: #fca311;
  text-decoration: none;
  font-weight: 600;
}
.socials a:hover {
  text-decoration: underline;
}
.footer img {
  filter: brightness(0) invert(1);
}
</style>
