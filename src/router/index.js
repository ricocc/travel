import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
// @ 指的是src目录
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }],
    scrollBehavior (to, from, savadPosition) {
      return { x: 0, y: 0 }
    }
})
