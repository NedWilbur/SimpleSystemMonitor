<template>
  <div>
    <p>CPU: {{ cpu }}%</p>
    <progress class="nes-progress is-primary" :value="cpu" max="100"></progress>
  </div>
</template>

<script>
export default {
  name: "CPU",
  props: ["cpu"],
};
</script>

<style>
</style>