<script setup>
  import { ref, onMounted } from 'vue'

  const name = 'John doe';
  const status = ref(true);
  const tasks = ref(['task 1', 'task 2', 'task 3']);
  const counter = ref(0);
  const newTask = ref('')

  const addToCounter = () => {counter.value += 1}
  const subFromCounter = () => {counter.value -= 1}


  const addTask = () => {
    console.log(newTask.value)
    if(newTask.value.trim() === '')
      return

    tasks.value.push(newTask.value)
    newTask.value = ''
  }
  const deleteTask = (index) => {
    tasks.value.splice(index,1)
  }

  onMounted(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      const data = await response.json()
      tasks.value = data.map((task) => task.title)

    }catch(error){
      console.log(error)
    }
  })
</script>

<template>
  <h1>Hello world vue with <b>Composition</b></h1>
  <p>name: {{ name }}</p>

  <p>Counter: {{ counter }}</p>

  <button @click="addToCounter">add +</button>
  <button @click="subFromCounter">sub -</button>

  <p v-if="status">User is active</p>
  <p v-else="status">User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="NewTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <button @click="deleteTask(index)">x</button>
      <span>{{ task }}</span>
    </li>
  </ul>

  <button v-on:click="test">Click me too</button>
</template>
