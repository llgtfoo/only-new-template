<template>
  <div class="home-page">
    <dv-loading v-if="loading">Loading...</dv-loading>
    <div v-else class="host-body">
      <!-- 顶部头 -->
      <div class="d-flex">
        <dv-decoration-10 class="dv-dec-10" />
        <div class="d-flex">
          <dv-decoration-8 class="dv-dec-8" :color="['#568aea', '#000000']" />
          <div class="title">
            <span class="title-text">大数据可视化平台</span>
            <dv-decoration-6
              class="dv-dec-6"
              :reverse="true"
              :color="['#50e3c2', '#67a1e5']"
            />
          </div>
          <dv-decoration-8
            class="dv-dec-8"
            :reverse="true"
            :color="['#568aea', '#000000']"
          />
        </div>
        <dv-decoration-10 class="dv-dec-10-s" />
      </div>
      <div class="main">
        <left-screen></left-screen>
        <center-screen></center-screen>
        <right-screen></right-screen>
      </div>
    </div>
  </div>
</template>
<script>
import leftScreen from './cell/left-screen'
import centerScreen from './cell/center-screen'
import rightScreen from './cell/right-screen'
export default {
  components: { leftScreen, centerScreen, rightScreen },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  padding: 16px 16px 0 16px;
  background-image: url("~@/assets/imgs/pageBg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  box-sizing: border-box;
  overflow: hidden;
  .host-body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .d-flex {
      display: flex;
    }
    .dv-dec-10,
    .dv-dec-10-s {
      width: 33.3%;
      height: 5px;
    }
    .dv-dec-10-s {
      transform: rotateY(180deg);
    }
    .dv-dec-8 {
      width: 200px;
      height: 50px;
    }
    .title {
      position: relative;
      width: 500px;
      text-align: center;
      background-size: cover;
      background-repeat: no-repeat;
      color: #fff;
      .title-text {
        font-size: 24px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
      }

      .dv-dec-6 {
        position: absolute;
        bottom: -30px;
        left: 50%;
        width: 250px;
        height: 8px;
        transform: translate(-50%);
      }
    }
  }
  .main {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
  }
  /deep/.dv-border-box-8 .border-box-content {
    // display: flex;
    // align-items: center;
    // color: #fff;
    // justify-content: center;
  }
}
</style>
