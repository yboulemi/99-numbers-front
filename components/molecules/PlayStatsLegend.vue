<template>
    <section class="flex flex-col gap-3">
        <PlayStatsLegendItem
            v-for="item in legend"
            :key="item.text"
            :text="item.text"
            :color="item.color"
        />
    </section>
</template>

<script setup>
import PlayStatsLegendItem from "~/components/atoms/PlayStatsLegendItem.vue";

defineProps({
    legend: Array,
});
</script>
