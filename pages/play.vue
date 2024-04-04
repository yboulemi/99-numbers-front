<template>
    <div>
        <div>
            <p>Welcome! Please pick a number between 1 and 99.</p>
            <form @submit.prevent="submitPick">
                <input v-model.number="pick" type="number" min="1" max="99" required>
                <button type="submit">Submit Pick</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { createPick } from '../api'; 

definePageMeta({
  middleware: ['auth']
});

const pick = ref('');

const submitPick = () => {
    const numberPicked = createPick(pick.value);
    console.log('Submitted pick:', pick.value);
    return numberPicked;
};
</script>
