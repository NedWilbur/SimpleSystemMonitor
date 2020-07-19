<template>
  <div>
    <SingleMetricItem :name="'Hostname'" :value="data.hostname" />
    <SingleMetricItem :name="'OS'" :value="data.osVersion" />
    <SingleMetricItem :name="'Platform'" :value="data.platform" />
    <SingleMetricItem :name="'Arch'" :value="data.arch" />
    <SingleMetricItem :name="'Uptime'" :value="data.uptime" />
    <SingleMetricItem :name="'networkInterfaces'" :value="data.networkInterfaces" />

    <Memory :data="data" />
    <Cpus :data="data" />
  </div>
</template>

<script>
// @ is an alias to /src
import SingleMetricItem from "@/components/SingleMetricItem.vue";
import Cpus from "@/components/Cpus.vue";
import Memory from "@/components/Memory.vue";

const BASE_URL = "http://localhost:5000/api";
const TICK_RATE = 1000;

export default {
  name: "Home",
  components: {
    SingleMetricItem,
    Cpus,
    Memory
  },
  data() {
    return {
      timer: null,
      data: {}
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
      fetch(`${BASE_URL}/sys/`)
        .then(res => res.json())
        .then(data => (this.data = data))
        .catch(err => console.log(err));
    }
  }
};
</script>
