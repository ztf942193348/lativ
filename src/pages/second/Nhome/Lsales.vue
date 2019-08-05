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
    <div class="sales-left">
      <van-col>
        <van-row v-for="(img, index) in leftShopImg" :key="index">
          <img :src="img" alt />
          <div class="btm normal">
            <span class="name">棉質經典帆布休閒鞋-女</span>
            <div class="priceArea">
              <span class="price">290</span>
              <span class="originprice">390</span>
            </div>
          </div>
        </van-row>
      </van-col>
    </div>
    <div class="sales-right">
      <van-col>
        <van-row v-for="(img, index) in rightShopImg" :key="index">
          <img :src="img" alt />
          <div class="btm normal">
            <span class="name">棉質經典帆布休閒鞋-女</span>
            <div class="priceArea">
              <span class="price">290</span>
              <span class="originprice">390</span>
            </div>
          </div>
        </van-row>
      </van-col>
    </div>
  </div>
</template>
<script>
import Zsearch from "../../../components/Zsearch";
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
      shoplist: ["WOMEN", "MEN", "KIDS", "BABY", "SPORTS"],
      leftShopImg: [
        "https://s1.lativ.com.tw/m/i/40156/40156011/4015601_360.jpg",
        "https://s2.lativ.com.tw/m/i/40336/40336011/4033601_360.jpg",
        "https://s1.lativ.com.tw/m/i/40453/40453011/4045301_360.jpg",
        "https://s3.lativ.com.tw/m/i/40320/40320011/4032001_360.jpg",
        "https://s1.lativ.com.tw/m/i/43002/43002011/4300201_360.jpg",
        "https://s2.lativ.com.tw/m/i/40299/40299011/4029901_360.jpg",
        "https://s1.lativ.com.tw/m/i/40126/40126011/4012601_360.jpg",
        "https://s1.lativ.com.tw/m/i/40172/40172011/4017201_360.jpg",
        "https://s1.lativ.com.tw/m/i/40157/40157011/4015701_360.jpg",
        "https://s3.lativ.com.tw/m/i/40297/40297011/4029701_360.jpg",
        "https://s3.lativ.com.tw/m/i/41296/41296011/4129601_360.jpg"
      ],
      rightShopImg: [
        "https://s1.lativ.com.tw/m/i/40335/40335011/4033501_360.jpg",
        "https://s2.lativ.com.tw/m/i/40452/40452011/4045201_360.jpg",
        "https://s3.lativ.com.tw/m/i/40739/40739011/4073901_360.jpg",
        "https://s3.lativ.com.tw/m/i/40729/40729011/4072901_360.jpg",
        "https://s1.lativ.com.tw/m/i/40150/40150011/4015001_360.jpg",
        "https://s3.lativ.com.tw/m/i/40104/40104011/4010401_360.jpg",
        "https://s3.lativ.com.tw/m/i/40472/40472011/4047201_360.jpg",
        "https://s2.lativ.com.tw/m/i/40171/40171011/4017101_360.jpg",
        "https://s4.lativ.com.tw/m/i/40279/40279011/4027901_360.jpg",
        "https://s1.lativ.com.tw/m/i/43692/43692011/4369201_360.jpg"
      ]
    };
  },
  components: {
    Zsearch
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
.sales-left{
  float: left;
}
.sales-right{
  float:right;
}
.van-row {
  img {
    width: calc(50vw - 1.125rem);
    margin-bottom: 1rem;
    margin-left: 0.75rem;
    display: inline-block;
    text-align: center;
    position: relative;
  }
}
.btm {
  margin-top: 0.313rem;
  font-size: 0.813rem;
  color: #555;
}
.btm.normal {
  text-align: center;
  margin-bottom: 0.5rem;
  .name {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    text-align: center;
  }
  .priceArea {
    .price {
      color: #b61d22;
      font-size: 0.875rem;
      display: inline-block;
      margin-right: 0.25rem;
    }
    .originprice {
      font-size: 0.75rem;
      display: inline-block;
      text-decoration: line-through;
      color: #ccc;
    }
  }
}
</style>

