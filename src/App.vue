<template>
  <Topnav></Topnav>
  <router-view />
</template>

<script>
import Topnav from '../src/components/Topnav.vue'
export default {
  name: 'App',
  components: { Topnav },
}
</script>
