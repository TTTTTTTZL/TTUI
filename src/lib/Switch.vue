<template>
  <button @click="toggle" :class="{ checked: value }"><span></span></button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('input', !props.value)
    }
    return { toggle }
  },
})
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: $h / 2;
  position: relative;
}
button.checked {
  background: blue;
  > span {
    left: calc(100% - #{$h2} - 2px);
  }
}
button:focus {
  outline: none;
}

span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: left 300ms;
}
</style>
