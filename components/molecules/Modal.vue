<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4">
      <div class="bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="p-6">
          <p class="text-lg font-medium text-gray-900">{{ message }}</p>
          <div class="mt-6 flex justify-end space-x-4">
            <button
              @click="cancel"
              class="px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
            >
            {{ $t("modal.goHome") }}
            </button>
            <button
              @click="confirm"
              class="px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
            {{ $t("modal.play") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    message: String,
    isVisible: Boolean,
  });
  
  const emit = defineEmits(['confirm', 'cancel']);
  
  const confirm = () => emit('confirm');
  const cancel = () => emit('cancel');
  </script>