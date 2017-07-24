<template>
  <div class="sidebar">
    <switcher @changeSidebarState="changeSidebarState" :switcherStateClose="sidebarStateClose"></switcher>
    <i-menu theme="dark" active-name="1" width="auto" :class="{'siderbar-state-close': this.sidebarStateClose}">
      <i-menu-item name="1">
        <router-link to="/" exact><Icon type="home"></Icon>首页</router-link>
      </i-menu-item>
      <i-menu-item name="2">
        <router-link to="/order" exact><Icon type="archive"></Icon>委托下单</router-link>
      </i-menu-item>
      <i-menu-item name="3">
        <router-link to="/configuration" exact><Icon type="ios-settings-strong"></Icon>配置</router-link>
      </i-menu-item>
      <i-menu-item name="4">
        <router-link to="/user" exact><Icon type="person"></Icon>用户</router-link>
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
    'iMenu': Menu,
    iMenuItem: Menu.Item,
    Icon
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
