<template>
    <div>
        <van-nav-bar title="全部商品" left-arrow>
        <van-icon name="user-o" slot="right" />
        </van-nav-bar>
        <van-tabs v-model="active" swipeable>
            <van-tab v-for="(item,index) in allgoods" :title="item.categoryName" :key="index">
                <van-grid :border="false" :column-num="2">
                <van-grid-item
                    v-for="value in item.products"
                    :key="value.id"
                >
                <van-image :src="value.image"/>
                <p v-text="value.name"></p>
                <p><span v-text="`$${value.price}`"></span></p>
                </van-grid-item>
                </van-grid>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {
      //
      active: 0,
      activeKey: 0,
      allgoods: null, 
    };
  },
  methods: {
    imgindex(index) {
      this.cateindex = index;
      // console.log(this.cateindex);
    }
  },
  async created() {
    let goodslist = await this.getData(
      "get",
      "https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/allgoods"
    );
    // console.log(goodslist.data);
    this.allgoods = goodslist.data;
  }
};
</script>
<style scoped lang="scss">
.van-tabs{
    color: #555;
}
p{
    font-size: 12px;
    margin: 10px 0px 0px 0px;
    span{
        font-size: 16px;
    }
}
</style>