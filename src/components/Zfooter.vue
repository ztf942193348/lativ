<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="main">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="fenlei">分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="jingxuan">精选</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="gouwuche">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="geren">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
    data() {
    return {
      active: 0
    }
  }
};
</script>
