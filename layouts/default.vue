<template>
    <div class="site-container">
      <Navbar />
      <div class="content-wrapper">
        <NuxtPage class="flex-grow" />
        <Footer />
      </div>
    </div>
  </template>
  
  <script setup>
  import Navbar from "~/components/Navbar.vue";
  import Footer from "~/components/Footer.vue";
  import { onMounted } from "vue";
  import { useAuthStore } from "~/stores/auth";
  
  const authStore = useAuthStore();
  
  onMounted(() => {
      authStore.initializeFromLocalStorage();
  });
  </script>
  
  <style>
  .site-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  