<template>
    <div>
        <van-nav-bar title="秋季新品" left-arrow>
        <van-icon name="user-o" slot="right" />
        </van-nav-bar>
        <van-tabs v-model="active" swipeable color="#4d3126">
            <van-tab v-for="(item,index) in allgoods" :title="item.categoryName" :key="index">
                <van-grid :border="false" :column-num="2">
                <van-grid-item
                    v-for="value in item.details"
                    :key="value.id"
                >
                <van-image :src="value.image"/>
                <ul>
                  <li v-for="(size,ind) in value.details[0].sizes" :key="ind" v-text="size.key">
                  </li>
                </ul>
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
      active: 0,
      allgoods: null, 
    };
  },
  async created() {
    let goodslist = await this.getData(
      "get",
      "https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/newgoods"
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
ul{
  width: 145px;
  height: 26px;
  margin: 10px auto;
  font-size: 14px;
  li{
    width: 25px;
    height: 14px;
    float: left;
    padding: 4px 0px;
    margin: 4px 2px 0px 2px;
    background-color: #f6f6f6;
    color: #575757;
  }
}
</style>