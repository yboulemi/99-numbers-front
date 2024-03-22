<template>
    <div
        class="text-center p-8 bg-white rounded-lg shadow-lg w-full lg:w-1/3 h-3/4 flex flex-col justify-center items-center"
    >
        <p class="text-lg lg:text-xl font-medium text-gray-600">{{$t('play.players_left')}}</p>
        <div class="text-3xl lg:text-5xl font-bold text-indigo-600">
            {{ playersLeft }}
        </div>
        <br>
        <p class="text-lg lg:text-xl font-medium text-gray-600">{{$t('play.come_later')}}</p>
    </div>
</template>

<script setup>
defineProps({
    playersLeft: {
        type: Number,
        required: true,
    },
});
</script>
