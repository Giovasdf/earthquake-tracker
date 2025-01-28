<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="bg-gray-800 text-white shadow-md">
    <div class="container mx-auto flex items-center justify-between py-4 px-6">

      <nav class="flex space-x-6">
        <RouterLink to="/" class="hover:text-primary transition-colors" active-class="font-bold underline">
          Home
        </RouterLink>
        <RouterLink to="/about" class="hover:text-primary transition-colors" active-class="font-bold underline">
          About
        </RouterLink>
      </nav>
    </div>
  </header>

  <main class="container mx-auto my-8 px-6">
    <RouterView />
  </main>

  <footer class="bg-gray-800 text-white text-center py-4">
    <p>
      &copy; {{ new Date().getFullYear() }} Earthquake Tracker | Powered by Vue 3 and Leaflet
    </p>
  </footer>
</template>

<style></style>
