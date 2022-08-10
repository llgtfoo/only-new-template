\`

## element-plus form表单封装

\`

onlyform.js 配置

## type 类型 :

 1. text  输入框

 2. number  数字输入框

 3. textarea   多行 输入框

 4. select 下拉框

 5. checkbox 复选框

 6. radio 单选框

 7. date 日期选择框

 8. time 时间选择框

 9. datetime  日期时间选择框

10. selecttime 时间段选择框

11. slot 自定义

#### 配置必有项：

- [ ] type  form 框类型

- [ ] col   form 布局占位

- [ ] prop   双向绑定/校验绑定字段值

#### 选配置项：

- [ ] placeholder

- [ ] rules 校验规则

- [ ] size  formItem框 大小

- [ ] label label名称

- [ ] labelWidth label宽度

- [ ] 其他配置项 v-bind直接绑定到目标元素上\\\*\\\*\*\*其他配置项 v-bind直接绑定到目标元素上\*\***其他配置项 v-bind直接绑定到目标元素上**

##### exmple:

```javascript
 {

​    "type": "text",
​    "placeholder": "名称",
​    "col": 6,
​    "rules": [{ required: true, message: '名称 is required' }],
​    "size": "default",
​    "prop": "name",
​    "label": "名称",
​    "labelWidth": "100px",
  },
{
     "type": "select",
​    "col": 6,
​    "rules": [{ required: true, message: '区域 is required' }],
​    "size": "default",
​    "prop": "area",
​    "label": "区域",
​    "placeholder": "区域",
​    "labelWidth": "100px",
​    "options": [
​      { "label": '安徽', "value": '1' },
​      { "label": '杭州', "value": '0' },
​    ]
  },
 {
​    "type": "datetime",
​    "col": 6,
​    "rules": [],
​    "size": "default",
​    "prop": "dateTime",
​    "label": "日期和时间",
​    "placeholder": "日期和时间",
​    "labelWidth": "100px",
​    "format": "YYYY-MM-DD HH:mm:ss",
​    "value-format": "YYYY-MM-DD HH:mm:ss",
  },
 {
​    "type": 'slot',
​    "slot": "age",
​    "col": 6,
  },
```

- 设置onlyform配置项中type='select' 下拉框 options的值

```javascript
 target 目标form配置
 prop   要设置options的关键字prop
 value  options
 key  ['name','id']  options值格式{lable:"",value:""} ,value中的键名

export const setSelectOption = (target, prop, value, key) => {
    console.log(key)
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
```

## 组件使用

```javascript
<only-form
   label-position="right"
   ref="onlyFormRef"
   :onlyform="onlyform"
   v-model:ruleForm="ruleForm"
   @change="changeValue"
  \>
 <!-- 自定义 -->
   <template v-slot:age>
​    <el-form-item
​     label="年纪"
​     prop="age"
​     :rules="[
​      { required: true, message: 'age is required' },
​      { type: 'number', message: 'age must be a number' },
​     ]"
​    \>
​     <el-input
​      v-model.number="ruleForm.age"
​      type="text"
​      autocomplete="off"
​     />
​    </el-form-item>
   </template>
  </only-form>
```

##### 参数：

\`

label-position label 的位置

onlyform  form 配置

ruleForm 双向绑定数据，采用v-model 模式绑定同一个对象

change  每一项改变统一回调，一般用于多formItem 联动

\`

```csharp
change返回，funName 该元素prop名，value当前值
const changeValue = (funName, value) => {
  if (funName === 'warehouseId') {
    goodsAllocation(value)
  }
}
```

##### 事件说明：

- validityState (校验必填项规则，并以Promise返回form表单值)

  ```javascript
  formEl.validityState().then(obj => {
      //校验成功返回
      console.log(obj, '---')
    }).catch(err => {
     //校验失败
      console.log(err, '---')
    })
  ```

- resetForm (重置表单)
  父组件ref对象之间调用

  ```javascript
  onlyFormRef.resetForm()
  ```

##### 