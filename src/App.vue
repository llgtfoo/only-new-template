<template>
  <div class="wrapper" v-auto-scale="{ width: 1920, height: 1080 }">
    <div class="screen-body">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
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
  width: 100vw;
  height: 100vh;
  background-color: #020308;
  overflow: hidden;
}
</style>
