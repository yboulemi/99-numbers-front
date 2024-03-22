<template>
    <div
        class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8 grow"
    >
        <h2
            class="mb-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900"
        >
            {{ $t("play.stats") }}
        </h2>

        <div class="grid sm:grid-cols-10 grid-cols-5 mb-10 gap-2">
            <div
                v-for="index in 100"
                :key="index"
                class="border border-4 text-center"
                :class="[getPickColor(index), isUserPick(index)]"
            >
                {{ index }}
            </div>
        </div>

        <PlayStatsLegend :legend="legend" />
    </div>
</template>

<script setup>
import PlayStatsLegend from "~/components/molecules/PlayStatsLegend";
const props = defineProps({
    allPicks: Object,
    userPick: Number,
});

const { t } = useI18n();
const legend = [
    { text: t("play.legend.red"), color: "bg-red-600" },
    {
        text: t("play.legend.green"),
        color: "bg-emerald-300",
    },
    { text: t("play.legend.white"), color: "bg-white" },
];

const getPickColor = (index) => {
    const pick = props.allPicks.find((pick) => pick.number_picked === index);

    if (pick) {
        const count = props.allPicks.filter(
            (p) => p.number_picked === index,
        ).length;
        return count > 1 ? "bg-red-600" : "bg-emerald-300";
    } else {
        return "bg-white";
    }
};

const isUserPick = (index) => {
    const pick = props.allPicks.find((pick) => pick.number_picked === index);
    if (pick) {
        return props.userPick === pick.number_picked
            ? "border-black"
            : "border-white";
    } else return "border-white";
};
</script>
