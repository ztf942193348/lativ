import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './pages/Home.vue'
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
        },{
          path:'women',
          name:'women',
          component: Home.components.Zwomen
        },{
          path:'man',
          name:'man',
          component: Home.components.Zman
        },{
          path:'kids',
          name:'kids',
          component: Home.components.Zkids
        },{
          path:'baby',
          name:'baby',
          component: Home.components.Zbaby
        },{
          path:'sports',
          name:'sports',
          component: Home.components.Zsports
        }
      ]
    }
  ]
})
