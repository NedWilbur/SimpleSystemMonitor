<template>
  <div>
    <h3>Uptime</h3>
    <a>{{uptime}} hours</a>
    <!-- <button @click="$emit('updateMetric', metric)">Update</button> -->
  </div>
</template>

<script>
export default {
  name: "MetricItem",
  props: ["uptime"]
};
</script>

<style scoped>
</style>