export const onlyform = [
    {
        "type": "text",
        "placeholder": "名称",
        "col": 6,
        "rules": [{ required: true, message: '名称 is required' }],
        "size": "default",
        "prop": "name",
        "label": "名称",
        "labelWidth": "100px",
    },
    {
        "type": "number",
        "placeholder": "数字",
        "col": 6,
        "rules": [{ required: true, message: '数字 is required' }],
        "size": "default",
        "prop": "number",
        "label": "数字",
        "labelWidth": "100px",
    },
    {
        "type": "switch",
        "placeholder": "开关",
        "col": 6,
        "rules": [{ required: true, message: 'switch is required' }],
        "size": "default",
        "prop": "close",
        "label": "开关",
        "labelWidth": "100px",
    },
    {
        "type": "select",
        "col": 6,
        "rules": [{ required: true, message: '区域 is required' }],
        "size": "default",
        "prop": "area",
        "label": "区域",
        "placeholder": "区域",
        "labelWidth": "100px",
        "options": [
            { "label": '安徽', "value": '1' },
            { "label": '杭州', "value": '0' },
        ]
    },
    {
        "type": "checkbox",
        "col": 6,
        "rules": [{ required: true, message: '复选框 is required' }],
        "size": "default",
        "prop": "types",
        "label": "复选框",
        "placeholder": "复选框",
        "labelWidth": "100px",
        "options": [
            {
                "label": '安徽',
                "value": '1'
            },
            {
                "label": '杭州',
                "value": '0'
            },
        ]
    },
    {
        "type": "radio",
        "col": 6,
        "rules": [{ required: true, message: '单选框 is required' }],
        "size": "default",
        "prop": "resource",
        "label": "单选框",
        "placeholder": "单选框",
        "labelWidth": "100px",
        "options": [
            {
                "label": '安徽',
                "value": '1'
            },
            {
                "label": '杭州',
                "value": '0'
            },
        ]
    },
    {
        "type": "date",
        "col": 6,
        "rules": [],
        "size": "default",
        "prop": "date",
        "label": "开始日期",
        "placeholder": "开始日期",
        "labelWidth": "100px",
        "format": "YYYY-MM-DD",
        "value-format": "YYYY-MM-DD",
    },
    {
        "type": "time",
        "col": 6,
        "rules": [],
        "size": "default",
        "prop": "time",
        "label": "开始时间",
        "placeholder": "开始时间",
        "labelWidth": "100px",
        "format": "HH:mm:ss",
        "value-format": "HH:mm:ss",
    },
    {
        "type": "datetime",
        "col": 6,
        "rules": [],
        "size": "default",
        "prop": "dateTime",
        "label": "日期和时间",
        "placeholder": "日期和时间",
        "labelWidth": "100px",
        "format": "YYYY-MM-DD HH:mm:ss",
        "value-format": "YYYY-MM-DD HH:mm:ss",
    },
    {
        "type": "selecttime",
        "col": 6,
        "rules": [],
        "size": "default",
        "prop": "selectTime",
        "label": "时间select",
        "placeholder": "时间select",
        "labelWidth": "100px",
        "start": "08:30",
        "step": "00:15",
        "end": "18:30",
    },
    {
        "type": 'slot',
        "slot": "age",
        "col": 6,
    },
    {
        "type": "textarea",
        "col": 24,
        "rules": [],
        "size": "default",
        "prop": "desc",
        "label": "备注",
        "placeholder": "备注",
        "labelWidth": "100px",
        "autosize": { minRows: 4, maxRows: 8 },
    },
]