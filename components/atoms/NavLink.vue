<template>
    <NuxtLink
        :to="to"
        class="pb-2 text-indigo-600 hover:text-indigo-500 hover:border-b-2 hover:border-indigo-500"
    >
        {{ text }}
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    text: String,
    to: String,
});
</script>
