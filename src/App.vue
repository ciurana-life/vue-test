<template>
  <Header
    @toggle-add-task="toggleAddTask"
    title="Task list"
    :showAddTask="showAddTask"
  />
  <router-view :showAddTask="showAddTask"></router-view>
  <Footer />
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
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
