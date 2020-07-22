<template>
  <div class="nes-container is-rounded with-title">
    <p class="title nes-text">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ItemContainer",
  props: ["title"],
};
</script>

<style>
</style>