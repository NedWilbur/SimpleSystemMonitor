<template>
  <div>
    <h3>Memory Usage:</h3>
    <progress :value="memory.used" :max="memory.total"></progress>
    <p>
      <a>Current: {{ memory.used }}gb</a>
    </p>
    <p>
      <a>Total: {{ memory.total }}gb</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Memory",
  props: ["memory"]
};
</script>

<style scoped>
</style>