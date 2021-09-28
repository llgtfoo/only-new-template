<!--
 * @Description: 'el-table封装 '
 * @Author: llgtfoo
 * @Date: 2021-09-15 09:27:57
 * @Last Modified by:   llgtfoo
 * @Last Modified time: 2021-09-15 09:27:57
 -->
<template>
  <div>
    <el-table
      v-loading="isloading"
      ref="elTable"
      :data="data"
      :row-key="rowKey"
      :height="height"
      :max-height="maxHeight"
      :stripe="stripe"
      :border="border"
      :expand-row-keys="expandRows"
      :highlight-current-row="highlightCurrentRow"
      :row-style="rowStyle"
      :cell-style="cellStyle"
      :header-cell-style="headerCellStyle"
      :header-row-style="headerRowStyle"
      style="width: 100%"
      @cell-click="cellClick"
      @row-click="rowClick"
      @selection-change="selectionChange"
      @expand-change="expandChange"
    >
      <template v-for="(item, index) in columns">
        <el-table-column
          :key="item.prop"
          :align="item.align ? item.align : 'left'"
          v-if="item.slot"
          :type="item.type ? item.type : ''"
          :fixed="item.fixed ? item.fixed : false"
          :prop="item.prop"
          :label="item.label"
          :width="item.width ? item.width : false"
        >
          <template slot-scope="scope">
            <slot :name="item.slot" :data="scope" />
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="item.prop"
          :align="item.align ? item.align : 'left'"
          :type="item.type ? item.type : ''"
          :fixed="item.fixed ? item.fixed : false"
          :prop="item.prop"
          :label="item.label"
          :width="item.width ? item.width : false"
        >
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="pagination"
      class="pagination-define"
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="currentPage"
      :page-sizes="pageSizeArray"
      background
      prev-text="上一页"
      next-text="下一页"
      :page-size="pageSize"
      :total="totalPage"
      :layout="layout"
    >
    </el-pagination>
  </div>
</template>
 <!--  -->
<script>
export default {
  name: 'ETable',
  props: {
    //页条数
    pageSizeArray: {
      type: Array,
      default: () => ([10, 20, 30, 40]),
    },
    //Table 目前的展开行
    expandRows: {
      type: Array,
    },
    //绑定的行数据的 Key
    rowKey: {
      type: String,
    },
    //表格高度
    height: {
      type: [Number, String],
    },
    //显示分页
    pagination: {
      type: Boolean,
      default: true,
    },
    //分页功能排序
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper',
    },
    //表格最大高度
    maxHeight: {
      type: [Number, String],
    },
    //当前页
    currentPage: {
      type: [Number, String],
      default: 1,
    },
    //页条数
    pageSize: {
      type: [Number, String],
      default: 10,
    },
    //总条数
    totalPage: {
      type: [Number, String],
      default: 0,
    },
    //表头行的 style 的回调方法
    headerRowStyle: {
      type: Object,
      default: () => ({}),
    },
    // 表头单元格的 style
    headerCellStyle: {
      type: Object,
      default: () => ({
        // padding: 0,
        'background-color': '#F5F6FA',
      }),
    },
    //行的 style 的回调方法
    rowStyle: {
      type: Object,
      default: () => ({
        height: '50px',
        'line-height': '50px',
      }),
    },
    // 单元格的 style
    cellStyle: {
      type: Object,
      default: () => ({
        padding: 0,
      }),
    },
    //是否要高亮当前行
    highlightCurrentRow: {
      type: Boolean,
      default: false,
    },
    // 是否为斑马纹 table
    stripe: {
      type: Boolean,
      default: true,
    },
    // 是否带有纵向边框
    border: {
      type: Boolean,
      default: false,
    },
    // loading
    isloading: {
      type: Boolean,
      default: false,
    },
    //数据
    data: {
      type: Array,
      default: () => [],
    },
    // 列表项
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
  mounted() { },
  methods: {
    //页条数
    sizeChangeHandle(number) {
      this.$emit('size-change', number)
    },
    //页码
    currentChangeHandle(page) {
      this.$emit('current-change', page)
    },

    // el-table dom
    tableRef() {
      return this.$refs.elTable
    },
    // 默认选中项
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.elTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.elTable.clearSelection()
      }
    },
    // z展开回调
    expandChange(row, expandedRows) {
      this.$emit('expand-change', row, expandedRows)
    },
    // 当选择项发生变化时会触发该事件
    selectionChange(selection) {
      this.$emit('selection-change', selection)
    },
    // 当某个单元格被点击时会触发该事件
    rowClick(row, column, event) {
      this.$emit('row-click', { row, column, event })
    },
    // 当某个单元格被点击时会触发该事件
    cellClick(row, column, cell, event) {
      this.$emit('cell-click', { row, column, cell, event })
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination-define {
  text-align: center;
  margin-top: 10px;
}
</style>
