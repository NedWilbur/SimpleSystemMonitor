<template>
  <div>
    <h3>Memory Usage:</h3>
    <progress :value="data.freemem" :max="data.totalmem" />
    <p>
      <a>Current: {{ data.freemem }}gb</a>
    </p>
    <p>
      <a>Total: {{ data.totalmem }}gb</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Memory",
  props: ["data"],
  watch: {
    data: function() {
      this.ConvertMemoryToGB();
    }
  },
  methods: {
    ConvertMemoryToGB() {
      this.data.freemem = (this.data.freemem / 1000000000).toFixed(2);
      this.data.totalmem = (this.data.totalmem / 1000000000).toFixed(2);
    }
  }
};
</script>

<style scoped>
</style>