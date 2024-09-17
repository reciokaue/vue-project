<script setup>
  import Hero from '@/components/Hero.vue';
  import HomeCards from '@/components/HomeCards.vue';
  import JobListings from '@/components/JobListings.vue';
</script>

<template>
  <Hero title="Test title" subtitle="test subtitle"/>
  <HomeCards/>
  <JobListings :limit="6" showButton/>
</template>