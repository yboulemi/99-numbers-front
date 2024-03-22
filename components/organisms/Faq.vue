<template>
    <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2
                class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                {{ title }}
            </h2>
            <div
                class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
            >
                <div>
                    <FaqItem
                        v-for="item in firstHalf"
                        :key="item.title"
                        class="mb-10"
                        :title="item.title"
                        :text="item.text"
                        :clickable="false"
                    />
                </div>
                <div>
                    <FaqItem
                        v-for="(item, idx) in secondHalf"
                        :key="item.title"
                        class="mb-10"
                        :title="item.title"
                        :text="item.text"
                        :clickable="idx === secondHalf.length - 1"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import FaqItem from "~/components/molecules/FaqItem.vue";

const props = defineProps({
    title: String,
    items: Array,
});

const [firstHalf, secondHalf] = [
    props.items.slice(0, Math.ceil(props.items.length / 2)),
    props.items.slice(Math.ceil(props.items.length / 2)),
];
</script>
