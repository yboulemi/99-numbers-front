<template>
    <nav class="p-3 shadow bg-slate-50">
        <div class="flex items-center justify-between">
            <NuxtLink
                to="/"
                class="text-2xl font-bold leading-9 tracking-tight text-center text-gray-900"
            >
                <img
                    class="w-auto h-10 mx-auto"
                    src="/public/logo.png"
                    :alt="$t('layout.header.alt_logo')"
                />
            </NuxtLink>
            <ul class="flex gap-3">
                <li v-if="isAuthenticated">
                    <NavLink :text="$t('layout.header.play')" to="/play" />
                </li>
                <li v-if="!isAuthenticated">
                    <NavLink :text="$t('layout.header.sign_in')" to="/login" />
                </li>
                <li v-else>
                    <NavLink
                        :text="$t('layout.header.profile')"
                        to="/profile"
                    />
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "~/stores/auth";
import NavLink from "~/components/atoms/NavLink.vue";

const authStore = useAuthStore();

// Create a computed property that reflects the authentication state
const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>
