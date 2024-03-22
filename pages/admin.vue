<template>
    <section class="justify-center min-h-full px-6 py-12 lg:px-8">
      <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
  
      <div v-else-if="errorOccurred">
        <p>Error loading users. Redirecting...</p>
      </div>
  
      <div v-else>
        <div class="px-4 text-center sm:px-0">
          <h3 class="text-base font-semibold leading-7 text-gray-900">
            {{ $t("admin.title") }}
          </h3>
          <p class="mt-1 text-sm leading-6 text-gray-500">
            {{ $t("admin.description") }}
          </p>
        </div>
  
        <div class="mt-5">
          <ul>
            <li v-for="user in users" :key="user.user_id" class="py-2 flex justify-between items-center">
              {{ user.login }} - {{ user.email }}
              <select v-model="user.role" @change="changeRole(user.user_id, user.role)">
                <option value="player">Player</option>
                <option value="mod">Moderator</option>
                <option value="admin">Admin</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { getAllUsers, updateUserRole } from "~/api"; // Import your API helper for updating the role
  
  const isLoading = ref(true);
  const errorOccurred = ref(false);
  const users = ref([]);
  
  onMounted(async () => {
    try {
      users.value = await getAllUsers();
    } catch (error) {
      console.error("Failed to load users:", error);
      errorOccurred.value = true;
      setTimeout(() => navigateTo({ path: '/' }), 3000); // Redirect to home after 3 seconds
    } finally {
      isLoading.value = false;
    }
  });
  
  const changeRole = async (userId, newRole) => {
    try {
      await updateUserRole(userId, newRole); 
      console.log('Role updated successfully');
    } catch (error) {
      console.error('Failed to update role:', error);
    }
  };
  </script>
  