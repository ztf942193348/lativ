<template>
  <div>
    <Zsearch :route="6"></Zsearch>
    <div class="L">
      <!-- 第一层 -->
      <van-tabs
        @click="Bonclick"
        v-model="active"
        type="card"
        id="wai"
        background="#f3f3f3"
        color="#4d3126"
        :border="false"
      >
        <van-tab v-for="(item, index) in msg" :key="index" :title="item.title">
          <!-- 第二层 -->
          <van-tabs type="line" color="#4d3126" :border="false" @click="onClick">
            <van-tab v-for="(value, index) in item.categories" :key="index" :title="value">
              <!-- 主体 -->
              <!-- {{index}} -->
              <div class="sales-left">
                <van-col span="11" v-for="(detail, index) in products" :key="detail.sn">
                  <router-link :to="{name:'detail',params:{id:detail.sn}}">
                    <van-image width="100" height="100" :src="detail.image" />
                  <div class="btm normal">
                    <span class="name">{{detail.name}}</span>
                    <div class="priceArea">
                      <span class="price">{{detail.price}}</span>
                      <span class="originprice">{{detail.originPrice}}</span>
                    </div>
                  </div>
                  </router-link>
                  
                </van-col>
              </div>
            </van-tab>
          </van-tabs>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import Zsearch from "../../../components/Zsearch";
export default {
  async created() {
    let msg = await this.getData("get", "//10.3.132.11:12345/list");
    // console.log(msg.data[0].data.specialOfferEvent);
    this.msg = msg.data[0].data.specialOfferEvent;
    // console.log(this.msg)
    let m = this.msg[this.active];
    // console.log(m.products)
    this.arr = m.products;
    let a = this.arr.filter(item => {
      return item.categories.includes(this.stitle);
    });
    // console.log(a);
    this.products = a;
  },
  data() {
    return {
      active: 0,
      //存放大数组(霸气献礼，感恩父亲节。。)
      msg: [],
      // cate: 0,
      //存放中数组 (WOMEN MEN KID..)
      arr: [],
      //存products数组用(具体到WOMEN)
      products: [],
      btitle: "爸氣獻禮",
      stitle: "WOMEN"
    };
  },
  methods: {
    Bonclick(name, title) {
      // console.log(this.active);
      this.btitle = title;
    },
    onClick(name, title) {
      // console.log(title);
      this.stitle = title;
      // console.log(this.msg[this.active]);
    }
  },
  watch: {
  async  btitle(val) {
    console.log(val)
    let msg = await this.getData("get", "//10.3.132.11:12345/list");
    // console.log(msg.data[0].data.specialOfferEvent);
    this.msg = msg.data[0].data.specialOfferEvent;
    // console.log(this.msg)
    this.arr = this.msg.filter((item)=>{
      return item.title==val
    })[0].products
    // console.log(this.arr)
    // let m = this.msg[val];
    // console.log(m.products)
    // this.arr = m.products;
    let a = this.arr.filter(item => {
      return item.categories.includes(this.stitle);
    });
    // // console.log(a);
    this.products = a;
    },
    stitle(val) {
      let m = this.msg[this.active];
      // console.log(m.products)
      this.arr = m.products;
      let a = this.arr.filter(item => {
        return item.categories.includes(val);
      });
      // console.log(a);
      this.products = a;
    }
  },
  components: {
    Zsearch
  }
};
</script>
<style lang="scss" scoped>
// /deep/ .van-tabs {
//   padding-top: 0;
//   margin: 0 -16px;
//   height: 48px;
//   .van-tabs__wrap {
//     height: 48px;
//     .van-tabs__nav {
//       height: 48px;
//       border: none;
//       .van-tab {
//         line-height: 48px;
//       }
//     }
//   }
// }
#wai {
  padding-top: 0;
  /deep/.van-tabs__wrap.van-tabs__wrap--scrollable {
    height: 48px;
    .van-tabs__nav.van-tabs__nav--card {
      margin: 0;
      height: 48px;
      .van-tab.van-tab--active {
        height: 48px;
      }
      .van-ellipsis {
        line-height: 48px;
        height: 48px;
      }
    }
  }
}
.L {
  overflow: hidden;
}
// .van-row {
//   img {
//     width: calc(50vw - 1.125rem);
//     margin-bottom: 1rem;
//     margin-left: 0.75rem;
//     display: inline-block;
//     text-align: center;
//     position: relative;
//   }
// }
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

