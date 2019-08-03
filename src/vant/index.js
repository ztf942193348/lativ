import Vue from 'vue'
//搜索
import { Search } from 'vant';
//底部的标签栏
import { Tabbar, TabbarItem } from 'vant';
//首页轮播图 图片懒加载
import { Swipe, SwipeItem,Lazyload} from 'vant';
//layout 布局
import { Row, Col } from 'vant';

export default () => {
    Vue.use(Search);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Swipe).use(SwipeItem).use(Lazyload);
    Vue.use(Row).use(Col);
}