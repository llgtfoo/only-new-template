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
        <template v-for="item in menus">
          <template v-if="item && item.children && item.children.length > 0">
            <sub-menu :menuInfo="item" :key="item.cnameKey" />
          </template>
          <template v-else>
            <el-menu-item :index="item.normalUrl" :key="item.normalUrl">
              <i class="icon iconfont" :class="item.icon"></i>
              <span style="marginleft: 5px">
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
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="all"> 关闭全部 </el-dropdown-item>
                <el-dropdown-item command="refresh">
                  刷新当前页
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
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
    <el-sub-menu :index="menuInfo.normalUrl" v-bind="$props">
      <template #title>
        <i class="icon iconfont" :class="menuInfo.icon"></i>
        <span>{{menuInfo.cname }}</span>
      </template>
     <template v-for="v in menuInfo.children">
        <template v-if="v && v.children && v.children.length > 0">
          <sub-menu :menu-info="v" :key="v.normalUrl" />
        </template>
        <template v-else>
         <el-menu-item :index="v.normalUrl">
            <i class="icon iconfont" :class="v.icon"></i>
            <span>{{v.cname}}</span>
          </el-menu-item>
        </template>
    </template>
    </el-sub-menu>`,
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
}
import {
  defineComponent, reactive, ref, toRefs,
  nextTick, computed, onMounted, watch, watchEffect
} from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  name: 'SideMenu',
  components: { SubMenu },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      activeName: '',
      isCollapse: false,
      activeIndex: '', //选中菜单项
      defaultOpeneds: [], //默认打开
      tabList: [], //打开的菜单集合
      isRouterActive: true,
      closable: true,
    })
    onMounted(() => {
      state.activeIndex = route.fullPath
    })
    const menus = computed(() => {
      return store.getters['common/user/getCurrentMenu'] &&
        store.getters['common/user/getCurrentMenu']['children']
    })
    watchEffect(() => {
      state.activeIndex = route.fullPath
      console.log(state.activeIndex, route.fullPath, 'route.fullPath')
      if (state.tabList.findIndex(item => item.path === route.fullPath) === -1) {
        if (route.meta.title) {
          state.tabList.push({
            name: route.meta.title,
            path: route.fullPath,
          })
        }
      }
      state.activeName = route.fullPath
    })
    watch(() => state.tabList, (newVal) => {
      console.log(newVal, 'newVal')
      if (newVal.length === 1) {
        state.closable = false
      } else {
        state.closable = true
      }
    })
    //选中菜单
    function selectMenu(index, path) {
      console.log(index, path)
    }
    //tab点击
    function handleClick(tab) {
      router.push(tab.props.name)
    }
    //tab关闭
    function removeTab(tab) {
      const index = state.tabList.findIndex(v => v.path === tab)
      if (index !== -1) {
        state.tabList.splice(index, 1)
      }
      if (tab === route.fullPath) {
        router.push(state.tabList[state.tabList.length - 1].path)
      }
    }
    //工具栏
    function handleCommand(item) {
      if (item === 'refresh') {
        state.isRouterActive = false
        nextTick(function () {
          state.isRouterActive = true
        })
      } else if (item === 'all') {
        state.tabList = []
        state.tabList.push({
          name: route.meta.title,
          path: route.fullPath,
        })
        state.activeName = route.fullPath
      }
    }
    return { ...toRefs(state), menus, handleCommand, removeTab, handleClick, selectMenu }
  },
})
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