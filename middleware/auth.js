// filepath: /Users/macbookpro/Work/Blog-Platform/middleware/auth.js
import { useAuthStore } from "~/store/authStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const isAuthenticated = computed(() => !!authStore.user);
  if (!isAuthenticated.value && to.path.startsWith("/admin")) {
    return navigateTo("/auth/login");
  }
});
