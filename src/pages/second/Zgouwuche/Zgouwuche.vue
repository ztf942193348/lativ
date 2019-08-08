<template>
  <div class="wrap">
    <div id="top">
      <Znav :title="`购物车`"></Znav>
      <div class="xia" v-if="isEmpty">
        <div class="content">
          <van-icon name="shopping-cart-o" size="100" />
          <br />
          <span>您的购物车中没有商品</span>
          <br />
          <van-button hairline type="default" round to="/home/main">去购物</van-button>
        </div>
      </div>
      <div class="bottom" v-else>
        <van-cell-group style="min-height:500px;margin-top:40px;margin-bottom:100px;background:#eee">
          <van-cell>
            <div class="goods" v-for="item in information" :key="item.id">
              <div class="left fl">
                <van-image width="100" height="100" :src="item.url" />
              </div>
              <div class="center fl">
                <h4>{{item.name}}</h4>
                <p>复古蓝 - 160/84A(M)</p>
                <div class="amount">
                  <van-stepper @change="onChange(item.num,item.id)" v-model="item.num" min="1" max="50"  integer/>
                </div>
              </div>
              <div class="right fr">
                <ul>
                  <li class="price">￥{{item.price}}</li>
                  <!-- <li class="o-price">￥49</li> -->
                  <li class="x">
                    <van-icon name="cross" @click="Delete(item.id)"/>
                  </li>
                </ul>
              </div>
            </div>
          </van-cell>
          <van-cell>
            <div class="jiesuan">
              <div class="zuo fl">
                <ul>
                  <li class="gong">
                    共
                    <span>{{length}}</span> 件商品
                  </li>
                  <li class="manjian">满49元免邮</li>
                </ul>
              </div>
              <div class="you fr">
                <ul>
                  <li>
                    <div class="fl">金额</div>
                    <div class="fr">
                      <i>￥</i>
                      <span>{{total}}</span>
                    </div>
                  </li>
                  <li>
                    <div class="fl">运费</div>
                    <div class="fr">
                      <i>￥</i>
                      <span>0</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </van-cell>
          <van-cell :to="{name:'main'}" title="继续购物" is-link style="margin-top:10px" />
        </van-cell-group>
        <van-submit-bar :price="this.total*100" button-text="结算" @submit="onSubmit" />
      </div>
    </div>
  </div>
</template>
<script>
import Znav from '../../../components/Znav'
export default {
  async created(){
      let username = localStorage.getItem('username')
      let msg = await this.getData('get',`//10.3.132.11:12345/detail?username=${username}`)
      // console.log(msg.data)
      this.information=msg.data;
      // console.log(this.information)
  },
  data() {
    return {
      // isEmpty: false,
      // value:1,
      information:[]
    };
  },
  computed:{
    isEmpty(){
      return this.information.length==0?true:false
    },
    length(){
      return this.information.length
    },
    total(){
      let price=0
      this.information.forEach((item)=>{
        price+=Number(item.price)*Number(item.num)
      })
      return price
    }
  },
  methods: {
    onSubmit(){
    },
    async Delete(id){
      let username = localStorage.getItem('username')
      await this.getData('get',`//10.3.132.11:12345/gouwuche?username=${username}&id=${id}`)
      this.$router.go(0)
    },
    async onChange(val,id){
      // console.log(val,id)
      let username = localStorage.getItem('username')
        let obj = {
          username,
          id,
          num:val
        }
        await this.getData('post','//10.3.132.11:12345/gouwuche',obj)
    }
  },
  // watch:{
  //   information(val){

  //   }
  // },
  components:{
    Znav
  }
};
</script>
<style scoped lang="scss">
.fl {
  float: left;
}
.fr {
  float: right;
}
.wrap {
  background: #eee;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .xia {
    background: #eee;
    height: 560px;
    .content {
      padding-top: 150px;
      span {
        line-height: 50px;
      }
    }
  }
  .bottom {
    overflow: auto;
    /deep/ .van-submit-bar {
      bottom: 50px;
      border-top: 1px solid #ccc;
    //   border-bottom: 1px solid #ccc;
      .van-submit-bar__text {
        text-align: left;
        padding-left: 5px;
      }
      .van-button--danger.van-submit-bar__button {
        background: #4d3126;
        border-color: #4d3126;
      }
    }
    .goods {
      overflow: hidden;
      padding: 0 0px 20px;
    //   border-bottom: 1px solid #eee;
      text-align: center;
      .left {
        padding-top: 20px;
        margin-right: 10px;
      }
      .center {
        position: relative;
        margin-left: 10px;
        h4 {
          margin: 0;
          padding-top: 10px;
        }
        p {
          text-align: left;
          margin: 0;
          line-height: 30px;
          font-size: 13px;
        }
        .amount {
          position: absolute;
          bottom: -60px;
          left: 0;
          .aleft,
          .acenter,
          .aright {
            width: 30px;
            height: 30px;
            font-size: 20px;
            border-right: 1px solid #ccc;
            line-height: 30px;
            &.aright {
              border-right: 0px;
            }
          }
        }
      }
      .right {
        ul {
          position: relative;
          padding-top: 10px;
          .price {
            line-height: 20px;
          }
          .o-price {
            line-height: 30px;
            font-size: 14px;
            text-decoration: line-through;
            color: #eee;
          }
          .x {
            position: absolute;
            bottom: -55px;
            right: 0px;
          }
        }
      }
    }
    .jiesuan {
      background: white;
      overflow: hidden;
      padding: 10px 10px 0;
      line-height: 30px;
      .zuo {
        margin-left: 50px;
        .gong {
          color: #ccc;
        }
        .manjian {
          color: red;
          font-size: 14px;
        }
      }
      .you {
        ul {
          width: 115px;
          overflow: hidden;
          li {
            overflow: hidden;
          }
        }
        i {
          font-style: normal;
        }
      }
    }
  }
}
</style>
