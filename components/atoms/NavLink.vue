<template>
    <NuxtLink :to="to" class="pb-2 hover:border-b-2 hover:border-cyan-400">
        {{ text }}
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    text: String,
    to: String,
});
</script>
