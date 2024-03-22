<template>
    <form class="space-y-6" @submit.prevent="handleRegister">
        <div v-if="formError" class="p-3 bg-red-100 text-red-700 rounded">
            {{ formError }}
        </div>
        <div>
            <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
            >
                {{ $t("register.email_label") }}
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
            <label
                for="username"
                class="block text-sm font-medium leading-6 text-gray-900"
            >
                {{ $t("register.username_label") }}
            </label>
            <div class="mt-2">
                <input
                    id="username"
                    v-model="username"
                    name="username"
                    type="text"
                    autocomplete="username"
                    required
                    class="block w-full p-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
        <div>
            <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
            >
                {{ $t("register.password_label") }}
            </label>
            <div class="mt-2">
                <input
                    id="password"
                    v-model="password"
                    name="password"
                    type="password"
                    autocomplete="new-password"
                    required
                    class="block w-full p-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div>
            <label
                for="passwordConfirm"
                class="block text-sm font-medium leading-6 text-gray-900"
            >
                {{ $t("register.confirm_password") }}
            </label>
            <div class="mt-2">
                <input
                    id="passwordConfirm"
                    v-model="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    autocomplete="new-password"
                    required
                    class="block w-full p-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p
                    v-if="
                        password !== passwordConfirm &&
                        passwordConfirm.length > 0
                    "
                    class="text-red-500 text-xs mt-1"
                >
                    {{ $t("register.passwords_not_matching") }}
                </p>
            </div>
        </div>

        <div style="position: absolute; left: -5000px;">
            <label for="honeypot">If you see this, do not fill it out</label>
            <input type="text" id="honeypot" name="honeypot" v-model="honeypot" tabindex="-1">
        </div>

        <div>
            <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                :disabled="
                    password !== passwordConfirm ||
                    password === '' ||
                    email === ''
                "
            >
                {{ $t("register.sign_up") }}
            </button>
        </div>
    </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "~/stores/auth";
import { register as apiRegister } from "~/api";

const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
const honeypot = ref("");
const formStartTime = ref(Date.now()); // Track when the form is rendered
const username = ref("");
const formError = ref(""); // Store error messages from the server


const handleRegister = async () => {
    const formEndTime = Date.now();
    const timeTaken = formEndTime - formStartTime.value;

    if (timeTaken < 5000) { // 5 seconds threshold
        console.warn("Form submitted too quickly, likely by a bot.");
        return; // Abort or handle as potential bot submission
    }

    if (password.value !== passwordConfirm.value) {
        alert("Passwords do not match.");
        return;
    }

    // Check honeypot field: if it's filled, it's likely a bot
    if (honeypot.value) {
        console.warn("Bot detected");
        return; 
    }

    try {
        const apiReply = await apiRegister(
            email.value,
            username.value,
            password.value,
        );
        console.log("Registration successful", apiReply);
        if (process.client) {
            localStorage.setItem("authToken", apiReply.token);
            localStorage.setItem("authUsername", apiReply.login);
            localStorage.setItem("userId", apiReply.userId.toString());
        }

        useAuthStore().setAuth(
            apiReply.token,
            apiReply.login,
            apiReply.userId.toString(),
        );

        await navigateTo({ path: "/" });
    } catch (error) {
        formError.value = error.message;
        console.error("Registration failed", error);
    }
};

onMounted(() => {
    formStartTime.value = Date.now();
});

</script>
