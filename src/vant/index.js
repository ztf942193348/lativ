import Vue from 'vue'
//搜索
import { Search } from 'vant';
//底部的标签栏
import { Tabbar, TabbarItem } from 'vant';
//单元格
import { Cell, CellGroup } from 'vant';
//图片
import { Image } from 'vant';
//宫格
import { Grid, GridItem } from 'vant';
//list
import { List } from 'vant';
//分隔线
import { Divider } from 'vant';
//icon 图标
import { Icon } from 'vant';
//首页轮播图 图片懒加载
import { Swipe, SwipeItem,Lazyload} from 'vant';
//layout 布局
import { Row, Col } from 'vant';
export default () => {
    Vue.use(Search);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Cell).use(CellGroup);
    Vue.use(Image);
    Vue.use(Grid).use(GridItem);
    Vue.use(List);
    Vue.use(Divider);
    Vue.use(Icon);
    Vue.use(Swipe).use(SwipeItem).use(Lazyload);
    Vue.use(Row).use(Col);
}