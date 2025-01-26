<template>
  <div>
    <div class="container mx-auto py-10">
      <div v-if="post" class="bg-white p-6 rounded-lg shadow-lg">
        <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
        <NuxtImg
          :src="post.image"
          alt="Post Image"
          class="w-full h-auto mb-6 rounded-lg"
        />

        <p class="text-gray-600 mb-4">{{ post.description }}</p>
        <p class="text-gray-600 mb-6">{{ post.body }}</p>
      </div>
      <div v-else-if="loading">
        <p>Loading...</p>
      </div>
      <div v-else>
        <p>Error loading post.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useBlogStore } from "~/store/blogStore";
import { useNuxtApp } from "#app";

const route = useRoute();
const blogStore = useBlogStore();
const { $firestore } = useNuxtApp();

const post = ref(null);
const loading = ref(true);

const fetchPost = async () => {
  try {
    await blogStore.fetchPostById(route.params.id);
    post.value = blogStore.post;
  } catch (error) {
    console.error("Error fetching post:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPost();
});
</script>

<style scoped>
/* Add any custom styles here */
</style>
