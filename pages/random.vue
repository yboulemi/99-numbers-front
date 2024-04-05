<template>
    <BarChart />
</template>

<script setup>
import BarChart from "~/components/molecules/BarChart.vue";

//   import { ref } from 'vue';
//   import Chart from 'chart.js/auto';

//   const numGames = ref(100); // Default number of games
//   const chartRef = ref(null); // Reference to the canvas element

//   // Initializes or updates the chart
//   function initOrUpdateChart(chartData) {
//     const ctx = chartRef.value.getContext('2d');
//     if (chartRef.value.chartInstance) {
//       // If chart instance already exists, update data and refresh
//       chartRef.value.chartInstance.data = chartData;
//       chartRef.value.chartInstance.update();
//     } else {
//       // Create a new chart instance
//       chartRef.value.chartInstance = new Chart(ctx, {
//         type: 'line',
//         data: chartData,
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           },
//           plugins: {
//             title: {
//               display: true,
//               text: 'Random Games Generator Results'
//             }
//           }
//         }
//       });
//     }
//   }

//   function generateRandomGames(numberOfGames) {
//     let games = [];
//     for (let i = 0; i < numberOfGames; i++) {
//       let game = Array.from({ length: 100 }, () => Math.floor(Math.random() * 99) + 1);
//       games.push(game);
//     }
//     return games;
//   }

//   function calculateSurvivors(games) {
//     return games.map(game => new Set(game).size);
//   }

//   function generateChartData() {
//     const games = generateRandomGames(numGames.value);
//     const survivors = calculateSurvivors(games);
//     const chartData = {
//       labels: Array.from({ length: games.length }, (_, i) => i + 1),
//       datasets: [{
//         label: 'Number of Survivors',
//         data: survivors,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//       }]
//     };

//     // Initialize or update the chart with new data
//     initOrUpdateChart(chartData);
//   }
</script>
