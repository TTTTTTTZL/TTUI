<template>
  <Switch :value="x" @input="x = $event" />
</template>

<script>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'

export default {
  components: {
    Switch,
  },
  setup() {
    const x = ref(false)
    return {
      x,
    }
  },
}
</script>

<style lang="scss" scoped></style>
