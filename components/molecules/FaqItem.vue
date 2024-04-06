<template>
    <div>
        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
            <InterrogationMarkIcon />
            {{ title }}
        </h3>
        <p class="text-gray-500">
            {{ text }}
        </p>
    </div>
</template>

<script setup>
import InterrogationMarkIcon from "~/components/atoms/InterrogationMarkIcon.vue";

defineProps({
    title: String,
    text: String,
});
</script>
