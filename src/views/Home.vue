<template>
  <Topnav></Topnav>

  <div>
    HOME

    <router-link to="doc"> 开始</router-link>
  </div>
</template>

<script>
import Topnav from '../components/Topnav.vue'

export default {
  components: { Topnav },
}
</script>

<style lang="scss" scoped></style>
