<template>
  <el-col :class="{sidebar: true, 'state-close': appStateClose}">
    <switcher @changeSidebarState="changeSidebarState" :switcherClose="appStateClose"></switcher>
    <el-menu theme="dark" default-active="1" router>
      <el-menu-item index="1" :route="{path: '/'}"><i class="el-icon-document"></i>首页</el-menu-item>
      <el-menu-item index="2" :route="{path: '/order'}"><i class="el-icon-caret-bottom"></i>委托下单</el-menu-item>
      <el-menu-item index="3" :route="{path: '/configuration'}"><i class="el-icon-setting"></i>配置</el-menu-item>
      <el-menu-item index="4" :route="{path: '/user'}"><i class="el-icon-menu"></i>用户</el-menu-item>
    </el-menu>
  </el-col>
</template>
<script>
import Switcher from './Switcher.vue';
export default {
  name: "Sidebar",
  props: ["changeAppState", "appStateClose"],
  components: {
    switcher: Switcher
  },
  methods: {
    changeSidebarState() {
      this.$emit('changeAppState')
    }
  }
}
</script>
<style lang="less" scoped>
@import '../style/variable/index.less';
@import './sidebar.less';
</style>
