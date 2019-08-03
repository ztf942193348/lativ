import Vue from 'vue'
//搜索
import { Search } from 'vant';
//底部的标签栏
import { Tabbar, TabbarItem } from 'vant';


export default () => {
    Vue.use(Search);
    Vue.use(Tabbar).use(TabbarItem);

}