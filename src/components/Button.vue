<template>
  <button @click="onClick()" :style="{ background: background }">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: "Click"
    },
    background: {
      type: String,
      default: "rgb(200,200,200)"
    }
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    }
  }
}
</script>

<style>
button {
  border: none;
  border-radius: 3px;
  cursor: pointer;
  padding: 8px 15px;
}
</style>
