<template>
  <div>
    <h3>CPUs:</h3>
    <ul>
      <li v-for="cpu in data.cpus" :key="cpu">
        Model: {{ cpu.model }}
        <ul>
          <li>Idle: {{ cpu.times.idle }}</li>
          <li>IRQ: {{ cpu.times.irq }}</li>
          <li>System: {{ cpu.times.sys }}</li>
          <li>User: {{ cpu.times.user }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Cpus",
  props: ["data"],
  data() {
    return {
      cpus: []
    };
  }
};
</script>