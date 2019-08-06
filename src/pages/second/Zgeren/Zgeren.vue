<template>
  <div class="wrap">
    <div class="toubu">
      <div class="top">
        <ul>
          <li>
            <van-image round width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          </li>
          <li>
            <span v-text="username"></span>
            <br />
            <span>已经绑定微信</span>
          </li>
        </ul>
      </div>
      <div class="bottom">亲，欢迎光临 lativ！</div>
    </div>
    <van-panel title="我的订单" status="查看全部订单 >">
      <div>
        <van-grid :column-num="5" :border="false">
          <van-grid-item
            v-for="(value,idx) in value"
            :border="false"
            :key="idx"
            :icon="value.icon"
            :text="value.name"
          />
        </van-grid>
      </div>
    </van-panel>
    <van-panel title="我的服务" id="xia">
      <div>
        <van-grid :border="false">
          <van-grid-item
            v-for="(value,idx) in shang"
            :key="idx"
            :icon="value.icon"
            :text="value.name"
          />
        </van-grid>
      </div>
      <div>
        <van-grid :border="false">
          <van-grid-item
            v-for="(value,idx) in xia"
            :key="idx"
            :icon="value.icon"
            :text="value.name"
            :to="value.route"
          />
        </van-grid>
      </div>
    </van-panel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [
        {
          icon: "gold-coin-o",
          name: "待付款"
        },
        {
          icon: "sign",
          name: "待发货"
        },
        {
          icon: "send-gift-o",
          name: "待收货"
        },
        {
          icon: "other-pay",
          name: "待评价"
        },
        {
          icon: "after-sale",
          name: "退货/退款"
        }
      ],
      shang: [
        {
          icon: "coupon-o",
          name: "优惠券"
        },
        {
          icon: "like-o",
          name: "收藏",
          route: "/collect"
        },
        {
          icon: "tosend",
          name: "到货提醒"
        },
        {
          icon: "location-o",
          name: "地址"
        }
      ],
      xia: [
        {
          icon: "notes-o",
          name: "品牌日志",
          route:'/rizhi'
        },
        {
          icon: "contact",
          name: "客服信息",
          route:'/client'
        },
        {
          icon: "records",
          name: "系统反馈",
          route:''
        },
        {
          icon: "ellipsis",
          name: "设置",
          route:'/shezhi'
        }
      ],
      username:localStorage.getItem('username')
    };
  }
};
</script>
<style lang="scss" scoped>
.wrap {
  background: #e8e8e8;
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
            padding-top: 20px;
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
}

/deep/ .van-cell.van-panel__header {
  padding-left: 0;
  .van-cell__title {
    text-align: left;
    padding-left: 25px;
  }
  /deep/ .van-cell {
    font-size: 18px;
    .van-panel__header-value {
      font-size: 16px;
      color: black;
    }
  }
}
#xia {
  margin-top: 20px;
}
</style>
