<template>
  <div>
    <Znav :title="`我的收藏`"></Znav>
    <van-tabs v-model="active" line-width="178px" line-height="2px" color="#4d3126">
      <van-tab title="收藏商品">
        <div class="content">
          <van-icon name="like-o" />
          <p>还没有收藏</p>
        </div>
      </van-tab>
      <van-tab title="到货提醒">
        <div class="content">
          <van-icon name="logistics" />
          <p>没有到货提醒商品</p>
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


