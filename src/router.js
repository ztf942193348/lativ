import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from './pages/Home.vue'
//分类
import Zfenlei from './pages/second/Zfenlei/Zfenlei'
//全部商品
import Allgoods from './pages/Allgoods.vue'
//秋季新品
import Newgoods from './pages/Newgoods.vue'
//详细分类
import Ncategory from './pages/Ncategory.vue'
import Login from './pages/Zlogin.vue'
import Zshezhi from './pages/Zshezhi.vue'
import Lrizhi from './pages/Lrizhi.vue'
import Lcollect from './pages/Lcollect.vue'
import Lclient from './pages/Lclient.vue'
import Lcoupon from './pages/Lcoupon.vue'
import Lmyorder from './pages/Lmyorder.vue'



import Lmessage from './pages/Lmessage'
import Lactivity from './pages/Lactivity'
import Zdetail from './pages/Zdetail'
const router = new Router({
  routes: [
    //重定向
    { path: '/', redirect: { name: 'main' } },
    //一层路由
    //Home
    {
      path: '/home',
      name: 'home',
      component: Home,
      //嵌套路由(二层)
      children: [
        //隶属于main的 伪三层路由
        {
          path: 'sales',
          name: 'sales',
          component: Home.components.Lsales
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
        },
        // 这里开始是下面footer的路由
        //首页
        {
          path: 'main',
          name: 'main',
          component: Home.components.Nhome
        },
        //分类
        {
          path: 'fenlei/:aa',
          name: 'fenlei',
          component: Home.components.Zfenlei,
        },
        //精选
        {
          path: 'jingxuan',
          name: 'jingxuan',
          component: Home.components.Ngood,
        },
        //购物车
        {
          path: 'gouwuche',
          name: 'gouwuche',
          component: Home.components.Zgouwuche,
          //进入购物车的路由守卫，若有登录，则允许进入。若没有登录，则推去login路由
          beforeEnter: function(to,from,next){
            let isLogin = localStorage.getItem('isLogin');
            if(isLogin){
              next()
            }else{
              router.push({
                name:'login'
              })
            }
          }
        },
        //个人
        {
          path: 'geren',
          name: 'geren',
          component: Home.components.Zgeren,
          //进入个人的路由守卫，若有登录，则允许进入。若没有登录，则推去login路由
          beforeEnter: function(to,from,next){
            let isLogin = localStorage.getItem('isLogin');
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
    //注册登录页
    {
      path:'/login',
      name:'login',
      component: Login
    },

    {
      path:'/allgoods',
      name:'allgoods',
      component:Allgoods
    },
    {
      path:'/newgoods',
      name:'newgoods',
      component:Newgoods
    },
    {
      path:'/category',
      name:'category',
      component:Ncategory
    },
    //设置
    {
      path:'/shezhi',
      name:'shezhi',
      component: Zshezhi
    },
    //分界线
    {
      path: '/rizhi',
      name: 'rizhi',
      component: Lrizhi
    },
    {
      path: '/collect',
      name: 'collect',
      component: Lcollect
    },
    {
      path: '/client',
      name: 'client',
      component: Lclient
    },
<<<<<<< HEAD
    //消息
    {
      path:'/message',
      name:'message',
      component: Lmessage
    },
    //消息->活动
    {
      path:'/activity',
      name:'activity',
      component: Lactivity
    },
    //详情页
    {
      path:'/detail/:id/:idx',
      name:'detail',
      component: Zdetail
=======
    {
      path: '/coupon',
      name: 'coupon',
      component: Lcoupon
    },
    {
      path: '/myorder',
      name: 'myorder',
      component: Lmyorder
>>>>>>> Luo
    }
  ]
})

export default router
