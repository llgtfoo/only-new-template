export const onlyform = [
    {
        "type": "text",
        "placeholder": "请输入制单人",
        "col": 6,
        "rules": [{ required: true, message: '不能为空' }],
        "size": "default",
        "prop": "preparedBy",
        "label": "制单人",
        "labelWidth": "100px",
        "disabled": true
    },
    {
        "type": "datetime",
        "col": 6,
        "rules": [{ required: true, message: '不能为空' }],
        "size": "default",
        "prop": "preparedTime",
        "label": "制单日期",
        "placeholder": "请选择制单日期",
        "labelWidth": "110px",
        "format": "YYYY-MM-DD HH:mm:ss",
        "value-format": "YYYY-MM-DD HH:mm:ss",
        "disabled": true
    },
    {
        "type": "select",
        "col": 6,
        "rules": [{ required: true, message: '不能为空' }],
        "size": "default",
        "prop": "warehouseDept",
        "label": "仓储部门",
        "placeholder": "请选择仓储部门",
        "labelWidth": "100px",
        "options": []
    },
    {
        "type": "select",
        "col": 6,
        "rules": [{ required: true, message: '不能为空' }],
        "size": "default",
        "prop": "pickingDept",
        "label": "领料部门",
        "placeholder": "请选择领料部门",
        "labelWidth": "100px",
        "options": []
    },
    {
        "type": "text",
        "placeholder": "请输入领料人",
        "col": 6,
        "rules": [{ required: true, message: '不能为空' }],
        "size": "default",
        "prop": "pickingBy",
        "label": "领料人",
        "labelWidth": "100px",
    },
    {
        "type": "select",
        "col": 6,
        "rules": [],
        "size": "default",
        "prop": "workOrderType",
        "label": "工单类型",
        "placeholder": "请选择工单类型",
        "labelWidth": "110px",
        "options": []
    },
    {
        "type": "text",
        "placeholder": "请输入工单号",
        "col": 6,
        "rules": [{ required: true, message: '不能为空' }],
        "size": "default",
        "prop": "workOrderNum",
        "label": "工单号",
        "labelWidth": "100px",
    },
    {
        "type": "select",
        "col": 6,
        "rules": [{ required: true, message: '不能为空' }],
        "size": "default",
        "prop": "devId",
        "label": "设备名称",
        "placeholder": "请选择设备名称",
        "labelWidth": "100px",
        "options": []
    },
    {
        "type": "select",
        "col": 6,
        "rules": [{ required: true, message: '不能为空' }],
        "size": "default",
        "prop": "courseName",
        "label": "科目名称",
        "placeholder": "请选择科目名称",
        "labelWidth": "100px",
        "options": []
    },
    {
        "type": "select",
        "col": 6,
        "rules": [{ required: true, message: '不能为空' }],
        "size": "default",
        "prop": "functionDept",
        "label": "职能部门审批",
        "placeholder": "请选择职能部门审批",
        "labelWidth": "110px",
        "options": []
    },
    {
        "type": "select",
        "col": 6,
        "rules": [{ required: true, message: '不能为空' }],
        "size": "default",
        "prop": "pickingCharge",
        "label": "领料主管",
        "placeholder": "请选择领料主管",
        "labelWidth": "100px",
        "options": []
    },
    {
        "type": "textarea",
        "col": 12,
        "rules": [],
        "size": "default",
        "prop": "remark",
        "label": "备注",
        "placeholder": "请输入备注",
        "labelWidth": "100px",
        "autosize": { minRows: 1, maxRows: 2 },
    },
]
/**
 * @name:设置form配置中select下拉options
 * @param {target} 目标form配置
 * @param {prop}   要设置options的关键字prop
 * @param {value}  /  options数组
 * @param {value}  ['name', 'id']  options值格式{ lable: "", value: "" } , value中的键名
 */
export const setSelectOption = (target, prop, value, key) => {
    const index = target.findIndex(v => v.prop === prop)
    if (index !== -1) {
        if (key) {
            value.forEach(vl => {
                vl.label = vl[key[0]]
                vl.value = vl[key[1]]
            })
        }
        target[index].options = value
    }
}