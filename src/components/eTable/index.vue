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
            @size-change="sizeChangeHandle"
            @current-change="currentChangeHandle"
            :current-page="currentPage"
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
 <!-- <template slot-scope="{data}" slot="operation">
          <el-button
            @click="handleClick(data.row)"
            type="text"
            size="small"
            >查看</el-button
          >
          <el-button type="text" size="small"
            >编辑</el-button
          >
        </template>
        <template slot-scope="scope" slot="name1">
          <span>{{ scope.data.row.name }}</span>
        </template> -->
<script>
export default {
    props: {
        expandRows: {
            type: Array,
        },
        rowKey: {
            type: String,
        },
        height: {
            type: [Number, String],
        },
        pagination: {
            type: Boolean,
            default: true,
        },
        layout: {
            type: String,
            default: 'prev, pager, next, total ,jumper',
        },
        maxHeight: {
            type: [Number, String],
        },
        currentPage: {
            type: [Number, String],
            default: 1,
        },
        pageSize: {
            type: [Number, String],
            default: 10,
        },
        totalPage: {
            type: [Number, String],
            default: 0,
        },
        headerRowStyle: {
            type: Object,
            default: () => ({}),
        }, // 表头行的 style
        headerCellStyle: {
            type: Object,
            default: () => ({
                padding: 0,
                'background-color': '#F5F6FA',
            }),
        }, // 表头单元格的 style
        rowStyle: {
            type: Object,
            default: () => ({
                height: '30px',
                'line-height': '30px',
            }),
        }, // 行的 style
        cellStyle: {
            type: Object,
            default: () => ({
                padding: 0,
            }),
        }, // 单元格的 style
        highlightCurrentRow: {
            type: Boolean,
            default: true,
        }, // 是否要高亮当前行
        stripe: {
            type: Boolean,
            default: true,
        }, // 是否为斑马纹 table
        border: {
            type: Boolean,
            default: false,
        }, // 是否带有纵向边框
        isloading: {
            type: Boolean,
            default: false,
        }, // loading
        data: {
            type: Array,
            default: () => [],
        }, // 数据
        columns: {
            type: Array,
            default: () => [],
        }, // 列表项
    },
    data() {
        return {}
    },
    mounted() { },
    methods: {
        sizeChangeHandle(number) {
            this.$emit('size-change', number)
        },
        currentChangeHandle(page) {
            this.$emit('current-change', page)
        },

        // el-table dom
        tableRef() {
            return this.$refs.elTable
        },
        // 默认选中想
        toggleSelection(rows) {
            console.log(rows, 'rows')
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
        handleClick(row) {
            console.log(row)
        },
    },
}
</script>

<style lang="scss" scoped></style>
