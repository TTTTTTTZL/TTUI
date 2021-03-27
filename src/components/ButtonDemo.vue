<template>
  <div>button</div>
  <Button @click="click" @mouseover="click" size="small"> aaa</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {
    Button,
  },
  setup() {
    const click = () => {
      console.log('hi')
    }
    return { click }
  },
}
</script>

<style lang="scss" scoped></style>
