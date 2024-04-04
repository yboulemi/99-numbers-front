<template>
    <nav class="navbar">
        <div class="container">
            <NuxtLink to="/" class="logo">99 Numbers</NuxtLink>
            <ul class="nav-links">
                <li v-if="isAuthenticated">
                    <NuxtLink to="/play" class="nav-link">Play !</NuxtLink>
                </li>
                <li v-if="!isAuthenticated">
                    <NuxtLink to="/login" class="nav-link">Sign In</NuxtLink>
                </li>
                <li v-else>
                    <NuxtLink to="/profile" class="nav-link">Profile</NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

// Create a computed property that reflects the authentication state
const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>

<style scoped>
.navbar {
    background-color: #f8f9fa; /* Light grey background */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    padding: 1rem 0;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 2rem;
    max-width: 1140px;
}

.logo {
    font-weight: bold;
    font-size: 1.5rem;
    color: #333; /* Dark text for contrast */
    text-decoration: none; /* Remove underline from NuxtLink */
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1rem; /* Space between nav links */
}

.nav-link {
    color: #333; /* Matching text color */
    text-decoration: none; /* Remove underline */
    padding: 0.5rem 0; /* Padding for larger click area */
    border-bottom: 2px solid transparent; /* For hover effect */
    transition: border-color 0.3s; /* Smooth transition for hover effect */
}

.nav-link:hover {
    border-color: #007bff; /* Highlight color on hover */
}
</style>
