<template>
  <div class="login-wraper">
    <div class="login-form">
      <div class="login-logo">
        <img :src="logo" />
        <p class="logo-text">系统名称</p>
      </div>
      <div class="login-right-form">
        <el-row>
          <el-col :span="24">
            <div class="form-title">账号登录</div>
          </el-col>
        </el-row>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="50px"
          class="login-ruleForm"
          label-position="top"
          size="large"
          @keyup.enter.native="submitForm()"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              type="text"
              v-model="ruleForm.username"
              autocomplete="off"
              placeholder="请输入用户名"
            >
              <template #prefix>
                <el-icon class="el-input__icon" style="color: #fff"
                  ><User
                /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="ruleForm.password"
              autocomplete="off"
              placeholder="请输入密码"
            >
              <template #prefix>
                <el-icon class="el-input__icon" style="color: #fff"
                  ><Key
                /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox
              v-model="ruleForm.checked"
              :disabled="ruleForm.username === ''"
              @change="onChnage"
            >
              记住用户名
            </el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="width: 100%"
              size="large"
              @click="submitForm()"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../assets/svg/logo.svg'
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    const validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    return {
      logo,
      ruleForm: {
        username: '',
        password: '',
        checked: false,
      },
      rules: {
        username: [{
          validator: validateUser, trigger: 'change',
        }],
        password: [
          {
            validator: validatePass, trigger: 'change',
          },
        ],
      },
    }
  },
  mounted() {
    if (localStorage.getItem('username')) {
      this.ruleForm.checked = true
      this.ruleForm.username = localStorage.getItem('username')
    }
  },
  methods: {
    //记住用户名
    onChnage(val) {
      console.log(val)
      if (val) {
        localStorage.setItem('username', this.ruleForm.username)
      } else {
        localStorage.removeItem('username')
      }
    },
    //登录
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$router.push('/home')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang='scss' scoped>
.login-wraper {
  width: 100%;
  height: 100%;
  background: url("../../assets/imgs/login.png") no-repeat;
  .login-form {
    display: flex;
    width: 740px;
    height: 460px;
    box-shadow: 0 2px 9px 0 #0b1e3f;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .login-logo {
      width: 280px;
      height: 460px;
      background: #132e54;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .logo-text {
        font-size: 20px;
        font-weight: 400;
        color: #8bafd3;
        margin: 0 auto;
        margin-top: 40px;
        white-space: nowrap;
      }
      .svg-icon {
        width: 10em;
        height: 10em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
    }
    .login-right-form {
      width: 460px;
      background-color: #102a4e;
      height: 460px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .form-title {
        color: #fff;
        font-size: 20px;
        font-weight: bolder;
        align-self: start;
        box-sizing: border-box;
        // border-bottom: 3px solid #fff;
        margin-bottom: 10px;
      }
      .login-ruleForm {
        width: 80%;
      }
    }
  }
  :deep(.el-form-item__label) {
    color: #fff;
    font-size: 16px;
    padding: 0;
    margin-bottom: 0px !important;
  }
  :deep(.el-checkbox__label) {
    color: #fff;
  }
  :deep(.el-input__inner),
  :deep(.el-input__wrapper) {
    background: transparent;
    color: #fff;
  }
}
</style>