<script setup>
  import { TriangleAlert } from 'lucide-vue-next';
</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96 mt-20">
    <TriangleAlert class="size-40 text-yellow-400  mb-4"/>
    <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
    <p class="text-xl mb-5">This page does not exist</p>
    <a
      href="index.html"
      class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4"
      >Go Back</a
    >
  </section>
</template>