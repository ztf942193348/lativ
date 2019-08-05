<template>
  <div>
    <div class="header">
      <van-icon name="arrow-left" />
      <span class="msg">消息中心</span>
    </div>
    <div class="active">
      <van-coupon-cell
        title="優惠活動                           
      🎁 父親節．為愛獻禮 $190元起"
        @click="showList = true"
      />
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.header {
  width: 375px;
  height: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1501;
  background: #fff;
  .van-icon-arrow-left {
    float: left;
    line-height: 50px;
    padding-left: 20px;
    font-size: 24px;
  }
  .msg {
    position: absolute;
    width: 74%;
    top: 0;
    left: 13%;
    text-align: center;
    font-size: 1rem;
    color: #555;
    margin: 0;
    line-height: 3.125rem;
    font-weight: 400;
  }
}
.active {
  width: 100%;
  height: 100%;
  height: calc(100vh - 3.125rem);
  padding-top: 60px;
  background-color: #f3f3f3;
  .van-cell__title {
    height: 40px;
    padding-left: 50px;
    background: url("https://s1.lativ.com.tw/m/images/assets/icons/icon_message_sale.svg")
      no-repeat left;
    background-size: 40px 40px;
    word-wrap: break-word;
    font-size: 12px;
  }
  .van-cell__value {
    color: #fff;
  }
  .van-cell__right-icon {
    line-height: 40px;
    font-size: 18px;
  }
}
.footer {
  width: 100%;
  height: 546px;
  background: #f3f3f3;
}
</style>


