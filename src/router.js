import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './pages/Home.vue'
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
          component: Home.components.Nhome
        },{
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
        },
        //这里开始是下面footer的路由
        // {
        //   path: 'fenlei',
        //   name: 'fenlei',
        //   component: Home.components.fenlei,
        // },
        {
          path: 'jingxuan',
          name: 'jingxuan',
          component: Home.components.Ngood,
        },
        // {
        //   path: 'gouwuche',
        //   name: 'gouwuche',
        //   component: Home.components.gouwuche,
        // },
        // {
        //   path: 'geren',
        //   name: 'geren',
        //   component: Home.components.geren,
        // }
      ]
    }

  ]
})
