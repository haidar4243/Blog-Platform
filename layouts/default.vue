<template>
  <div>
    <Header />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
</script>

<style>
html,
body,
#__nuxt {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
}
</style>
