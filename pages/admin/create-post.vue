<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-purple-100 p-12 rounded-lg shadow-md w-full max-w-2xl">
      <h1 class="text-4xl font-bold mb-6 text-center text-purple-700">
        Create Post
      </h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-6">
          <label class="block text-gray-700 mb-2">Title</label>
          <input
            v-model="title"
            type="text"
            class="w-full p-3 border rounded"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 mb-2">Description</label>
          <textarea
            v-model="description"
            class="w-full p-3 border rounded"
          ></textarea>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 mb-2">Image URL</label>
          <input
            v-model="imageUrl"
            type="text"
            class="w-full p-3 border rounded"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-purple-600 text-white py-3 px-4 rounded hover:bg-purple-700 transition duration-200"
        >
          Add Post
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBlogStore } from "~/store/blogStore";

const title = ref("");
const description = ref("");
const imageUrl = ref("");
const blogStore = useBlogStore();

const handleSubmit = async () => {
  try {
    await blogStore.addPost(title.value, description.value, imageUrl.value);
    alert("Post added successfully");
    title.value = "";
    description.value = "";
    imageUrl.value = "";
  } catch (error) {
    alert(error.message);
  }
};
definePageMeta({
  middleware: "auth",
});
</script>
