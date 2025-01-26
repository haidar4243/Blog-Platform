<template>
  <header
    class="flex items-center justify-between py-8 px-24 bg-white shadow-md"
  >
    <div class="flex">
      <div class="flex items-center space-x-2">
        <NuxtLink to="/">
          <NuxtImg src="/img/logo.png" class="h-12" />
        </NuxtLink>
      </div>

      <!-- Contact Info -->
      <div class="flex items-center text-sm text-gray-600">
        <phone-icon class="mr-6" />
        <span>+1 (628) 587-3235</span>
      </div>
    </div>

    <div>
      <button
        v-if="!isAuthenticated"
        @click="navigateToLogin"
        class="bg-blue-600 text-white py-1 px-4 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
      <button
        v-else
        @click="logout"
        class="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "~/store/authStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const isAuthenticated = computed(() => !!authStore.user);
const userEmail = computed(() => authStore.user?.email || "");

const navigateToLogin = () => {
  router.push("/auth/login");
};

const logout = () => {
  authStore.logout();
  navigateToLogin();
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
