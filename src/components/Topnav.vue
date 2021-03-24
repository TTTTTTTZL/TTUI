<template>
  <div class="container">
    <div class="left-item">TopNav</div>
    <ul class="right-item">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 80px;
  background: pink;
  align-items: center;
  .left-item {
    flex: 1;
  }
  .right-item {
    flex: 1;
    display: flex;
    > li {
      // flex: 1;
      margin-left: 32px;
    }
  }
}
</style>
