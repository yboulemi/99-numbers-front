<template>
    <div class="relative">
        <!-- Button -->
        <button
            @click="isOpen = !isOpen"
            class="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            <span>{{ selectedOption }}</span>
        </button>

        <!-- Dropdown -->
        <div
            v-if="isOpen"
            class="absolute right-0 z-50 w-48 py-2 mt-2 bg-white border rounded-lg shadow-lg bottom-10"
        >
            <button
                v-for="(option, index) in options"
                :key="index"
                @click="selectOption(option)"
                class="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-300"
            >
                {{ option.text }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const { locale, setLocale } = useI18n();
const isOpen = ref(false);
const selectedOption = ref(locale);

const options = ref([
    { text: "English", code: "en" },
    { text: "Français", code: "fr" },
]);

const selectOption = (option) => {
    selectedOption.value = option.text;
    setLocale(option.code);
    isOpen.value = false;
};
</script>
