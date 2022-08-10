/**
 * @description: echarts动画统一封装
 * @param {echarts 选项options}
 * @return:
 */
<template>
  <div class="chart-box">
    <div ref="echartCommon" class="chart"></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted, getCurrentInstance, watch } from 'vue'

import doAnimation from 'utils/doAnimation.js'

export default defineComponent({
  name: 'EchartCommon',
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const proxy = getCurrentInstance().proxy//获取App全局变量
    const chart = ref(null)
    const animate = ref(null)
    const echartCommon = ref(null)//注册ref获取dom
    watch(() => props.options, () => {
      updateChartView()
    }, { deep: true })
    onMounted(() => {
      updateChartView()
      window.addEventListener('resize', handleWindowResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleWindowResize)
      if (animate.value) {
        animate.value.destory()
      }
    })
    //监听窗口改变
    const handleWindowResize = () => {
      if (chart.value) {
        chart.value.resize()
      }
    }
    //渲染函数
    const updateChartView = () => {
      chart.value = proxy.$echarts.init(echartCommon.value)//获取渲染dom初始化
      if (!chart.value || Object.keys(props.options).length === 0) {
        return
      }
      chart.value.clear()
      // eslint-disable-next-line no-unused-vars
      new Promise((resolve, reject) => {
        props.options && chart.value.setOption(props.options)
        resolve(true)
      }).then(() => {
        if (animate.vlaue) {
          animate.vlaue.destory()
          animate.vlaue = null
        }
        animate.vlaue = new doAnimation(chart.value)
        animate.vlaue.animate()
      })
    }
    return { chart, animate, updateChartView, echartCommon }
  }
})
</script>

<style lang="scss" scoped>
.chart,
.chart-box {
  width: 100%;
  height: 100%;
}
</style>