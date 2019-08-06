<template>
  <div>
    <Znav :title="`客户信息`"></Znav>
    <van-panel title="lativ 售后客服" desc="周一至周五 9:00~18:00 (节假日、周末及中午12:00~13:00暂不提供服务)">
      <div class="msg">
        在线：请点击
        <a href="#">【我的订单】</a>，
        并选择需咨询的订单，于页面最下方可见咨询入口
        <p>客服电话：暂不提供电话服务，建议您使用在线客服</p>
      </div>
    </van-panel>
    <div class="check">
      <van-cell title="查看所有问题" is-link />
    </div>
    <div class="remen">
      <van-cell title="热门咨询" />
    </div>
    <div class="list">
      <van-cell v-for="(item, index) in tList" :key="index" :title="item" is-link />
    </div>
    <div class="gz">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1271053584,1352936932&fm=26&gp=0.jpg" alt="">
        <span>请关注 <a href="#">lativ 诚衣</a> 微信公众号，获取更多信息。</span>
    </div>
    <div class="hao">
        <van-cell title="微信服务号" />
    </div>
  </div>
</template>
<script>
import Znav from "../components/Znav";
export default {
  data() {
    return {
        tList: [
            "下单后，何时发货？",
            "取消订单后，何时退款？",
            "可以换货吗？",
            "如何申请退货？",
            "退货后何时退款？",
            "可以取消或修改订单吗？",
            "退货地址和电话是什么？",
            "我该选择什么尺码？",
            "一直没收到货怎么办？",
            "退货用哪一家快递公司？运费谁承担？",
            "如何获得退货补贴优惠券？"
        ]
    };
  },
  components: {
    Znav
  }
};
</script>
<style scoped lang="scss">
.van-cell {
  text-align: left;
}
.van-cell-group {
  width: 100%;
  margin-top: 50px;
  text-align: left;
  position: fixed;
  z-index: 99;
  .van-cell__label {
    width: 200px;
    color: black;
    word-wrap: break-word;
  }
  .van-cell__value {
    display: inline-block;
  }
  .msg {
    font-size: 12px;
    color: #999;
    padding: 0 15px;
    a {
      color: #4d3126;
      text-decoration: underline;
    }
  }
}
.check {
  width: 100%;
  padding: 10px 0;
  background: #eee;
  position: fixed;
  z-index: 99;
  top: 200px;
}
.remen {
  width: 100%;
  position: fixed;
  z-index: 99;
  top: 264px;
  color: black;
}
.list{
    width: 100%;
    position: relative;
    top:312px;
}
.gz{
    width: 100%;
    height: 44px;
    line-height: 44px;
    z-index: 99;
    position: fixed;
    bottom: 0;
    background: #fff;
    font-size: 12px;
    img{
        width: 20px;
        height: 20px;
        margin: -5px 10px;
    }
    span{
        padding-right: 22px;
    }
    a{
        color: #4d3126;
    }
}
.hao{
    width: 100%;
    z-index: 99;
    position: fixed;
    background: #eee;
    bottom: 44px;
}
</style>


