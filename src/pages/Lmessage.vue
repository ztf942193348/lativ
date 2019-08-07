<template>
  <div>
    <Znav :title="`消息中心`"></Znav>
    <div class="active">
      <van-coupon-cell
        title="優惠活動                           
      🎁 父親節．為愛獻禮 $190元起"
        @click="to"
      />
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import Znav from '../components/Znav'
export default {
  data() {
    return {};
  },
  methods:{
    to(){
      this.$router.push('/activity')
    }
  },
  components:{
    Znav
  }
};
</script>
<style scoped lang="scss">
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


