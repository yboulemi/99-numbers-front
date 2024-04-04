<template>
    <section
        class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8 grow"
    >
        <div class="px-4 text-center sm:px-0">
            <h3 class="text-base font-semibold leading-7 text-gray-900">
                {{ $t("profile.title") }}
            </h3>
            <p class="mt-1 text-sm leading-6 text-gray-500">
                {{ $t("profile.description") }}
            </p>
        </div>

        <ProfileStats
            v-if="stats.totalGames > 0"
            :username="useLogin"
            :stats="stats"
        />
        <div v-else>
            <p class="mt-4">{{ $t("profile.no_game") }}</p>
        </div>

        <div class="flex justify-center">
            <button
                type="button"
                @click="handleLogout"
                class="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
                {{ $t("profile.logout") }}
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "~/stores/auth";
import { getUserPicks } from "~/api";
import ProfileStats from "~/components/molecules/ProfileStats.vue";

const router = useRouter();
const authStore = useAuthStore();

let userLogin = ref("");
let stats = ref({
    totalGames: 0,
    gamesWon: 0,
    mostPickedNumber: null,
    winPercentage: 0,
});

//TO DO: think about caching the user picks somehow
onMounted(async () => {
    userLogin.value = localStorage.getItem("authUsername") || "User";
    const picks = await getUserPicks(); // Fetch user picks and their outcomes

    // Process the picks to calculate statistics
    const wins = picks.filter((pick) => pick.outcome == 1);
    stats.value.totalGames = picks.length;
    stats.value.gamesWon = wins.length;
    stats.value.winPercentage =
        picks.length > 0 ? (wins.length / picks.length) * 100 : 0;

    // Find the most picked number (this is a simplified example; you'll need to adjust it based on your data structure)
    const numberFrequency = picks.reduce((acc, pick) => {
        acc[pick.number_picked] = (acc[pick.number_picked] || 0) + 1;
        return acc;
    }, {});
    stats.value.mostPickedNumber = Object.keys(numberFrequency).reduce(
        (a, b) => (numberFrequency[a] > numberFrequency[b] ? a : b),
        null,
    );
});

const handleLogout = () => {
    if (process.client) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUsername");
        localStorage.removeItem("userId");
    }

    authStore.logout();
    router.push("/login");
};
</script>
