<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, context) {
    const attrs = context.attrs
    console.log(attrs)
    return { attrs }
  },
})
</script>

<style scoped></style>
