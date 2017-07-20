import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/pages/Home.js'
// import About from '@/pages/About.js'
// import Shop from '@/pages/Shop.js'

const Ybp = resolve => require(['@/pages/Ybp'], resolve)
const Kcgk = resolve => require(['@/pages/Kcgk'], resolve)
const Allkj = resolve => require(['@/pages/Allkj'], resolve)
const Inlinekj = resolve => require(['@/pages/Inlinekj'], resolve)
const Outlinekj = resolve => require(['@/pages/Outlinekj'], resolve)
const Jjmanage = resolve => require(['@/pages/Jjmanage'], resolve)
const Kcmanage = resolve => require(['@/pages/Kcmanage'], resolve)
const Kgmanage = resolve => require(['@/pages/Kgmanage'], resolve)
const Yjfk = resolve => require(['@/pages/Yjfk'], resolve)
const NotFoundComponent = resolve => require(['@/pages/NotFoundComponent'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Ybp',
      component: Ybp
    }, {
      path: '/kcgk',
      name: 'Kcgk',
      component: Kcgk
    }, {
      path: '/allkj',
      name: 'Allkj',
      component: Allkj
    }, {
      path: '/inlinekj',
      name: 'Inlinekj',
      component: Inlinekj
    }, {
      path: '/outlinekj',
      name: 'Outlinekj',
      component: Outlinekj
    }, {
      path: '/jjmanage',
      name: 'Jjmanage',
      component: Jjmanage
    }, {
      path: '/kcmanage',
      name: 'Kcmanage',
      component: Kcmanage
    }, {
      path: '/kgmanage',
      name: 'Kgmanage',
      component: Kgmanage
    }, {
      path: '/yjfk',
      name: 'Yjfk',
      component: Yjfk
    }, {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
