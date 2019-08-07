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
          <van-cell value="确定"  style="background:#4d3126" @click="sure" />
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
      "http://10.3.132.11:12345/categoryindex"
    );
    // console.log(msg.data[0].data.categoryIndex);
    msg = msg.data[0].data.categoryIndex;
    let ca = [];
    for (let i = 0; i < msg.length; i++) {
      ca = [...ca, ...msg[i].products];
    }
    console.log(ca)
    this.informantion = ca.filter((item)=>{
        return item.sn==this.$route.params.id
    })[0]
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
      informantion: {},
      //节流状态
      loaded: false,
      //存入商品信息的对象
      obj:{}
    };
  },
  methods: {
    change(){
      this.show = !this.show;
    },
    async sure() {
      let username = localStorage.getItem('username')
      if(username){
      this.obj = {
          username,
          id:this.$route.params.id,
          num:this.amount,
          url:this.informantion.detailImage,
          price:this.informantion.price,
          name:this.informantion.name
        }
      let e = await this.getData('post','http://10.3.132.11:12345/detail',this.obj)      
      alert('加入购物车成功')
      this.show = !this.show
      }else{
        alert('请先登录！')
        this.$router.push({name:'login'})
      }
    },
    showPopup() {
      this.tan = !this.tan;
    }
  },
  components: {
    Znav
  }
  // watch: {
  //   //监听数据变化 val是新变化的数据，oldval是原来的数据
  //   //监听什么数据，函数名就是什么
  //   amount(val) {
  //   // 监听amount数据变化，如果有变化就触发以下函数
  //   // 节流，避免数据库还未来得及更新数据就插入数据
  //   // 数量加减操作后过一秒钟再改变loaded状态
  //   this.loaded=false;
  //     setTimeout(()=>{
  //       let username = localStorage.getItem('username')
  //       this.obj = {
  //         username,
  //         id:this.$route.params.id,
  //         num:val,
  //         url:this.informantion.detailImage,
  //         price:this.informantion.price,
  //         name:this.informantion.name
  //       }
  //       //改变loaded状态
  //       this.loaded=true;
  //     },1000)
  //   },
  //   async loaded(val){
  //     //根据改变的loaded状态来向后台发起请求
  //     if(val===true){
  //     let e = await this.getData('post','http://10.3.132.11:12345/detail',this.obj)
  //     }
  //   }
  // }
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
