<!--
 * @Description:element-plus 表单组件封装
 * @Author: llgtfoo
 * @Date: 2021-09-29 08:51:41
 * @LastEditTime: 2022-06-06 15:39:13
 * @LastEditors: llgtfoo
 * @FilePath: \new-eam-web\src\components\onlyForm\index.vue
-->
<template>
  <el-form v-bind="$attrs" ref="ruleFormRef" :model="ruleForm">
    <el-row :gutter="gutter">
      <el-col :span="form.col" v-for="form in onlyform" :key="form.name">
        <!-- 数字类型input输入框 -->
        <el-form-item
          v-if="form.type === 'number'"
          :label="form.label"
          :prop="form.prop"
          :label-width="form.labelWidth"
          :rules="form.rules"
        >
          <el-input
            style="width: 100%"
            @input="(value) => change(form.prop, value)"
            v-model.number="ruleForm[`${form.prop}`]"
            :type="form.type"
            v-bind="form"
            clearable
          />
        </el-form-item>
        <!-- input输入框 -->
        <el-form-item
          v-if="form.type === 'text'"
          :label="form.label"
          :prop="form.prop"
          :label-width="form.labelWidth"
          :rules="form.rules"
        >
          <el-input
            @input="(value) => change(form.prop, value)"
            v-model="ruleForm[`${form.prop}`]"
            :type="form.type"
            v-bind="form"
            clearable
            style="width: 100%"
          />
        </el-form-item>
        <!-- textarea 输入框 -->
        <el-form-item
          v-if="form.type === 'textarea'"
          :label="form.label"
          :prop="form.prop"
          :label-width="form.labelWidth"
          :rules="form.rules"
        >
          <el-input
            @input="(value) => change(form.prop, value)"
            v-model="ruleForm[`${form.prop}`]"
            :type="form.type"
            clearable
            v-bind="form"
            style="width: 100%"
          />
        </el-form-item>
        <!-- select选择框 -->
        <el-form-item
          v-if="form.type === 'select'"
          :label="form.label"
          :prop="form.prop"
          :label-width="form.labelWidth"
          :rules="form.rules"
        >
          <el-select
            v-model="ruleForm[`${form.prop}`]"
            v-bind="form"
            clearable
            style="width: 100%"
            @change="(value) => change(form.prop, value)"
          >
            <el-option
              :label="option.label"
              :value="option.value"
              v-for="option in form.options"
              :key="option.value+''"
            />
          </el-select>
        </el-form-item>
        <!-- 日期时间选择器 -->
        <el-form-item
          v-if="form.type.includes('date') || form.type.includes('time')"
          :label="form.label"
          :prop="form.prop"
          :label-width="form.labelWidth"
          :rules="form.rules"
        >
          <el-date-picker
            @change="(value) => change(form.prop, value)"
            v-if="form.type.startsWith('date')"
            v-model="ruleForm[`${form.prop}`]"
            v-bind="form"
            style="width: 100%"
          />
          <el-time-picker
            @change="(value) => change(form.prop, value)"
            v-if="form.type.startsWith('time')"
            v-model="ruleForm[`${form.prop}`]"
            v-bind="form"
            style="width: 100%"
          />
          <el-time-select
            @change="(value) => change(form.prop, value)"
            v-if="form.type === 'selecttime'"
            v-model="ruleForm[`${form.prop}`]"
            v-bind="form"
            style="width: 100%"
          />
        </el-form-item>
        <!-- 复选框 -->
        <el-form-item
          v-if="form.type === 'checkbox'"
          :label="form.label"
          :prop="form.prop"
          :label-width="form.labelWidth"
          :rules="form.rules"
        >
          <el-checkbox-group
            v-model="ruleForm[`${form.prop}`]"
            @change="(value) => change(form.prop, value)"
          >
            <el-checkbox
              style="width: 100%"
              name="type"
              :label="ele.value"
              v-for="(ele, index) in form.options"
              :key="index"
              >{{ ele.label }}</el-checkbox
            >
          </el-checkbox-group>
        </el-form-item>
        <!-- 单选框 -->
        <el-form-item
          v-if="form.type === 'radio'"
          :label="form.label"
          :prop="form.prop"
          :label-width="form.labelWidth"
          :rules="form.rules"
        >
          <el-radio-group
            style="width: 100%"
            v-model="ruleForm[`${form.prop}`]"
            @change="(value) => change(form.prop, value)"
          >
            <el-radio
              name="type"
              :label="ele.value"
              v-for="(ele, index) in form.options"
              :key="index"
              >{{ ele.label }}</el-radio
            >
          </el-radio-group>
        </el-form-item>
        <!-- switch开关 -->
        <el-form-item
          v-if="form.type === 'switch'"
          :label="form.label"
          :prop="form.prop"
          :label-width="form.labelWidth"
          :rules="form.rules"
        >
          <el-switch
            v-model="ruleForm[`${form.prop}`]"
            v-bind="form"
            @change="(value) => change(form.prop, value)"
          />
        </el-form-item>
        <!-- 插槽自定义 -->
        <template v-if="form.type === 'slot'">
          <slot :name="form.slot"></slot>
        </template>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { ref, nextTick } from "vue";

export default {
  name: "OnlyForm",
  props: {
    //表单值
    ruleForm: {
      type: Object,
    },
    //表单配置
    onlyform: {
      type: [Object, Array],
    },
    gutter: {
      type: [Number, String],
      default: 0,
    },
  },
  setup(props, { expose, emit }) {
    const ruleFormRef = ref(); //form ref
    //校验
    const validityState = () => {
      return new Promise((resolve, reject) => {
        ruleFormRef.value &&
          ruleFormRef.value.validate((valid, fields) => {
            if (valid) {
              resolve({ ...props.ruleForm });
            } else {
              reject(fields);
              console.log("error submit!", fields);
            }
          });
      });
    };
    //重置表单
    const resetForm = () => {
      ruleFormRef.value &&
        ruleFormRef.value.resetFields() &&
        ruleFormRef.value.clearValidate();
    };
    //选值回调
    const change = (funName, value) => {
      emit("change", funName, value);
    };
    const formRef = () => {
      return ruleFormRef.value;
    };
    //   /**
    // * @name:设置form配置中select下拉options
    // * @param {target} 目标form配置
    // * @param {prop}   要设置options的关键字prop
    // * @param {value}  options数组
    // * @param {value}  ['name', 'id']  options值格式{ lable: "", value: "" } , value中的键名
    // */
    const setSelectOption = (target, prop, value, key) => {
      const index = target.findIndex((v) => v.prop === prop);
      if (index !== -1) {
        if (key) {
          value.forEach((vl) => {
            vl.label = vl[key[0]];
            vl.value = vl[key[1]];
          });
        }
        target[index].options = value;
      }
    };
    //暴露给父组件使用的ref方法集合
    expose({
      validityState,
      resetForm,
      setSelectOption,
      formRef,
    });
    return {
      ruleFormRef,
      change,
    };
  },
};
</script>

<style lang="scss" scoped></style>
