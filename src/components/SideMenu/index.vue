<!--
 * @Description: '系统菜单栏'
 * @Author: llgtfoo
 * @Date: 2021-09-26 10:10:27
 * @Last Modified by:   llgtfoo
 * @Last Modified time: 2021-09-26 10:10:27
 -->
<template>
  <el-container
    style="height: 100%"
    v-water-marker="{
      width: '300px',
      height: '150px',
      content: '系统名称',
    }"
  >
    <el-aside :style="{ width: `${!isCollapse ? '250px' : '65px'}` }">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical"
        :collapse="isCollapse"
        :unique-opened="true"
        :router="true"
        :default-openeds="defaultOpeneds"
        @select="selectMenu"
      >
        <template v-for="item in menuJson">
          <template v-if="item && item.children && item.children.length > 0">
            <sub-menu :menuInfo="item" :key="item.cnameKey" />
          </template>
          <template v-else>
            <el-menu-item :index="item.normalUrl" :key="item.normalUrl">
              <i class="icon iconfont" :class="item.icon"></i>
              <span slot="title" style="marginleft: 5px">
                {{ item.cname }}
              </span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
      <div
        class="isCollapse"
        @click="isCollapse = !isCollapse"
        :style="`width:${!isCollapse ? '250px' : '65px'}`"
      >
        <span
          class="icon iconfont"
          :class="{
            'icon-arrow-left': !isCollapse,
            'icon-arrow-right': isCollapse,
          }"
        ></span>
      </div>
    </el-aside>
    <el-container
      :style="{
        width: `${isCollapse ? 'calc(100% - 250px)' : 'calc(100% - 65px)'}`,
        display: 'flex',
        'flex-direction': 'column',
      }"
    >
      <div class="breadcrumb">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
          @tab-remove="removeTab"
          :closable="closable"
        >
          <el-tab-pane
            :label="item.name"
            :name="item.path"
            v-for="item in tabList"
            :key="item.path"
          >
          </el-tab-pane>
        </el-tabs>
        <div class="breadcrumb-tool">
          <el-dropdown @command="handleCommand">
            <i class="el-icon-arrow-down" style="fontsize: 18px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="all">
                关闭其他标签页
              </el-dropdown-item>
              <el-dropdown-item command="refresh">
                刷新当前标签页
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <el-main>
        <router-view v-if="isRouterActive"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
//菜单无限循环生成
const SubMenu = {
  template: `
    <el-submenu :index="menuInfo.normalUrl" v-bind="$props" v-on="$listeners">
     <template slot='title'>
        <i class="icon iconfont" :class="menuInfo.icon"></i>
        <span slot="title">{{menuInfo.cname }}</span>
      </template>
     <template v-for="v in menuInfo.children">
        <template v-if="v && v.children && v.children.length > 0">
          <sub-menu :menu-info="v" :key="v.normalUrl" />
        </template>
        <template v-else>
         <el-menu-item :index="v.normalUrl">
            <i class="icon iconfont" :class="v.icon"></i>
            <span slot="title">{{v.cname}}</span>
          </el-menu-item>
        </template>
    </template>
    </el-submenu>`,
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
}
import menuJson from '@/mock/menu/menu.json'
export default {
  name: 'SideMenu',
  components: { SubMenu },
  data() {
    return {
      activeName: '',
      isCollapse: false,
      activeIndex: '', //选中菜单项
      defaultOpeneds: [], //默认打开
      tabList: [], //打开的菜单集合
      isRouterActive: true,
      closable: true,
      menuJson,
    }
  },
  computed: {
    //获取二级菜单
    menus() {
      return this.$store.getters['common/user/getCurrentMenu'] && this.$store.getters['common/user/getCurrentMenu'][
        'children'
      ]
    },
  },
  watch: {
    $route: {
      handler(route) {
        if (route) {
          this.activeIndex = route.fullPath
          if (this.tabList.findIndex(item => item.path === route.fullPath) === -1) {
            if (route.meta.title) {
              this.tabList.push({
                name: route.meta.title,
                path: route.fullPath,
              })
            }
          }
          this.activeName = route.fullPath
        }
      },
      deep: true,
      immediate: true,
    },
    //监听tab标签页长度
    tabList: {
      handler(newVal) {
        if (newVal.length === 1) {
          this.closable = false
        } else {
          this.closable = true
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.activeIndex = this.$route.fullPath
  },
  methods: {
    //选中菜单
    selectMenu(index, path) {
      console.log(index, path)
    },
    //tab点击
    handleClick(tab) {
      this.$router.push(tab.name)
    },
    //tab关闭
    removeTab(tab) {
      const index = this.tabList.findIndex(v => v.path === tab)
      if (index !== -1) {
        this.tabList.splice(index, 1)
      }
      if (tab === this.$route.fullPath) {
        this.$router.push(this.tabList[this.tabList.length - 1].path)
      }
    },
    //工具栏
    handleCommand(item) {
      if (item === 'refresh') {
        this.isRouterActive = false
        this.$nextTick(() => {
          this.isRouterActive = true
        })
      } else if (item === 'all') {
        this.tabList = []
        this.tabList.push({
          name: this.$route.meta.title,
          path: this.$route.fullPath,
        })
        this.activeName = this.$route.fullPath
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  height: calc(100% - 60px);
  /deep/.el-menu-item.is-active {
    background-color: #ecf5ff;
  }
}
/deep/.el-tabs__header {
  margin: 0;
}
/deep/.el-tabs__nav-scroll {
  padding: 0 10px;
}
/deep/.el-tabs__nav-next,
/deep/.el-tabs__nav-prev {
  line-height: 40px;
  width: 20px;
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: center;
  background: #f8f9fa;
}
/deep/.el-dropdown {
  font-size: 20px;
}
.breadcrumb {
  width: 100%;
  display: flex;
  /deep/.el-tabs--top {
    width: calc(100% - 40px);
    background: #fff;
  }

  .breadcrumb-tool {
    width: 40px;
    height: 100%;
    background: #e9eaeb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}
/deep/.iconfont {
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 24px;
  vertical-align: middle;
  display: inline-block;
}
.isCollapse {
  height: 60px;
  background: rgb(64, 158, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .iconfont {
    font-size: 30px;
    color: #fff;
  }
}
</style>