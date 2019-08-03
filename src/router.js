import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './pages/Home.vue';
import Nhome from './pages/second/Nhome';
//精选
import Ngood from './pages/Ngood';
export default new Router({
  routes: [
    //重定向
    { path: '/', redirect: { name: 'main' } },

    //一层路由
    {
      path: '/',
      name: 'home',
      component: Home,
      //嵌套路由(二层)
      children: [
        {
          path: 'main',
          name: 'main',
          component: Home.components.Zhome
        },
        {
          path: 'nhome',
          name: 'nhome',
          component: Nhome,
        }, {
          path: 'women',
          name: 'women',
          component: Home.components.Zwomen
        }, {
          path: 'man',
          name: 'man',
          component: Home.components.Zman
        }, {
          path: 'kids',
          name: 'kids',
          component: Home.components.Zkids
        }, {
          path: 'baby',
          name: 'baby',
          component: Home.components.Zbaby
        }, {
          path: 'sports',
          name: 'sports',
          component: Home.components.Zsports
        }, {
          //这里开始是下面的
          path: 'fenlei',
          name: 'fenlei',
          component: fenlei,
        }, {
          path: 'jingxuan',
          name: 'jingxuan',
          component: jingxuan,
        }, {
          path: 'gouwuche',
          name: 'gouwuche',
          component: gouwuche,
        }, {
          path: 'geren',
          name: 'geren',
          component: geren,
        }
      ]
    },
    //精选 
    {
      name: 'ngood',
      path: '/ngood',
      component: Ngood
    }
  ]
})
