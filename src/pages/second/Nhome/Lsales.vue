<template>
  <div>
    <Zsearch :route="1"></Zsearch>
    <!-- 第一层 -->
    <van-tabs type="card" background="#f3f3f3" color="#4d3126" border="false">
      <van-tab v-for="(item, index) in sales" :key="index" :title="item"></van-tab>
    </van-tabs>
    <!-- 第二层 -->
    <van-tabs type="line" color="#4d3126">
      <van-tab v-for="(item, index) in shoplist" :key="index" :title="item"></van-tab>
    </van-tabs>
    <!-- 主体 -->
    <van-row>
      <van-col span="6"
      ><img src="" alt="" /></van-col>
      <van-col span="6"
      ><img src="" alt="" /></van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      sales: [
        "爸氣獻禮",
        "感恩父親節",
        "七夕獻禮",
        "清爽推薦",
        "零碼瘋搶",
        "超值精選",
        "涼夏特惠"
      ],
      shoplist: ["WOMEN", "MEN", "KIDS", "BABY", "SPORTS"]
    };
  }
  // async created() {
  //     let list = await this.$axios(
  //         "http://10.3.132.173:12345/list"
  //     );
  //     // console.log(this.list);
  // }
};
</script>
<style lang="scss" scoped>
 /deep/ .van-tabs {
  padding-top: 0;
  margin: 0 -16px;
  height: 48px;
  .van-tabs__wrap {
    height: 48px;
    .van-tabs__nav {
      height: 48px;
      border: none;
      .van-tab {
        line-height: 48px;
      }
    }
  }
}
</style>

