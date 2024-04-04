<template>
    <div class="flex flex-col min-h-screen">
        <Header />
        <div class="flex flex-col grow">
            <NuxtPage class="grow" />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "~/stores/auth";
import Footer from "~/components/organisms/Footer.vue";
import Header from "~/components/organisms/Header.vue";

const authStore = useAuthStore();

onMounted(() => {
    authStore.initializeFromLocalStorage();
});
</script>
