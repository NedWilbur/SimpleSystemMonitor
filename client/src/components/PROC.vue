<template>
  <div>
    <div class="nes-table-responsive">
      <table class="nes-table is-bordered is-centered">
        <thead>
          <tr>
            <th>NAME</th>
            <th>CPU</th>
            <th>MEM</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="proc in sortByName" :key="proc.pid">
            <td>{{ proc.name }}</td>
            <td>{{ proc.pcpu }}%</td>
            <td>{{ proc.pmem }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PROC",
  props: ["procs"],
  computed: {
    sortByName() {
      if (typeof this.procs === "undefined") return;

      let data = Array.from(this.procs.list); // convert to array
      return data.map((proc) => ({
        ...proc,
        name: this.formatName(proc.name),
        pcpu: proc.pcpu.toFixed(0),
        pmem: proc.pmem.toFixed(0),
      }));
    },
  },
  methods: {
    formatName(name) {
      // name = name.replace(".exe", "");
      if (name.length > 20) return name.substring(0, 20) + "…";
      else return name;
    },
  },
};
</script>

<style>
</style>