<template>
  <div class="wrapper">
    <router-view v-slot="{ Component, route }">
      <keep-alive
        v-if="Component && Object.keys(Component).length > 0"
        :include="['Layout', 'SideMenu']"
      >
        <component :is="Component" :route="route"> </component>
      </keep-alive>
      <loading v-else></loading>
    </router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    // const { proxy } = getCurrentInstance()//获取App全局变量
    return { store }
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  min-width: 1000px;
}
:deep(.el-button--primary:active) {
  background: var(--el-button-bg-color);
  border-color: var(--el-button-bg-color);
}
:deep(.el-dialog__footer) {
  text-align: center;
}
</style>


