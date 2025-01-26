<template>
  <section class="py-10 bg-white">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-6 text-center">Popular Articles</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="article in articles"
          :key="article.id"
          class="bg-gray-100 rounded-lg p-4 shadow-md"
        >
          <NuxtImg
            :src="article.image"
            :alt="article.title"
            class="rounded-md mb-4"
            width="200"
            height="300"
            loading="lazy"
          />
          <h3 class="text-lg font-bold mb-2">{{ article.title }}</h3>
          <p class="text-gray-500 mb-4 line-clamp-4">{{ article.body }}</p>
          <NuxtLink
            :to="`/post/${article.id}`"
            class="text-blue-600 hover:underline"
            >Read More</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useBlogStore } from "~/store/blogStore";

const blogStore = useBlogStore();

const articles = computed(() => blogStore.posts);

onMounted(() => {
  blogStore.fetchPosts();
});
</script>

<style>
/* Add any custom styles here */
</style>
