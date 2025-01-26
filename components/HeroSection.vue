<template>
  <section class="bg-gray-50 py-10">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-4">Events in Minutes Ideas</h2>
      <p class="text-gray-600 mb-6">
        Welcome to our ideas hub where we offer tips, tricks, and inspiration
        for unforgettable events.
      </p>
      <div class="flex justify-center items-center">
        <div class="max-w-lg">
          <NuxtImg
            src="https://picsum.photos/600/400"
            alt="Hero Image"
            class="rounded-lg shadow-lg"
            width="600"
            height="400"
          />
          <div class="text-left mt-4">
            <h3 class="text-xl font-bold">
              How to Plan a Successful Team-Building Retreat for Your Company
            </h3>
            <p class="text-gray-500">
              Learn the art of team-building with these creative and interactive
              ideas that are sure to create lasting memories.
            </p>
            <NuxtLink to="/post/team-building-retreat">
              <button
                class="mt-3 bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700"
              >
                Read More
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({});
</script>

<style>
/* Add any custom styles here */
</style>
