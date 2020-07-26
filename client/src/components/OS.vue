<template>
  <div>
    <p>OS: {{ os.distro }}</p>
    <p>V: {{ os.release }}</p>
    <p>ARCH: {{ os.arch }}</p>
    <p>NAME: {{ os.hostname }}</p>
  </div>
</template>

<script>
export default {
  name: "OS",
  props: ["os"],
  computed: {},
};
</script>

<style>
</style>