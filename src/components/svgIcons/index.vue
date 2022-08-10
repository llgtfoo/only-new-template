/**
 * @name: 全局svg图标
 * @param {type}
 */
<template>
  <svg :class="svgClass" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'SvgIcons',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const iconName = computed(() => {
      return `#icon-${props.iconClass}`
    })
    const svgClass = computed(() => {
      if (props.className) {
        return `svg-icon ${props.className}`
      } else {
        return 'svg-icon'
      }
    })
    return {
      iconName,
      svgClass,
    }
  },
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
