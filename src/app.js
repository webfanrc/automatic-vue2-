// import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './pages/App.vue'
import router from './router'
import LoadingBar from 'iview/src/components/loading-bar'
import store from './store/store'
import utils from './utils/utils'

import './style/index.less'
import 'iview/dist/styles/iview.css'

Vue.prototype.$http = axios

utils.useElement(
  Vue, Vuex,
)

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})

router.afterEach((to, from, next) => {
  LoadingBar.finish()
  window.scrollTo(0, 0)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
