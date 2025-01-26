import { defineStore } from "pinia";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNuxtApp } from "#app";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(email, password) {
      console.log("Store login action called", { email, password });
      try {
        const { $auth } = useNuxtApp();
        const userCredential = await signInWithEmailAndPassword(
          $auth,
          email,
          password
        );
        this.user = userCredential.user;
        return true;
      } catch (error) {
        console.error("Error logging in:", error);
        return false;
      }
    },
    async logout() {
      try {
        const { $auth } = useNuxtApp();
        await signOut($auth);
        this.user = null;
      } catch (error) {
        console.error("Error logging out:", error);
      }
    },
    initAuth() {
      const { $auth } = useNuxtApp();
      onAuthStateChanged($auth, (user) => {
        this.user = user;
      });
    },
  },
  persist: true,
});
