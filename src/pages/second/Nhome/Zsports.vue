<template>
  <div>
    <Zsearch :route="6"></Zsearch>
    <Zimage :url="`https://s4.lativ.com.tw/m/i/CategoryIndex/5/40072_1180X557_190219_TW_2.jpg`"></Zimage>
    <div>
      <!-- 宫格 -->
      <van-grid :column-num="5" :border="false">
        <van-grid-item v-for="(value,idx) in grid" :key="idx">
          <van-image width="45" height="45" :src="value.image" />
          <span style="font-size:12px" v-text="value.title"></span>
        </van-grid-item>
        <van-grid-item>
          <van-image
            width="45"
            height="45"
            src="https://s4.lativ.com.tw/m/i/LevelThreePicture/Tshirt-POLO/short-sleeves/3490102_360.jpg"
          />
          <span style="font-size:12px">文字</span>
        </van-grid-item>
        <van-grid-item>
          <van-image
            width="45"
            height="45"
            src="https://s4.lativ.com.tw/m/i/LevelThreePicture/Tshirt-POLO/short-sleeves/3490102_360.jpg"
          />
          <span style="font-size:12px">文字</span>
        </van-grid-item>
      </van-grid>
      <!-- 分隔线 -->
      <van-divider />
      <div class="tishi">秋季新品</div>
      <!-- 详情图片列表 -->
      <div class="wrap">
        <van-list
          style="margin-bottom:50px"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- 图片 -->
          <router-link to class="detail" v-for="(item,idx) in products" :key="idx">
            <div class="balanceImg">
              <van-image width="170" height="250" :src="item.detailImage" />
              <div class="btm">
                {{item.name}}
                <div class="priceArea">
                  <span class="price">{{item.price}}</span>
                  <span class="o_price" v-if="item.price===!item.originPrice">{{item.originPrice}}</span>
                </div>
              </div>
            </div>
          </router-link>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
import Zsearch from '../../../components/Zsearch'
import Zimage from '../../../components/Zimage'
export default {
    components:{
        Zsearch,
        Zimage
    },
     async created() {
    let msg = this.$store.categoryIndex;
    //从categoryIndex开始就是可以选择分类了，比如现在的0代表women
    //   console.log(msg.data[0].data.categoryIndex[0].itemCategories)
    //这是宫格里面的资料
    this.grid = msg.data[0].data.categoryIndex[4].itemCategories.splice(0,8);
    // console.log(msg.data[0].data.categoryIndex[this.index].products)
    this.products = msg.data[0].data.categoryIndex[4].products;
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      grid: [],
      products: []
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.products.length) {
          this.finished = true;
        }
      }, 500);
    }
  }
}

</script>
<style lang="scss" scoped>
.van-cell {
  padding: 0;
}
.tishi {
  font-size: 12px;
  margin-bottom: 12px;
}
.wrap {
  padding: 0 5px;
  .detail {
    display: inline-block;
    &:nth-child(2n) {
      margin-left: 10px;
    }
    .balanceImg {
    }
    .btm {
      text-align: left;
      color: #555;
      margin-top: 3px;
      font-size: 12px;
      line-height: 12px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      .priceArea {
        margin-top: 5px;
        .price {
          display: inline-block;
          line-height: 0.875rem;
          margin-right: 0.25rem;
          color: #666;
          font-size: 0.875rem;
          &:before {
            content: "$ ";
            font-size: 10px;
            line-height: 1;
          }
        }
        .o_price {
          text-decoration: line-through;
          color: #ccc;
          &:before {
            content: "$ ";
            font-size: 10px;
            line-height: 1;
          }
        }
      }
    }
  }
}
</style>