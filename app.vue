<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { useAuthStore } from "~/store/authStore";

const authStore = useAuthStore();
authStore.initAuth();
</script>
