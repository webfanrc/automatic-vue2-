<template>
  <div id="app">
    <header-nav></header-nav>
    <Row :class="{contantor: true, 'app-state-close': appStateClose}">
      <Col :class="{sidebar: true, 'state-close': appStateClose}">
        <sidebar @changeAppState="changeAppState" :appStateClose="appStateClose"></sidebar>
      </Col>
      <Col class="views">
        <transition name="fade" mode="out-in" appear>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </Col>
    </Row>
  </div>
</template>

<script>
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default {
  name: 'App',
  components: {
    'header-nav': Header,
    'sidebar': Sidebar
  },
  methods: {
    changeAppState() {
      this.appStateClose = !this.appStateClose
      console.log('this.appStateClose', this.appStateClose);
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
