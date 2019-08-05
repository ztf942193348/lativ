<template>
  <van-tabbar route>
    <van-tabbar-item icon="home-o" to="/home/main" active-color="#1989fa">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/home/fenlei" active-color="#1989fa">分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/home/jingxuan" active-color="#1989fa">精选</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/home/gouwuche" active-color="#1989fa">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/home/geren" active-color="#1989fa">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      }
    }
};
</script>
