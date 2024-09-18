<script setup lang="ts">
import { CircleArrowLeft } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
  <!-- Go Back -->
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/jobs"
        class="text-green-500 hover:text-green-600 flex items-center"
      >
        <CircleArrowLeft class="mr-2 size-5"/> Back to Job Listings
      </RouterLink>
    </div>
  </section>
</template>