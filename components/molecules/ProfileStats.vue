<template>
    <div class="flex justify-center mt-6">
        <dl class="divide-y divide-gray-100 max-w-94">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt class="text-sm font-medium leading-6 text-gray-900">
                    Full name
                </dt>
                <dd
                    class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 text-end"
                >
                    {{ username }}
                </dd>
            </div>

            <div v-if="stats.totalGames > 0">
                <ProfileStatsLine
                    text="Total number of games"
                    :stat="stats.totalGames"
                />
                <ProfileStatsLine
                    text="Number of games won"
                    :stat="stats.gamesWon"
                />
                <ProfileStatsLine
                    text="Most picked number"
                    :stat="stats.mostPickedNumber"
                />
                <ProfileStatsLine
                    text="Win percentage"
                    :stat="`${stats.winPercentage} %`"
                />
            </div>
            <div v-else>
                <p class="mt-4">You haven't played any games yet.</p>
            </div>
        </dl>
    </div>
</template>

<script setup>
import ProfileStatsLine from "~/components/atoms/ProfileStatsLine.vue";

const props = defineProps({
    stats: Object,
});
</script>
