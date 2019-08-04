<template>
  <div class="wrap">
    <div class="toubu">
      <div class="top">
        <ul>
          <li>
            <van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </li>
          <li>
            <span>Richard</span>
            <br />
            <span>已经绑定微信</span>
          </li>
        </ul>
      </div>
      <div class="bottom">亲，欢迎光临 lativ！</div>
    </div>
    <van-panel title="我的订单" status="查看全部订单 >">
      <div>内容</div>
    </van-panel>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.toubu {
  box-sizing: border-box;
  background: #4d3126;
  .top {
    padding: 50px 0 0 20px;
    ul {
      list-style: none;
      overflow: hidden;
      li {
        float: left;
        padding-right: 20px;
        span {
          color: white;
          line-height: 20px;
          display: block;
          text-align: left;
        }
        &:nth-child(2) {
          padding-top: 10px;
        }
      }
    }
  }
  .bottom {
    height: 30px;
    line-height: 30px;
    text-align: left;
    padding-left: 20px;
    background: #4d3126;
    color: white;
  }
}
/deep/ .van-cell.van-panel__header {
  padding-left: 0;
  .van-cell__title{
      text-align: left;
      padding-left: 25px;
  }
  .van-cell {
    font-size: 18px;
    .van-panel__header-value {
      font-size: 16px;
      color: black;
    }
  }
}
</style>
