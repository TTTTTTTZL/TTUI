<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const asideVisible = ref(true)
    provide('xxx', asideVisible)
  },
}
</script>
