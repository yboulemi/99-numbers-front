<template>
    <component :is="isLink" :to="clickable ? '/play' : '#'">
        <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900">
            <InterrogationMarkIcon />
            {{ title }}
        </h3>
        <p class="text-gray-500">
            {{ text }}
        </p>
    </component>
</template>

<script setup>
import InterrogationMarkIcon from "~/components/atoms/InterrogationMarkIcon.vue";
const props = defineProps({
    title: String,
    text: String,
    clickable: Boolean,
});

const isLink = computed(() => {
    return props.clickable ? resolveComponent('NuxtLink') : 'div';
});
</script>

