<template>
  <nav class="navbar">
    <div class="logo">
      <img src="/assets/logo.svg" alt="Logo" height="40" />
    </div>
    <ul class="nav-links">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/projects">Projects</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: #14213d;
  color: #fff;
}
.logo img {
  height: 40px;
  filter: brightness(0) invert(1);
}
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: #fca311;
}
</style>
