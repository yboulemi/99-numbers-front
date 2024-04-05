<template>
    <div
        class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8 grow"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2
                class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900"
            >
                {{ $t("play.title") }}
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form @submit.prevent="submitPick">
                <input
                    id="pick"
                    v-model.number="pick"
                    type="number"
                    min="1"
                    max="99"
                    required
                    class="mb-6 block w-full text-center rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {{ $t("play.pick") }}
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { createPick } from "~/api";

const emit = defineEmits(["played"]);
const pick = ref("");

const submitPick = async () => {
    if (pick.value >= 1 && pick.value <= 99) {
        await createPick(pick.value);
        emit("played");
    }
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
}
</style>
