<script setup>
  import { CircleAlert } from 'lucide-vue-next';
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen space-y-6 pb-40">
    <h1 class="text-3xl font-bold text-center">
      Page Not Found
    </h1>
    <CircleAlert class="size-20 text-gray-400" />
    <RouterLink to="/" class="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md">Go to Home</RouterLink>
  </div>
</template>