<!--
 * @Description:
 * @Author: llgtfoo
 * @Date: 2021-09-30 17:18:41
 * @LastEditTime: 2021-10-07 20:11:13
 * @LastEditors: llgtfoo
 * @FilePath: \tpl-hr-vue\src\views\screen\children\home\cell\left-screen\index.vue
-->
<template>
  <div class="left">
    <dv-border-box-8
      :reverse="true"
      :dur="10"
      style="height: 100%; width: 100%"
    >
      <div class="section">
        <dv-border-box-1>
          <echart-common :options="options"></echart-common>
        </dv-border-box-1>
      </div>
    </dv-border-box-8>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          show: false,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff',
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff',
              },
            },
          },
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            emphasis: {
              focus: 'series',
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series',
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'Search Engine',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series',
            },
            markLine: {
              lineStyle: {
                type: 'dashed',
              },
              data: [[{ type: 'min' }, { type: 'max' }]],
            },
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120],
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
            },
            data: [120, 132, 101, 134, 290, 230, 220],
          },
          {
            name: 'Bing',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
            },
            data: [60, 72, 71, 74, 190, 130, 110],
          },
          {
            name: 'Others',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
            },
            data: [62, 82, 91, 84, 109, 110, 120],
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.left {
  width: 550px;
  box-sizing: border-box;
  /deep/.border-box-content {
    padding: 10px 10px 0;
    box-sizing: border-box;
  }
  .section {
    height: 400px;
  }
}
</style>