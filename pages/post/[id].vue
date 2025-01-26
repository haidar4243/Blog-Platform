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
        <p class="text-gray-500 mb-2">
          Post ID: <span class="font-semibold">{{ route.params.id }}</span>
        </p>
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

const route = useRoute();
const blogStore = useBlogStore();
const loading = ref(true);

const post = computed(() => blogStore.post);

onMounted(async () => {
  await blogStore.fetchPostById(route.params.id);
  loading.value = false;
});
</script>

<style>
/* Add any custom styles here */
.container {
  max-width: 800px;
}
</style>
