import Vue from 'vue'
//搜索
import { Search } from 'vant';
//底部的标签栏
import { Tabbar, TabbarItem } from 'vant';
//标签页
import { Tab, Tabs } from 'vant';
import { Row, Col } from 'vant';


export default () => {
    Vue.use(Search);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Tab).use(Tabs);
    Vue.use(Row).use(Col);
}