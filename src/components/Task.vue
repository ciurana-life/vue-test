<template>
  <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3>{{task.text}}</h3>
    <p>{{task.day}}</p>
    <p class="delete-task" @click="$emit('delete-task', id)">Delete</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object
  },
}
</script>

<style scoped>
.task {
  border: 1px solid grey;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 10px;
}
.reminder {
  border-left: 5px solid green;
}
.delete-task {
  cursor: pointer;
  color: tomato;
}
</style>
