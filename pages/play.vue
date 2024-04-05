<template>
    <div>
        <!-- Step 1 -->
        <PlayForm v-if="!hasPlayedToday" @played="hasPlayedToday = true" />
        <!-- Step 2 -->
        <div
            v-else-if="hasPlayedToday && !roundFinished"
            class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8 grow"
        >
            <p class="text-center mb-10">
                Bravo ta joué reviens plus tard pour voir les stats
            </p>
        </div>
        <!-- Step 3 -->
        <PlayStats
            v-else-if="hasPlayedToday && roundFinished"
            :allPicks="allPicks"
            :userPick="userPick.number_picked"
        />
    </div>
</template>

<script setup>
import PlayForm from "~/components/organisms/PlayForm.vue";
import PlayStats from "~/components/organisms/PlayStats.vue";
import { getPicksFromLatestRoundForUser, checkUserHasPlayedToday } from "~/api";

import { ref } from "vue";

definePageMeta({
    middleware: ["auth"],
});

const { allPicks, userPick } = await getPicksFromLatestRoundForUser();

let hasPlayedToday = ref(await checkUserHasPlayedToday());
let roundFinished = ref(!!userPick.is_unique);
</script>
