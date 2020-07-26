<template>
  <div>
    <div v-for="disk in formattedDiskInfo" :key="disk.fs">
      {{ disk.fs }} {{ disk.used }}gb/{{ disk.size }}gb
      <progress
        class="nes-progress is-primary"
        :value="disk.use"
        max="100"
      ></progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "DISK",
  props: ["diskinfo"],
  computed: {
    formattedDiskInfo() {
      if (typeof this.diskinfo === "undefined") return;

      return this.diskinfo
        .map((disk) => ({
          ...disk,
          used: (disk.used / 1073741824).toFixed(0),
          size: (disk.size / 1073741824).toFixed(0),
        }))
        .filter(({ size }) => size > 0);
    },
  },
};
</script>

<style>
</style>