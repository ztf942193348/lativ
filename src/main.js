import vant from './vant'
vant();
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//axios
//f是请求方式 String
//adress 请求地址 String
//obj为对象包裹的JSON字符串 post请求时才需要填写, 此时请求头为Content-Type: application/json
import axios from 'axios';
Vue.prototype.getData=(f,address,obj)=>{
  return new Promise(async(resolve)=>{
    let msg 
    if(f==="get"){
       msg = await axios.get(address);
    }else if(f==="post"){
       msg = await axios.post(address,obj);
    }
    resolve(msg)
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
