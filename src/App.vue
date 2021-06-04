<template>
  <Header
    @toggle-add-task="toggleAddTask"
    title="Task list"
    :showAddTask="showAddTask"
  />
  <div v-if="showAddTask">
    <AddTask @add-task="addTask"/>
  </div>
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    addTask(task) {
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id) {
      if (confirm('Are you sure?'))
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Lorem Ipsum 1',
        day: 'some day',
        reminder: true,
      },
      {
        id: 2,
        text: 'Lorem Ipsum 2',
        day: 'some day',
        reminder: true,
      },
      {
        id: 3,
        text: 'Lorem Ipsum 3',
        day: 'some day',
        reminder: false,
      },
    ]
  }
}
</script>

<style>
body, html,
h1, h2, h3, p, i, ul, li  {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>

atom-ide-ui package to expose the functionality within Atom
The language-vue
