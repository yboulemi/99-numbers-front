<template>
  <div>
    <h1>Profile Page</h1>
    <p>Welcome back, {{ userLogin }}</p>
    
    <div v-if="stats.totalGames > 0">
      <p>Total number of games: {{ stats.totalGames }}</p>
      <p>Number of games won: {{ stats.gamesWon }}</p>
      <p>Most picked number: {{ stats.mostPickedNumber }}</p>
      <p>Win percentage: {{ stats.winPercentage.toFixed(2) }}%</p>
    </div>
    <div v-else>
      <p>You haven't played any games yet.</p>
    </div>
  
    <button @click="handleLogout">Logout</button>
  </div>
</template>

  
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';
import { getUserPicks } from '~/api'; // Import the function

const router = useRouter();
const authStore = useAuthStore();

let userLogin = ref('');
let stats = ref({ totalGames: 0, gamesWon: 0, mostPickedNumber: null, winPercentage: 0 });

//TO DO: think about caching the user picks somehow
onMounted(async () => {
  userLogin.value = localStorage.getItem('authUsername') || 'User';
  const picks = await getUserPicks(); // Fetch user picks and their outcomes

  // Process the picks to calculate statistics
  const wins = picks.filter(pick => pick.outcome == 1);
  stats.value.totalGames = picks.length;
  stats.value.gamesWon = wins.length;
  stats.value.winPercentage = picks.length > 0 ? (wins.length / picks.length) * 100 : 0;

  // Find the most picked number (this is a simplified example; you'll need to adjust it based on your data structure)
  const numberFrequency = picks.reduce((acc, pick) => {
    acc[pick.number_picked] = (acc[pick.number_picked] || 0) + 1;
    return acc;
  }, {});
  stats.value.mostPickedNumber = Object.keys(numberFrequency).reduce((a, b) => numberFrequency[a] > numberFrequency[b] ? a : b, null);
});

const handleLogout = () => {
  if (process.client) {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUsername');
    localStorage.removeItem('userId');
  }

  authStore.logout();
  router.push('/login');
};
</script>

  