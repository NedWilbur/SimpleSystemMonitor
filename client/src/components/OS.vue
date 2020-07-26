<template>
  <div>
    <p>OS: {{ os.distro }}</p>
    <p>V: {{ os.release }}</p>
    <p>ARCH: {{ os.arch }}</p>
    <p>NAME: {{ os.hostname }}</p>
    <p>UPTIME: {{ formattedUptime }}hrs</p>
  </div>
</template>

<script>
export default {
  name: "OS",
  props: ["os", "uptime"],
  computed: {
    formattedUptime() {
      if (typeof this.uptime === "undefined") return;

      return (this.uptime / 60 / 60).toFixed(1);
    },
  },
};
</script>

<style>
</style>