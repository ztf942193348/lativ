<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item icon="search">分类</van-tabbar-item>
    <van-tabbar-item icon="like-o
">精选</van-tabbar-item>
    <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="manager-o
">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
