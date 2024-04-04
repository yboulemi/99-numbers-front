<template>
    <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
            <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
            >
                {{ $t("login.email_label") }}
            </label>
            <div class="mt-2">
                <input
                    id="email"
                    v-model="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="block w-full p-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div>
            <div class="flex items-center justify-between">
                <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                >
                    {{ $t("login.password_label") }}
                </label>
                <div class="text-sm">
                    <a
                        href="#"
                        class="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        {{ $t("login.forgot_password") }}
                    </a>
                </div>
            </div>
            <div class="mt-2">
                <input
                    id="password"
                    v-model="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full p-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div>
            <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {{ $t("login.sign_in") }}
            </button>
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "~/stores/auth";
import { login as apiLogin } from "~/api";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
    try {
        const apiReply = await apiLogin(email.value, password.value);

        if (process.client) {
            localStorage.setItem("authToken", apiReply.data.token);
            localStorage.setItem("authUsername", apiReply.data.login);
            localStorage.setItem("userId", apiReply.data.userId.toString());
        }

        useAuthStore().setAuth(apiReply.data.token, apiReply.data.login);

        router.push("/play");
    } catch (error) {
        console.error("Login failed", error);
    }
};
</script>
