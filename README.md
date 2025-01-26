# Blog Platform

This is a Blog Platform built with Nuxt.js, Pinia, and Firebase. The platform allows users to read blog posts and provides an admin interface for managing posts. Firebase is used for authentication and storing blog posts.

## Features

- User authentication with Firebase
- Admin interface for managing blog posts
- Responsive design with Tailwind CSS
- Image optimization with Nuxt Image
- Data caching with Nuxt's built-in techniques

## Admin Credentials

- **Email:** admin@gmail.com
- **Password:** password

## Technologies Used

- **Nuxt.js:** A progressive framework based on Vue.js
- **Pinia:** A state management library for Vue.js
- **Firebase:** Used for authentication and storing blog posts
- **Tailwind CSS:** A utility-first CSS framework
- **Nuxt Image:** For image optimization
- **pinia-plugin-persistedstate/nuxt:** For persisting authentication details

## Project Setup

### Install Dependencies

# npm

npm install

## Admin Interface

The admin user can create posts by navigating to the /admin/create-post route.

# Middleware

1- auth.js
2- redirect-if-authenticated.js

## Store Configuration:

The blogStore.js file in the store directory is used to manage the state of blog posts and categories. It uses Firebase Firestore to fetch and store data. The store also implements caching for Firestore blog data and persists user login data.

## Components

1- Card
2- Header
3- Footer
4- HeroSection
5- PopularArticles
