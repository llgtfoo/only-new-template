export const stockColumn = [{
        type: 'selection',
        width: '60px',
        fixed: 'left',
        align: 'center',
    },
    {
        prop: 'name',
        label: '姓名',
        width: '120px',
        fixed: 'left',
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
        width: '100px',
        align: 'center',
        fixed: 'right',
        slot: 'operation',
    },

]