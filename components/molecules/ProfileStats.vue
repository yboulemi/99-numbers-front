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
                    :text="$t('profile.game_played')"
                    :stat="stats.totalGames"
                />
                <ProfileStatsLine
                    :text="$t('profile.game_won')"
                    :stat="stats.gamesWon"
                />
                <ProfileStatsLine
                    :text="$t('profile.most_picked')"
                    :stat="stats.mostPickedNumber"
                />
                <ProfileStatsLine
                    :text="$t('profile.win_percentage')"
                    :stat="`${stats.winPercentage} %`"
                />
            </div>
        </dl>
    </div>
</template>

<script setup>
import ProfileStatsLine from "~/components/atoms/ProfileStatsLine.vue";

const props = defineProps({
    stats: Object,
    username: String,
});
</script>
