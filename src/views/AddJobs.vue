<script setup>
import { ref } from 'vue';

const job = ref({
  title: '',
  company: '',
  location: '',
  description: '',
});

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="job.title" required />
    </div>
  </form>
</template>