<template>
  <div id="app">
    <header-nav></header-nav>
    <i-row :class="{contantor: true, 'app-state-close': this.appStateClose}">
      <i-col :class="{sidebar: true, 'state-close': this.appStateClose}">
        <sidebar @changeAppState="changeAppState" :sidebarStateClose="appStateClose"></sidebar>
      </i-col>
      <i-col class="views">
        <transition name="fade" mode="out-in" appear>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </i-col>
    </i-row>
  </div>
</template>

<script>
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Row, Col } from 'iview/src/components/grid';

export default {
  name: 'App',
  components: {
    'header-nav': Header,
    'sidebar': Sidebar,
    iRow: Row,
    iCol: Col
  },
  methods: {
    changeAppState() {
      this.appStateClose = !this.appStateClose
    }
  },
  data () {
    return {
      appStateClose: false
    }
  }
}
</script>

<style lang="less">
@import '../style/index.less';
@import '../style/variable/index.less';
@import './app.less';
</style>
