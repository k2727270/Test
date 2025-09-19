<script setup>
import NavigationComponent from './components/globals/NavigationGlobal.vue'
import FooterGlobal from './components/globals/FooterGlobal.vue'
</script>

<template>
  <header>
    <NavigationComponent />
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    <FooterGlobal />
  </footer>
</template>

<style scoped>
main {
  padding-top: 75px;
  padding-bottom: 50px;
}
</style>
