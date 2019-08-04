import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'

//之所以这么写是因为要拿到实例化后的对象（router）方便实现路由守卫里的编程式导航
const router = new Router({
  routes: [
    //重定向
    { path: '/', redirect: { name: 'main' } },
    //一层路由 home
    {
      path: '/home',
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
          path: 'fenlei',
          name: 'fenlei',
          component: Home.components.Zfenlei,
        },
        {
          path: 'jingxuan',
          name: 'jingxuan',
          component: Home.components.Ngood,
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
          //进入个人的路由守卫，若有登录，则允许进入。若没有登录，则推去sign路由
          beforeEnter: (to,from,next)=>{
            let isLogin = 1
            if(isLogin){
              next()
            }else{
              router.push({
                name:'login'
              })
            }
          }
        }
      ]
    },
    //一层路由 sign
    {path: '/login',
    name: 'login',
    component: Login}
  ]
})
export default router
