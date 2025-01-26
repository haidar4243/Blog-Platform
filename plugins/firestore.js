import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const firestore = useFirestore();
  nuxtApp.provide("firestore", firestore);
});
