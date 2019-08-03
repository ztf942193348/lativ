import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './page/Home.vue'
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
        }
      ]
    }
  ]
})
