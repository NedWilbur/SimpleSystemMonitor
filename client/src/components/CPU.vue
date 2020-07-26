<template>
  <div>
    <p>CPU: {{ formattedCPUUsage }}%</p>
    <progress class="nes-progress is-primary" :value="formattedCPUUsage" max="100"></progress>
  </div>
</template>

<script>
export default {
  name: "CPU",
  props: ["cpu"],
  computed: {
    formattedCPUUsage() {
      if (typeof this.cpu === "undefined") return;

      return (this.cpu * 100).toFixed(0);
    },
  },
};
</script>

<style>
</style>