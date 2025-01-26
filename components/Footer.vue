<template>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto flex justify-between">
      <p>&copy; 2025 Event Ideas. All rights reserved.</p>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/privacy-policy" class="hover:underline"
              >Privacy Policy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/terms-of-use" class="hover:underline"
              >Terms of Use</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup>
defineProps({});
</script>

<style>
/* Add any custom styles here */
</style>
