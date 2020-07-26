<template>
  <div>
    <p>UPTIME: {{ formattedUptime }}hrs</p>
  </div>
</template>

<script>
export default {
  name: "MISC",
  props: ["uptime"],
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