<template>
    <div>
        <Modal
            v-if="showModal"
            :message="$t('modal.message')"
            :isVisible="showModal"
            @confirm="playNow"
            @cancel="goHome"
        />
        <div
            v-if="isLoading"
            class="flex justify-center items-center min-h-screen"
        >
            <div class="text-lg font-medium">Loading...</div>
        </div>
        <div
            v-else-if="!roundFinished && userPick !== null"
            class="flex justify-center items-center min-h-screen bg-gray-100"
        >
            <PlayersLeftBox :playersLeft="100 - allPicks.length" />
        </div>
        <PlayForm
            v-else-if="(!hasPlayedToday && roundFinished) || userPick === null"
            @played="handlePlayed"
        />
        <PlayStats
            v-else-if="hasPlayedToday && roundFinished"
            :allPicks="allPicks"
            :userPick="userPick.number_picked"
        />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PlayersLeftBox from '~/components/molecules/PlayersLeftBox.vue';
import PlayForm from '~/components/organisms/PlayForm.vue';
import PlayStats from '~/components/organisms/PlayStats.vue';
import Modal from '~/components/molecules/Modal.vue'; // Adjust path as needed
import { getPicksFromLatestRoundForUser, checkUserHasPlayedToday } from "~/api";

const allPicks = ref([]);
const userPick = ref(null);
const hasPlayedToday = ref(false);
const roundFinished = ref(false);
const isLoading = ref(true); // Initialize loading state as true
const showModal = ref(false); // Controls the visibility of the modal

// Fetch game data
const fetchGameData = async () => {
  isLoading.value = true; // Start loading
  try {
    const picksData = await getPicksFromLatestRoundForUser();
    allPicks.value = picksData.allPicks;
    userPick.value = picksData.userPick;
    if (userPick.value === null) {
      showModal.value = true;
    } else {
      hasPlayedToday.value = await checkUserHasPlayedToday();
      roundFinished.value = userPick.value?.is_unique !== null;
    }
  }
  catch (error) {
    console.error('Failed to load game data:', error);
    await navigateTo({ path: '/login' }); // Redirect to home page on error
  }

  isLoading.value = false; // End loading

};

// Handle modal actions
const playNow = () => {
  showModal.value = false;
  // Implement any additional logic if needed for starting to play immediately
};

const goHome =  async () => {
  showModal.value = false;
  await navigateTo({ path: '/' })
};

// Fetch data on component mount
onMounted(fetchGameData);

// Refresh data after playing
const handlePlayed = async () => {
  hasPlayedToday.value = true;
  await fetchGameData(); // Re-fetch data to update the component state
};
</script>
