<script>
  export default {
    data() {
      return {
        name: 'John doe',
        status: true,
        tasks: ['task 1', 'task 2', 'task 3'],
        link: 'https://google.com',
        counter: 0
      }
    },
    methods: {
      test(){ console.log('AAAAA')},
      addToCounter(){  this.counter += 1},
      subtractFromCounter(){this.counter -= 1}
    }
  }
</script>

<template>
  <h1>Hello world vue</h1>

  <p>Counter: {{ counter }}</p>

  <button @click="addToCounter">add +</button>
  <button @click="subtractFromCounter">sub -</button>

  <p v-if="status">User is active</p>
  <p v-else="status">User is inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <a :href="link">Click me</a>

  <button v-on:click="test">Click me too</button>
</template>
