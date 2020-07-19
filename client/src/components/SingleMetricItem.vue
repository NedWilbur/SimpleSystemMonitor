<template>
  <div>
    <p>
      <b>{{ name }}:</b>
      {{ value }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SingleMetricItem",
  props: ["name", "value"]
};
</script>