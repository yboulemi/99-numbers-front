<template>
    <section class="bg-white">
        <div
            class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
        >
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1
                    class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
                >
                    {{ title }}
                </h1>
                <p
                    class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
                >
                    {{ description }}
                </p>
                <p
                    class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
                >
                    {{ rules }}
                </p>
                <NuxtLink
                    to="/play"
                    class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                >
                    {{ button }}
                </NuxtLink>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img class="rounded-full" :src="img" alt="stats_nerds" />
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    rules: String,
    button: String,
    img: String,
});

</script>
