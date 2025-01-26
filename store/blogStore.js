import { defineStore } from "pinia";
import { collection, getDocs, doc, getDoc, addDoc } from "firebase/firestore";
import { useNuxtApp } from "#app";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    posts: [],
    categories: [],
    post: null,
  }),
  actions: {
    async fetchPosts() {
      try {
        const { $firestore } = useNuxtApp();
        const querySnapshot = await getDocs(collection($firestore, "posts"));
        this.posts = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .slice(0, 6);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async fetchCategories() {
      try {
        const { $firestore } = useNuxtApp();
        const querySnapshot = await getDocs(
          collection($firestore, "categories")
        );
        this.categories = querySnapshot.docs.map((doc) => doc.data());
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async fetchPostById(id) {
      try {
        const { $firestore } = useNuxtApp();
        const docRef = doc($firestore, "posts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          this.post = {
            id: docSnap.id,
            ...docSnap.data(),
            image: "https://picsum.photos/800/400",
          };
        } else {
          throw new Error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    },
    async addPost(title, description, imageUrl) {
      if (!title || !description || !imageUrl) {
        throw new Error("All fields are required fk");
      }
      try {
        const { $firestore } = useNuxtApp();
        const newPost = {
          title,
          description,
          imageUrl,
          createdAt: new Date(),
        };
        await addDoc(collection($firestore, "posts"), newPost);
        console.log("Post added successfully");
      } catch (error) {
        console.error("Error adding post:", error);
      }
    },
  },
});
