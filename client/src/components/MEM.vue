<template>
  <div>
    {{mem.percentUsed}}% ({{mem.used }}gb/{{ mem.total }}gb)
    <progress
      class="nes-progress is-primary"
      :value="mem.used"
      :max="mem.total"
    />
  </div>
</template>

<script>
export default {
  name: "MEM",
  props: ["mem"],
  watch: {
    mem: function () {
      if (typeof this.mem === "undefined") return;
      
      // convert to GB
      this.mem.used = (this.mem.used / 1073741824).toFixed(1);
      this.mem.total = (this.mem.total / 1073741824).toFixed(1);
      this.mem.percentUsed = ((this.mem.used / this.mem.total) * 100).toFixed(
        0
      );
    },
  },
};
</script>

<style>
</style>