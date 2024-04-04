<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "./stores/auth";

// Use the auth store
const authStore = useAuthStore();

onMounted(() => {
    // Initialize the auth store state from localStorage when the app is mounted
    authStore.initializeFromLocalStorage();
});
</script>
