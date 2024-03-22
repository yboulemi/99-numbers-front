import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(() => {
    const authStore = useAuthStore();

    if (!authStore.isAuthenticated) {
        // Redirect unauthenticated users to the login page
        return navigateTo("/login");
    }
});
