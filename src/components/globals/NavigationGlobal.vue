<template>
  <nav :class="{ scrolled: isScrolled }">
    <div class="nav-content">
      <img
        src="@/assets/logo.svg"
        alt="Home"
        class="logo"
        @click="goToHome"
      >

      <!-- <ul class="nav-links">
        <li><router-link to="/solutions">Solutions</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul> -->

      <router-link to="/parking" class="cta-button">Park Now</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const isScrolled = ref(false)
const router = useRouter()

function goToHome() {
  router.push('/')
  // or: router.push({ name: 'Home' })
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Navigation */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(251, 251, 253, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    z-index: 1000;
    transition: all 0.3s ease;
}

nav.scrolled {
    background: rgba(251, 251, 253, 0.95);
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.logo {
  height: 20px;
  width: auto;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.logo:hover {
  opacity: 0.8;
}

.nav-links {
    display: flex;
    gap: 40px;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: #1d1d1f;
    font-weight: 400;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #007AFF;
}

.cta-button {
    background: #007AFF;
    color: white;
    padding: 8px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background: #0051D0;
    transform: translateY(-1px);
}
</style>
