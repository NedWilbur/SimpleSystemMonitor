<template>
  <div>
    <div v-for="disk in diskinfo" :key="disk.fs">
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
  watch: {
    diskinfo: function () {
      if (typeof this.diskinfo === "undefined") return;

      // convert to GB
      this.diskinfo.forEach((disk) => {
        disk.used = (disk.used / 1073741824).toFixed(0);
        disk.size = (disk.size / 1073741824).toFixed(0);
      });

      // remove if < 1 gb
      this.diskinfo.filter((disk) => disk.size === "0");
    },
  },
};
</script>

<style>
</style>