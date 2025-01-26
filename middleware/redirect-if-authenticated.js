import { useAuthStore } from "~/store/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const isAuthenticated = computed(() => !!authStore.user);
  if (isAuthenticated.value) {
    return navigateTo("/");
  }
});
