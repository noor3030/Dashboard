<template>
  <div :style="styleObject">{{ user.name }}</div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
  computed: {
    styleObject: function () {
      return {
        "--color": "#0099CC",
        "--color-hover": "#000000",
      };
    },
  },
};
</script>

<style scoped>
div {
  color: var(--color);
}

div:hover {
  color: var(--color-hover);
}
</style>
