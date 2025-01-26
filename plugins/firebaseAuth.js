import { defineNuxtPlugin } from "#app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp);
  nuxtApp.provide("auth", auth);
});
