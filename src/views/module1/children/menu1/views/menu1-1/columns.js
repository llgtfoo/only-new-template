/*
 * @Description: 
 * @Author: llgtfoo
 * @Date: 2021-09-29 08:56:16
 * @LastEditTime: 2022-05-26 11:19:20
 * @LastEditors: llgtfoo
 * @FilePath: \tpl-hr-vue\src\views\module1\children\menu1\views\menu1-1\columns.js
 */
export const stockColumn = [{
    type: 'selection',
    width: '60px',
    // fixed: 'left',
    align: 'center',
},
{
    prop: 'name',
    label: '姓名',
    width: '120px',
    // fixed: 'left',
    align: 'center',
    slot: 'name1',
},
{
    prop: 'date',
    label: '日期',
    align: 'center',
    width: '120px',
},
{
    prop: 'address',
    align: 'center',
    label: '地址',
},
{
    prop: 'address1',
    align: 'center',
    label: '区域',
},
{
    prop: 'address3',
    align: 'center',
    label: '学业',
},
{
    prop: 'operation',
    label: '操作',
    width: '150px',
    align: 'center',
    fixed: 'right',
    slot: 'operation',
},

]