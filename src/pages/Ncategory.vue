<template>
    <div>
        <van-nav-bar :title="categoods.subCategory.name" left-arrow>
        <van-icon name="user-o" slot="right" />
        </van-nav-bar>
        <van-tabs v-model="active" swipeable>
            <van-tab v-for="(item,index) in categoods.subCategory.details" :title="item.name" :key="index">
              <van-grid :border="false" :column-num="2">
                <van-grid-item
                  v-for="value in categoods.products"
                      :key="value"     
                >
                <van-image :src="value.image"/>
                <ul>
                  <li v-for="(size,ind) in value.details[0].sizes" :key="ind" v-text="size.key">
                  </li>
                </ul>
                <p v-text="value.name" style="overflow: hidden;    height: 18px;"></p>
                <p><span v-text="`$${value.price}`"></span><del  style="margin-left:10px;font-size:14px;color: #ccc;" v-text="`$${value.originPrice}`"></del></p>
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
      categoods: null,
      // cateindex:null
    };
  },
  async created() {
    let goodslist = await this.getData(
      "get",
      "https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/subCategory"
    );
    console.log(goodslist.data);
    this.categoods = goodslist.data;
    // this.cateindex = goodslist.data.subCategory;
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