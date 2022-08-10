<template>
  <p>only-form组件用法</p>
  <!-- form -->
  <only-form
    label-position="right"
    ref="onlyFormRefs"
    :onlyform="onlyform"
    v-model:ruleForm="ruleForm"
  >
  </only-form>
  <div class="right">
    <el-button type="primary" @click="save" :loading="buttonIsloading"
      ><el-icon><Check /></el-icon>保存</el-button
    >
    <el-button type="success" @click="reset"
      ><el-icon><Refresh /></el-icon>重置</el-button
    >
  </div>
</template>

<script>
import { onlyform, setSelectOption } from "./onlyform.js";
import { reactive, ref, watch, nextTick, onMounted } from "vue";
export default {
  setup() {
    const onlyFormRefs = ref();
    const ruleForm = reactive({
      censorContentId: "", // 所属id
      content: "",
      userId: "",
    });
    const buttonIsloading = ref(false);
    // 保存
    function save() {
      buttonIsloading.value = true;
      onlyFormRefs.value
        .validityState()
        .then((obj) => {})
        .catch((err) => {
          buttonIsloading.value = false;
        });
    }
    // 重置
    function reset() {
      onlyFormRefs.value.resetForm();
    }
    return {
      save,
      reset,
      onlyFormRefs,
      ruleForm,
      onlyform,
      buttonIsloading,
    };
  },
};
</script>

<style lang="scss" scoped></style>
