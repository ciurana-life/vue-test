<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add task' "
      :background="showAddTask ? 'tomato' : 'lightgreen' "
    />
  </header>
</template>

<script>
import Button from './Button'

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Error, no header specified'
    },
    showAddTask: {
      type: Boolean
    }
  },
  components: {
    Button,
  },
}
</script>

<style scoped>
  header {
    align-items: center;
    background: #3e3e3e;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
</style>
