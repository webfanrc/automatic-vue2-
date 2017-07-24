<template>
  <div class="sidebar">
    <switcher @changeSidebarState="changeSidebarState" :switcherStateClose="sidebarStateClose"></switcher>
    <i-menu theme="dark" active-name="1" width="auto" :class="{'siderbar-state-close': this.sidebarStateClose}">
      <i-menu-item name="1">
        <router-link to="/" exact><i-icon type="home"></i-icon>首页</router-link>
      </i-menu-item>
      <i-menu-item name="2">
        <router-link to="/order" exact><i-icon type="archive"></i-icon>委托下单</router-link>
      </i-menu-item>
      <i-menu-item name="3">
        <router-link to="/configuration" exact><i-icon type="ios-settings-strong"></i-icon>配置</router-link>
      </i-menu-item>
      <i-menu-item name="4">
        <router-link to="/user" exact><i-icon type="person"></i-icon>用户</router-link>
      </i-menu-item>
    </i-menu>
  </div>
</template>
<script>
import Switcher from './Switcher.vue';
import Menu from 'iview/src/components/menu';
import Icon from 'iview/src/components/icon';

export default {
  name: "Sidebar",
  props: ["changeAppState", "sidebarStateClose"],
  components: {
    switcher: Switcher,
    iMenu: Menu,
    iMenuItem: Menu.Item,
    iIcon: Icon
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
.sidebar {
  .ivu-menu {
    .ivu-menu-item {
      padding: 0px;
      height: 50px;
      line-height: 50px;
      a {
        color: @gray-light;
        display: inline-block;
        padding-left: 21px;
        width: 100%;
        .ivu-icon {
          transition: all 0.3s ease;
          margin-right: 12px;
          font-size: 18px;
        }
      }
      .router-link-active {
        color: @base;
      }
    }
  }
  .siderbar-state-close {
    .ivu-menu-item {
      a .ivu-icon {
        margin-right: 30px;
      }
    }
  }
}
</style>
