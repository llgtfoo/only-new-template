/**
 * @name:系统时间组件----作用域插槽
 * @param {type}
 */
<template>
  <div class="llgtfoo-date">
    <slot :data="data"></slot>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'DateTime',
  setup() {
    const state = reactive({
      timer: null,
      nowWeek: '',
      nowDate: '',
      nowTime: '',
      data: {},
    })
    onMounted(() => {
      state.timer = setInterval(() => {
        setNowTimes()
      }, 1000) //时间
    })
    onUnmounted(() => {
      if (state.timer) {
        clearInterval(state.timer)
      }
    })
    const setNowTimes = function () {
      const myDate = new Date()
      const wk = myDate.getDay()
      const yy = String(myDate.getFullYear())
      const mm = myDate.getMonth() + 1
      const dd = String(
        myDate.getDate() < 10 ? `0${myDate.getDate()}` : myDate.getDate()
      )
      const hou = String(
        myDate.getHours() < 10 ? `0${myDate.getHours()}` : myDate.getHours()
      )
      const min = String(
        myDate.getMinutes() < 10 ?
          `0${myDate.getMinutes()}` :
          myDate.getMinutes()
      )
      const sec = String(
        myDate.getSeconds() < 10 ?
          `0${myDate.getSeconds()}` :
          myDate.getSeconds()
      )
      const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      const week = weeks[wk]
      state.nowDate = `${yy}/${mm}/${dd} ${week}`
      state.nowTime = `${hou}:${min}:${sec}`
      state.nowWeek = week
      state.data = {
        year: yy,
        month: mm,
        day: dd,
        week: state.nowWeek,
        time: state.nowTime,
      }
    }
    return { ...toRefs(state), setNowTimes }
  }
})
</script>

<style scoped lang='scss'>
.llgtfoo-date {
  display: flex;
  align-items: center;
  height: 100%;
  flex-wrap: nowrap;
  line-height: 100%;
  width: max-content;
}
</style>