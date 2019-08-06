import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
//分类
import Zfenlei from './pages/second/Zfenlei/Zfenlei'
//全部商品
import Allgoods from './pages/Allgoods.vue'
//秋季新品
import Newgoods from './pages/Newgoods.vue'
//详细分类
import Ncategory from './pages/Ncategory.vue'
const router = new Router({
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
        // 这里开始是下面footer的路由
        {
          path: 'fenlei/:aa',
          name: 'fenlei',
          component: Zfenlei,
        },
        {
          path: 'gouwuche',
          name: 'gouwuche',
          component: Home.components.Zgouwuche,
          //进入购物车的路由守卫，若有登录，则允许进入。若没有登录，则推去sign路由
          beforeEnter: function(to,from,next){
            let isLogin = 0
            if(isLogin){
              next()
            }else{
              router.push({
                name:'login'
              })
            }
          }
        },
        {
          path: 'geren',
          name: 'geren',
          component: Home.components.Zgeren,
        }
      ]
    },
    {
      path:'login',
      name:'login',
      component: Login
    },
    {
      path:'allgoods',
      name:'allgoods',
      component:Allgoods
    },
    { path: '/allgoods', redirect: { name: 'allgoods' } },
    {
      path:'newgoods',
      name:'newgoods',
      component:Newgoods
    },
    { path: '/newgoods', redirect: { name: 'newgoods' } },
    {
      path:'category',
      name:'category',
      component:Ncategory
    },
    { path: '/category', redirect: { name: 'category' } },
  ]
})

export default router
