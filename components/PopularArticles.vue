<template>
  <section class="py-10 w-full flex flex-col flex-1">
    <div class="px-[100px] w-full">
      <h2 class="text-3xl font-bold mb-20">Popular Articles</h2>
      <div class="flex gap-8 w-full">
        <Card
          v-for="article in articles"
          :key="article.id"
          :id="article.id"
          :image="article.image"
          :title="article.title"
          :description="article.description"
          :date="article.date"
          :category="article.category"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAsyncData } from "nuxt/app";
import { useBlogStore } from "~/store/blogStore";
import Card from "~/components/Card.vue";

const blogStore = useBlogStore();

const { data: articles } = await useAsyncData("posts", async () => {
  await blogStore.fetchPosts();
  return blogStore.posts;
});
</script>

<style scoped></style>
