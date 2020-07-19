<template>
  <div>
    <MetricItem v-bind:uptime="uptime" />
    <Memory v-bind:memory="memory" />
  </div>
</template>

<script>
// @ is an alias to /src
import MetricItem from "@/components/MetricItem.vue";
import Memory from "@/components/Memory.vue";

const BASE_URL = "http://localhost:5000/api";
const TICK_RATE = 1000;

export default {
  name: "Home",
  components: {
    MetricItem,
    Memory
  },
  data() {
    return {
      timer: null,
      uptime: 0,
      memory: { used: 0, total: 0 }
    };
  },
  created() {
    // start loop
    this.startInterval();
  },
  beforeDestroy() {
    // dispose of timer
    clearInterval(this.timer);
  },
  methods: {
    startInterval: function() {
      console.log("Starting fetch ticker");
      this.timer = setInterval(this.fetch, TICK_RATE);
    },
    fetch() {
      // memory
      fetch(`${BASE_URL}/sys/uptime`)
        .then(res => res.json())
        .then(data => (this.uptime = data.hours))
        .catch(err => console.log(err));

      // memory
      fetch(`${BASE_URL}/sys/memory`)
        .then(res => res.json())
        .then(data => {
          this.memory.used = (data.usedMem / 1000000000).toFixed(1);
          this.memory.total = (data.totalMem / 1000000000).toFixed(1);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
