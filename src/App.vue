<template>
  <div class="wrapper">
    <keep-alive :include="['Layout', 'SideMenu']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  watch: {},
  mounted() { },
  created() { },
}
</script>

<style lang="scss">
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
}
</style>
