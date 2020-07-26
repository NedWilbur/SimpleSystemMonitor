<template>
  <div>
    {{formattedMem.percentUsed}}% ({{formattedMem.used }}gb/{{ formattedMem.total }}gb)
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
  computed: {
    formattedMem() {
      if (typeof this.mem === "undefined") return;

      let formattedMem = this.mem;
      formattedMem.used = (formattedMem.used / 1073741824).toFixed(1);
      formattedMem.total = (formattedMem.total / 1073741824).toFixed(1);
      formattedMem.percentUsed = (
        (formattedMem.used / formattedMem.total) *
        100
      ).toFixed(0);
      return formattedMem;
    },
  },
};
</script>

<style>
</style>