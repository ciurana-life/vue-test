<template>
  <form @submit="onSubmit">
    <div>
      <label>Task</label>
      <!--
        v-model binds inputs to data
        It is a two way binding allowing {{ text }} for example
        to be inmidetly displayed when typeing
      -->
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div>
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" />
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: true
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.text) {
        alert('Please add a task');
        return
      }

      // TODO - Have a different file for objects/models ?
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      this.$emit('add-task', newTask)

      // TODO -- better way of reseting form ?
      this.text = ''
      this.day = ''
      this.reminder = true

    }
  }
}
</script>

<style scoped>
  form {
    background: rgb(230,230,230);
    margin: 10px;
    padding: 10px;
  }
  form div {
    margin-bottom: 10px;
  }
  form label {
    display: block;
  }
  .form-control-check * {
    display: inline-block;
  }
</style>
