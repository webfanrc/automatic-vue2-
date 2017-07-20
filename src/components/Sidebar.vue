<template>
  <div class="sidebar">
    <switcher @changeSidebarState="changeSidebarState" :switcherClose="appStateClose"></switcher>
    <Menu theme="dark" active-name="1" width="auto">
      <Menu-item name="1">
        <router-link to="/" exact><Icon type="checkmark"></Icon>首页</router-link>
      </Menu-item>
      <Menu-item name="2">
        <router-link to="/order" exact><Icon type="checkmark"></Icon>委托下单</router-link>
      </Menu-item>
      <Menu-item name="3">
        <router-link to="/configuration" exact><Icon type="checkmark"></Icon>配置</router-link>
      </Menu-item>
      <Menu-item name="4">
        <router-link to="/user" exact><Icon type="checkmark"></Icon>用户</router-link>
      </Menu-item>
    </Menu>
  </div>
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
      console.log('appStateClose', this.appStateClose);
    }
  }
}
</script>
<style lang="less" scoped>
@import '../style/variable/index.less';
.sidebar {
  .ivu-menu {
    .ivu-menu-item {
      padding: 0px;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
