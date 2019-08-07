<template>
  <div>
    <Znav :title="`优惠券`"></Znav>
    <van-tabs v-model="active" line-width="33.3%" line-height="2px" color="#4d3126">
      <van-tab title="未使用">
        <div class="content">
          <van-icon name="gold-coin-o
" />
          <p>暂无该类优惠券</p>
        </div>
      </van-tab>
      <van-tab title="已使用">
        <div class="content">
          <van-icon name="gold-coin-o
" />
          <p>暂无该类优惠券</p>
        </div>
      </van-tab>
      <van-tab title="已过期">
        <div class="content">
          <van-icon name="gold-coin-o
" />
          <p>暂无该类优惠券</p>
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
      active: 0
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

