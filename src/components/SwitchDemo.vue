<template>
  <Switch v-model:value="value" />
</template>

<script>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'

export default {
  components: {
    Switch,
  },
  setup() {
    const value = ref(false)
    return {
      value,
    }
  },
}
</script>

<style lang="scss" scoped></style>
