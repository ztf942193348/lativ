<template>
  <div class="wrap">
    <Znav :title="`商品详情`"></Znav>
    <van-tabs v-model="active" style="margin-top:40px;">
      <van-tab title="商品">
        <div class="xinxi">
          <van-image fit="contain" :src="this.informantion.detailImage" />
        </div>
        <ul class="xiangqing">
          <li class="fl name" v-text="this.informantion.name"></li>
          <li class="fr price">￥{{informantion.price}}</li>
        </ul>
      </van-tab>
      <van-tab title="评价">
        <div class="pingjia" style="margin-top:50px">
          <van-icon name="chat-o" size="100" />
          <p>还没有评价</p>
        </div>
      </van-tab>
      <van-tab title="详情">
        <van-cell-group>
          <van-cell is-link class="chakan">
            <ul>
              <li class="fl">尺寸表</li>
              <li class="fr">查看尺寸表详情</li>
            </ul>
            <div>
              <van-image
                fit="contain"
                src="https://s.lativ.com.tw/m/i/SizeReport/40153/w800_h469_0614101923.jpg"
              />
            </div>
          </van-cell>
          <van-cell :border="false" class="img">
            <van-image fit="contain" src="https://s4.lativ.com.tw/m/i/40860/40860_D_72.jpg" />
          </van-cell>
          <van-cell :border="false" class="img">
            <van-image fit="contain" src="https://s1.lativ.com.tw/m/i/40860/40860_D_73.jpg" />
          </van-cell>
          <van-cell :border="false" class="img">
            <van-image
              fit="contain"
              src="https://s3.lativ.com.tw/m/i/CommonPicture/1995/Moomin_02_TW_0.jpg"
            />
          </van-cell>
          <van-cell :border="false" class="img">
            <van-image
              fit="contain"
              src="https://s4.lativ.com.tw/m/i/CommonPicture/1559/19SS_760WASH_TW.jpg"
            />
          </van-cell>
        </van-cell-group>
      </van-tab>
    </van-tabs>
    <van-goods-action>
      <van-goods-action-icon size="20" to="/home/main" icon="shop-o" />
      <van-goods-action-icon icon="star-o" />
      <van-goods-action-icon :info="amount" icon="cart-o" to="/home/gouwuche" />
      <van-goods-action-button style="background:#4d3126" @click="change">
        <div style="color:white">加入购物车</div>
      </van-goods-action-button>
      <van-goods-action-button
        @click="showPopup"
        type="danger"
        style="background:#5c463d"
        text="搭配购"
      />
    </van-goods-action>
    <!-- 加入购物车的弹出层内容 -->
    <van-action-sheet title=" " v-model="show">
      <div class="detail">
        <ul style="overflow:hidden">
          <li class="fl">
            <van-image
              width="10rem"
              height="10rem"
              fit="contain"
              :src="this.informantion.detailImage"
            />
          </li>
          <li class="fl" style="padding-top:100px">
            <span>￥{{this.informantion.price}}</span>
            <br />
            <span v-text="this.informantion.name"></span>
          </li>
        </ul>
        <div>
          <ul class="goumai">
            <li class="fl">购买数量：</li>
            <li class="fr">
              <van-stepper v-model="amount" min="0" max="50" />
            </li>
          </ul>
          <van-cell value="确定" :to="{name:'gouwuche'}" style="background:#4d3126" @click="change" />
        </div>
      </div>
    </van-action-sheet>
    <!-- 搭配购的弹出层内容 -->
    <van-popup v-model="tan">此款商品目前无组合穿搭</van-popup>
  </div>
</template>
<script>
import Znav from "../components/Znav";
export default {
  async created() {
    //根据传过来的商品id遍历数组取得相应的详细信息
    let msg = await this.getData(
      "get",
      "http://10.3.132.173:12345/categoryindex"
    );
    msg = msg.data[0].data.categoryIndex[this.$route.params.idx].products;
    this.informantion = msg.filter(
      item => item.sn === this.$route.params.id
    )[0];
  },
  data() {
    return {
      active: 0,
      info: [
        {
          icon: "shop-o",
          to: "/home/main"
        },
        {
          icon: "star-o",
          to: ""
        },
        {
          icon: "cart-o",
          to: "/home/gouwuche"
        }
      ],
      show: false,
      amount: 0,
      tan: false,
      informantion: {}
    };
  },
  methods: {
    change() {
      this.show = !this.show;
    },
    showPopup() {
      this.tan = !this.tan;
    }
  },
  components: {
    Znav
  },
  watch: {
    //监听数据变化 val是新变化的数据，oldval是原来的数据
    //监听什么数据，函数名就是什么
    async amount(val) {
      // console.log(val,oldval)
      //先把form里的goods数据拿出来,并格式化
      let goods = JSON.parse(localStorage.getItem("form")).goods;
      // console.log(msg)
      
      //以下是form数据的样子
      // goods: [{id: "43024011", num: 5}, {id: "43555011", num: 1}]
      // username: "13113019764"
      
      //遍历数组，查看是否有该商品的id，如果有就在原有商品改变数量
      //如果没有就创建一个新的对象
      //对goods进行filter处理，如果返回值为1，则在原有商品对象改变数量
      //返回值为0，就创建一个新的对象并且插入
      let i;
      let obj;
      let arr = goods.filter((item,idx) => {
        i=idx
        return item.id === this.$route.params.id
        });
      // console.log(arr.length,typeof arr.length)
      // console.log(msg)
      if (arr.length === 1) {
        goods[i].num=val
        obj = {
          username:localStorage.getItem('username'),
          goods
        }
        // console.log(i)
      } else {
        goods.push({
          id: this.$route.params.id,
          num: val
        });
        obj = {
          username:localStorage.getItem('username'),
          goods
        }
        // console.log(msg)
      }
      console.log(obj.goods)
     let e = await this.getData('post','http://10.3.132.173:12345/detail',obj)
        localStorage.setItem("form",JSON.stringify(obj))
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .van-goods-action-icon__icon {
  font-size: 24px;
  margin: 0 0 0 8px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.wrap {
  height: 100%;
  overflow: auto;
  .xinxi {
    height: 100%;
  }
  .xiangqing {
    overflow: hidden;
    padding: 10px 20px;
    margin-bottom: 50px;
    .price {
      color: red;
    }
  }
  .chakan {
    ul {
      overflow: hidden;
    }
  }
  .detail {
    text-align: left;
    ul {
      padding-top: 20px;
    }
    .goumai {
      overflow: hidden;
      padding-left: 20px;
      height: 50px;
      line-height: 50px;
      .fr {
        padding-right: 40px;
      }
    }
    .van-cell__value.van-cell__value--alone {
      color: white;
      text-align: center;
    }
  }
}
/deep/ .img {
  padding-top: 0;
  padding-bottom: 0;
}
/deep/ .van-popup.van-popup--center {
}
</style>
