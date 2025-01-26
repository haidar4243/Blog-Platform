<template>
  <section class="bg-white mt-2 px-[100px] py-16">
    <div class="max-w-7xl">
      <!-- Heading -->
      <div class="mb-10">
        <h1 class="text-[48px] font-bold text-gray-900">
          Events in Minutes Ideas
        </h1>
        <p class="text-[20px] text-gray-600 mt-4">
          Welcome to our Ideas Hub, where we share tips, trends, and inspiration
          for unforgettable events.
        </p>
      </div>

      <!-- Content Section -->
      <div class="flex items-center sm:flex-col md:flex-col lg:flex-row">
        <!-- Image -->
        <div>
          <NuxtImg
            src="/img/heroSection.png"
            alt="Team Building Activity"
            class="rounded-xl shadow-lg h-auto"
            width="2200"
          />
        </div>

        <!-- Text -->
        <div class="ml-10 sm:mt-6 md:mt-8">
          <p class="text-sm text-gray-500 mb-4">Jan 24, 2024</p>
          <h2 class="text-[33px] font-semibold text-gray-900 mb-4">
            How to Plan a Successful Team-Building Retreat for Your Company
          </h2>
          <p class="text-[16px] text-gray-600 mb-16">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices. Lorem ipsum
            dolor sit amet consectetur adipiscing eli mattis sit phasellus
            mollis sit aliquam sit nullam neque ultrices.
          </p>
          <!-- Tags and Read More -->
          <div class="flex items-center justify-between">
            <span
              class="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg"
            >
              Corporate Events
            </span>
            <a
              href="#"
              class="text-blue-600 hover:underline text-sm font-medium flex items-center"
            >
              Read <span class="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped></style>
