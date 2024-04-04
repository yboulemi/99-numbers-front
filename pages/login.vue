<template>
    <div>
        <!-- Login Form -->
        <form @submit.prevent="handleLogin">
            <div>
                <label for="email">Email:</label>
                <input id="email" v-model="email" type="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
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
