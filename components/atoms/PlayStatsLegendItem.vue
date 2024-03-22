<template>
    <div class="flex items-center">
        <div
            class="rounded-full border border-1 border-black h-4 w-4 mr-2"
            :class="color"
        />
        {{ text }}
    </div>
</template>

<script setup>
defineProps({
    text: String,
    color: String,
});
</script>
