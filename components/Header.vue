<template>
  <header class="bg-white shadow-md p-4 flex justify-between items-center">
    <div class="flex items-center space-x-4">
      <NuxtImg
        src="https://picsum.photos/200/300"
        alt="Event Logo"
        class="w-16"
        width="64"
        height="64"
      />
      <h1 class="text-lg font-bold">Event Ideas</h1>
    </div>
    <nav>
      <ul class="flex space-x-4">
        <li><NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink></li>
        <li>
          <NuxtLink to="/about" class="hover:text-blue-600">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:text-blue-600">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
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

const navigateToLogin = () => {
  router.push("/auth/login");
};

const logout = () => {
  authStore.logout();
};
</script>

<style>
/* Add any custom styles here */
</style>
