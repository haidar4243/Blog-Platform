<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden w-full">
    <div class="">
      <NuxtImg
        src="/img/heroSection.png"
        :alt="title"
        loading="lazy"
        width="600"
        height="400"
      />
    </div>
    <div class="p-4">
      <p class="text-gray-500 text-sm mb-2">{{ date }}</p>
      <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ title }}</h3>
      <p class="text-gray-600 text-sm line-clamp-3">{{ description }}</p>
      <NuxtLink :to="`/post/${id}`" class="text-blue-600 hover:underline">
        Read More
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Add any custom styles here */
.aspect-w-16 {
  aspect-ratio: 16 / 9;
}
.aspect-h-9 {
  aspect-ratio: 16 / 9;
}
</style>
