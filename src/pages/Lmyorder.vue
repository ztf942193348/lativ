<template>
  <div>
    <Znav :title="`我的订单`"></Znav>
    <van-tabs v-model="active" line-width="16.6%" line-height="2px" color="#4d3126">
      <van-tab v-for="(item, index) in caption" :key="index" :title="item">
        <div class="content">
          <van-icon name="description
" />
          <p>还没有相关的订单</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Znav from "../components/Znav";
export default {
  data() {
    return {
      active: 0,
      caption: ["待付款", "待发货", "待收货", "待评价", "退货/退款", "全部"]
    };
  },
  components: {
    Znav
  }
};
</script>
<style scoped lang="scss">
.van-tabs {
  width: 100%;
  margin-top: 50px;
  .content {
    margin-top: 100px;
    .van-icon {
      font-size: 50px;
    }
    p {
      font-size: 12px;
    }
  }
}
</style>