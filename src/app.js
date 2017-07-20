// import 'babel-polyfill'
import Vue from 'vue'
import App from './pages/App.vue'
import router from './router'
import VueResource from 'vue-resource'
import {
  Menu, MenuItem, MenuItemGroup, Icon, Row, Col, Submenu
} from 'element-ui'
import utils from './utils/utils'
import 'element-ui/lib/theme-default/index.css'

import './style/index.less'

utils.useElement(
  Vue, VueResource,
  Menu, MenuItem, MenuItemGroup, Icon, Row, Col, Submenu
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
