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
export default {
  name: 'DateTime',
  data() {
    return {
      timer: null,
      nowWeek: '',
      nowDate: '',
      nowTime: '',
      data: {},
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.setNowTimes()
    }, 1000) //时间
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    setNowTimes() {
      const myDate = new Date()
      const wk = myDate.getDay()
      const yy = String(myDate.getFullYear())
      const mm = myDate.getMonth() + 1
      const dd = String(
        myDate.getDate() < 10 ? `0${myDate.getDate()}` : myDate.getDate(),
      )
      const hou = String(
        myDate.getHours() < 10 ? `0${myDate.getHours()}` : myDate.getHours(),
      )
      const min = String(
        myDate.getMinutes() < 10 ?
          `0${myDate.getMinutes()}` :
          myDate.getMinutes(),
      )
      const sec = String(
        myDate.getSeconds() < 10 ?
          `0${myDate.getSeconds()}` :
          myDate.getSeconds(),
      )
      const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      const week = weeks[wk]
      this.nowDate = `${yy}/${mm}/${dd} ${week}`
      this.nowTime = `${hou}:${min}:${sec}`
      this.nowWeek = week
      this.data = {
        year: yy,
        month: mm,
        day: dd,
        week: this.nowWeek,
        time: this.nowTime,
      }
    },
  },
}

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