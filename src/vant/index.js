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
//Tab 标签页
import { Tab, Tabs } from 'vant';
//NavBar 导航栏
import { NavBar } from 'vant';
//Field 输入框
import { Field } from 'vant';
//button 按钮
import { Button } from 'vant';
//panel
import { Panel } from 'vant';
//Sidebar 侧边导航
import { Sidebar, SidebarItem } from 'vant';
//优惠券
import { CouponCell, CouponList } from 'vant';
//SubmitBar 提交订单栏
import { SubmitBar } from 'vant';
//开关
import { Switch } from 'vant';
//商品卡片
import { Card } from 'vant';
//详情页底部的商品导航
import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
  } from 'vant';
//上拉菜单
import { ActionSheet } from 'vant';
//进步器- +
import { Stepper } from 'vant';
//弹出层
import { Popup } from 'vant';

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
    Vue.use(Tab).use(Tabs);
    Vue.use(NavBar);
    Vue.use(Field);
    Vue.use(Button);
    Vue.use(Panel);
    Vue.use(Sidebar).use(SidebarItem);
    Vue.use(CouponCell).use(CouponList);
    Vue.use(SubmitBar);
    Vue.use(Switch);
    Vue.use(Card);
    Vue
    .use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton);
    Vue.use(ActionSheet);
    Vue.use(Stepper);
    Vue.use(Popup);
}