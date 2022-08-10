/**
 * @name: 系统loading
 * @param {type}
 */
<template>
  <div :class="styles.loadingWarp">
    <div :class="styles.loading">
      <div :class="styles.dot"></div>
      <div :class="styles.dot"></div>
      <div :class="styles.dot"></div>
      <div :class="styles.dot"></div>
      <div :class="styles.dot"></div>
    </div>
  </div>
</template>
<script>
import styles from './index.module.scss'
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Loading",
  data() {
    return {
      styles
    }
  }
})
</script>
