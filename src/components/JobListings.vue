<script setup>
  import { defineProps, onMounted, reactive } from 'vue';
  import JobCard from './JobCard.vue';
  import axios from 'axios';
import { Loader2 } from 'lucide-vue-next';

  defineProps({
    limit: Number,
    showButton: {
      type: Boolean,
      default: false
    }
  })

  const state = reactive({
    jobs: [],
    isLoading: true,
  })

  onMounted(async () => {
    try {
      const response = await axios.get('/api/jobs')

      state.jobs = response.data
    } catch (error) {
      console.error('Error fetching jobs:', error)
    }finally {
      state.isLoading = false
    }
  })
</script>

 <!--# ref vs reactive  -->
 <!-- 
  reactive() only takes objects, It does not take primitives
  like strings numbers and booleans. It uses 'ref()' under the hood
  
  ref() can take primitives and objects.

  ref() has a '.value' property for reassigning values
  'reactive()' does not and cant be re-assigned.

 -->

<template>
  <section class="bg-green-50 px-4 py-10">

    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div v-if="state.isLoading" class="flex justify-center pb-40 items-center h-screen">
          <Loader2 class="w-8 h-8 text-primary animate-spin" />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobCard v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job"/>
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <a
      href="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</a
    >
  </section>
</template>