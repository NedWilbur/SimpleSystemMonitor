<template>
  <div>
    <div class="header nes-container is-rounded">{{ hostname }} System Information</div>
    <div class="content">
      <ItemContainer :title="'CPU'">
        <CPU :cpu="cpuusage"></CPU>
      </ItemContainer>
      <ItemContainer :title="'MEM'">
        <MEM :mem="mem"></MEM>
      </ItemContainer>
      <ItemContainer :title="'DISK'">
        <DISK :diskinfo="diskinfo"></DISK>
      </ItemContainer>
    </div>
  </div>
</template>

<script>
import ItemContainer from "@/components/ItemContainer.vue";
import CPU from "@/components/CPU.vue";
import MEM from "@/components/MEM.vue";
import DISK from "@/components/DISK.vue";

const BASE_URL = "http://localhost:5000/api";
const TICK_RATE = 1000;

export default {
  name: "Home",
  components: {
    ItemContainer,
    CPU,
    MEM,
    DISK,
  },
  data() {
    return {
      timer: null,
      cpuusage: "",
      mem: {},
      diskinfo: {},
      hostname: "",
    };
  },
  created() {
    this.ticker(); // get initial data
    this.startInterval(); // loop for dynamic data
    this.fetchStatic(); // get static data
  },
  beforeDestroy() {
    clearInterval(this.timer); // dispose of timer
  },
  methods: {
    startInterval() {
      console.log("Starting ticker for dynamic values");
      this.timer = setInterval(this.ticker, TICK_RATE);
    },
    ticker() {
      // cpu usage
      fetch(`${BASE_URL}/sys/cpuusage`)
        .then((res) => res.json())
        .then((data) => (this.cpuusage = data))
        .catch((err) => console.log(err));

      // mem
      fetch(`${BASE_URL}/sys/mem`)
        .then((res) => res.json())
        .then((data) => (this.mem = data))
        .catch((err) => console.log(err));
    },
    fetchStatic() {
      // hostname
      fetch(`${BASE_URL}/sys/hostname`)
        .then((res) => res.json())
        .then((data) => (this.hostname = data))
        .catch((err) => console.log(err));

      // diskinfo
      fetch(`${BASE_URL}/sys/diskinfo`)
        .then((res) => res.json())
        .then((data) => (this.diskinfo = data))
        .catch((err) => console.log(err));
    },
    // fetch(url, obj) {
    //   console.log(`GET: ${BASE_URL}/sys/${url}`);
    //   fetch(`${BASE_URL}/sys/${url}`)
    //     .then((res) => res.json())
    //     .then((data) => (obj = data))
    //     .catch((err) => console.log(err));
    // },
  },
};
</script>

<style>
body {
  margin: 10px;
}

.header {
  background-color: #bcbcbc;
}

.content {
  display: inline-flex;
  flex-wrap: wrap;
  width: 1fr;
}

.nes-container {
  flex: 1;
  min-width: 400px;
  margin: 10px !important;
}

progress {
  display: block;
  min-width: 200px;
  max-height: 25px;
}
</style>