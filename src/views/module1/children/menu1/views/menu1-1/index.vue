<template>
  <e-table
    ref="eTable"
    :isloading="isloading"
    :data="data"
    rowKey="ID"
    :border="true"
    :columns="stockColumn"
    :currentPage="currentPage"
    :pageSize="pageSize"
    :totalPage="totalPage"
    @cell-click="cellClick"
    @current-change="currentChange"
    @size-change="sizeChange"
    @selection-change="selectionChange"
  >
    <template v-slot:operation="{ data }">
      <el-button @click.prevent="handleClick(data)" type="text" size="small">
        查看
      </el-button>
      <el-button type="text" size="small"> 编辑 </el-button>
    </template>
    <template v-slot:name1="{ data }">
      <el-tag type="success">{{ data.row.name }}</el-tag>
    </template>
  </e-table>
</template>

<script>
import { stockColumn } from './columns'
export default {
  data() {
    return {
      isloading: false,
      data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
      ],
      stockColumn,
      currentPage: 10,
      pageSize: 10,
      totalPage: 100,
    }
  },
  mounted() { },
  methods: {
    //点击行
    cellClick({ row, column, event }) {
      console.log(row, column, event)
    },
    //页码改变
    currentChange(page) {
      console.log(page)
    },
    //页条数改变
    sizeChange(size) {
      console.log(size)
    },
    //多选项
    selectionChange(selection) {
      console.log(selection)
    },
    handleClick(data) {
      console.log(data, 'data')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>