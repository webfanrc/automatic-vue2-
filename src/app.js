// import 'babel-polyfill'
import Vue from 'vue'
import App from './pages/App.vue'
import router from './router'
import VueResource from 'vue-resource'
import iView from 'iview'
import utils from './utils/utils'

import './style/index.less'
import 'iview/dist/styles/iview.css'

utils.useElement(
  Vue, VueResource, iView
)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
