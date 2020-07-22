<template>
  <div>
    <div class="header nes-container is-rounded">NEDFLIX System Information</div>
    <div class="content">
      <ItemContainer :title="'CPU'">
        <CPU :cpu="50"></CPU>
      </ItemContainer>
    </div>
  </div>
</template>

<script>
import ItemContainer from "@/components/ItemContainer.vue";
import CPU from "@/components/CPU.vue";

// const BASE_URL = "http://localhost:5000/api";
// const TICK_RATE = 1000;

export default {
  name: "Home",
  components: {
    ItemContainer,
    CPU,
  },
  // data() {
  //   return {
  //     timer: null,
  //     data: {},
  //   };
  // },
  // created() {
  //   // start loop
  //   this.startInterval();
  // },
  // beforeDestroy() {
  //   // dispose of timer
  //   clearInterval(this.timer);
  // },
  // methods: {
  //   startInterval: function () {
  //     console.log("Starting fetch ticker");
  //     this.timer = setInterval(this.fetch, TICK_RATE);
  //   },
  //   fetch() {
  //     // memory
  //     fetch(`${BASE_URL}/sys/`)
  //       .then((res) => res.json())
  //       .then((data) => (this.data = data))
  //       .catch((err) => console.log(err));
  //   },
  // },
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