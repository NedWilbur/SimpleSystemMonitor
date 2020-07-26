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
      <ItemContainer :title="'OS'">
        <OS :os="os" :uptime="uptime"></OS>
      </ItemContainer>
      <!-- <ItemContainer :title="'MISC'">
        <MISC :uptime="uptime"></MISC>
      </ItemContainer>-->
      <ItemContainer :title="'PROCS'">
        <PROC :procs="procs"></PROC>
      </ItemContainer>
    </div>
  </div>
</template>

<script>
import ItemContainer from "@/components/ItemContainer.vue";
import CPU from "@/components/CPU.vue";
import MEM from "@/components/MEM.vue";
import DISK from "@/components/DISK.vue";
import OS from "@/components/OS.vue";
// import MISC from "@/components/MISC.vue";
import PROC from "@/components/PROC.vue";

const BASE_URL = "http://localhost:5000/api";
const TICK_RATE = 1000;

export default {
  name: "Home",
  components: {
    ItemContainer,
    CPU,
    MEM,
    DISK,
    OS,
    // MISC,
    PROC,
  },
  data() {
    return {
      timer: null,
      cpuusage: "",
      mem: {},
      diskinfo: {},
      hostname: "",
      uptime: "",
      os: {},
      procs: {},
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

      // uptime
      fetch(`${BASE_URL}/sys/uptime`)
        .then((res) => res.json())
        .then((data) => (this.uptime = data))
        .catch((err) => console.log(err));

      // processes
      fetch(`${BASE_URL}/sys/processes`)
        .then((res) => res.json())
        .then((data) => (this.procs = data))
        .catch((err) => console.log(err));
    },
    fetchStatic() {
      // diskinfo
      fetch(`${BASE_URL}/sys/diskinfo`)
        .then((res) => res.json())
        .then((data) => (this.diskinfo = data))
        .catch((err) => console.log(err));

      // os (includes hostname)
      fetch(`${BASE_URL}/sys/os`)
        .then((res) => res.json())
        .then((data) => (this.os = data))
        .then((data) => (this.hostname = data.hostname))
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