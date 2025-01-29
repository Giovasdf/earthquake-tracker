<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100 text-gray-800">
    <!-- Header -->
    <header class="bg-gray-800 text-white shadow-md">
      <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 class="text-xl font-bold">
          Earthquake Tracker
        </h1>
        <nav class="flex space-x-4">
          <RouterLink to="/" class="hover:text-primary transition-colors" active-class="font-bold underline">
            Home
          </RouterLink>

        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow container mx-auto py-8 px-6">
      <RouterView />
    </main>


  </div>
</template>
