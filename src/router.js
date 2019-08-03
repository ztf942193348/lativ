import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './pages/Home.vue';
import Nhome from './pages/second/Nhome';
//精选
import Ngood from './pages/Ngood';
export default new Router({
  routes: [
    //重定向路由
    { path: '/', redirect: { name: 'main' }},
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
          path:'main',
          name:'main',
          component: Home.components.Zhome
        },
        {
          path:'nhome',
          name:'nhome',
          component: Nhome,
        }
      ]
    },
    //精选 
    {
      name:'ngood',
      path :'/ngood',
      component :Ngood
    },
  ]
})
