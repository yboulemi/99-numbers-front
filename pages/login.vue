<template>
    <div class="justify-center min-h-full px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                class="w-auto h-32 mx-auto"
                src="/public/logo.png"
                :alt="$t('login.alt_logo')"
            />
            <h2
                class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900"
            >
                {{ $t("login.title") }}
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <LoginForm />
            <p class="mt-10 text-sm text-center text-gray-500">
                {{ $t("login.not_member") }}
                <NuxtLink
                    to="/register"
                    class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                    {{ $t("login.sign_up") }}
                </NuxtLink>
            </p>
        </div>
    </div>
</template>

<script setup>
import LoginForm from "~/components/organisms/LoginForm.vue";
</script>
