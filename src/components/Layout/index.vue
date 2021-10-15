<!--
 * @Description: '系统导航栏 '
 * @Author: llgtfoo
 * @Date: 2021-09-22 16:51:23
 * @Last Modified by:   llgtfoo
 * @Last Modified time: 2021-09-22 16:51:23
 --><template>
  <el-container style="height: 100vh">
    <el-header class="el-header">
      <div class="logo">系统名称</div>
      <div class="system-time">
        <date-time v-slot:default="slotProps">
          {{ slotProps.data.year }}年 {{ slotProps.data.month }}月
          {{ slotProps.data.day }}日&nbsp;&nbsp;&nbsp;
          {{ slotProps.data.week }}&nbsp;&nbsp;&nbsp;
          {{ slotProps.data.time }}
        </date-time>
      </div>
      <div class="user-info">
        <el-dropdown @command="handleCommand">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span class="icon iconfont icon-tuichudenglu"></span>
              退出登录
            </el-dropdown-item>
            <el-dropdown-item>
              <span class="icon iconfont icon-setting"></span>系统设置
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="theme-picker">
          <theme-picker></theme-picker>
        </div>
      </div>
    </el-header>
    <div style="height: calc(100% - 60px)">
      <side-menu></side-menu>
    </div>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
    }
  },

  created() {
  },
  methods: {
    handleCommand(command) {
      console.log(command)
    },

  },
}
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  width: 100%;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  background: #409eff;
  .el-menu {
    width: calc(100% - 400px);
  }
}
.logo {
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 25px;
}
.el-header {
  /deep/.el-menu--horizontal,
  /deep/.el-menu-item {
    background: #409eff !important;
  }
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid transparent !important;

  font-size: 16px;
  font-weight: bolder;
  position: relative;
  &:after {
    content: "";
    width: 80%;
    height: 3px;
    background: #fff;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
}
.iconfont {
  margin-right: 5px;
}
.system-time {
  color: #fff;
  margin-left: auto;
  padding-right: 60px;
  font-size: 20px;
  font-weight: bolder;
  height: 100%;
  display: flex;
  align-items: center;
  line-height: 100%;
  background: #409eff !important;
}
.user-info {
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .theme-picker {
    margin-left: 10px;
  }
}
</style>
