<template>
  <div>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item,index) in categtitle" :title="item.name" :key="index">
        <div class="cateclass"><router-link to="/allgoods">全部商品</router-link></div>
        <div class="cateclass"><router-link to="/allgoods">秋季新品</router-link></div>
        <van-sidebar v-model="activeKey" style="width: 100px;">
          <van-sidebar-item
            v-for="(list,ind) in item.subCategories"
            :to="`${list.englishName}`"
            @click="imgindex(list)"
            :title="list.name"
            :key="ind"
          />
          <div
            class="categorycontent"
            style="position: fixed;
                    top:100px;
                    left: 100px;
                    width: 247px;
                    height: 535px;
                    padding: 14px 12px 0px 16px;
                    z-index=99;
                    "
          >
            <ul class="sub">
              <img
                class="banner"
                style="width:100%;border-radius: 5px;"
                :src="cateindex.banner"
                alt
              />
              <!-- <router-link :to="{name:'detail',params:{id:}}"></router-link> -->
              <li
                v-for="(item,index) in cateindex.details"
                :key="index"
                style="width: 33.33%;text-align: center;font-size: .688rem; float: left;
                "
              >
                <img
                  style="width: 60%;margin-left: 20%;margin-top: 1.25rem; margin-right: 20%;"
                  :src="item.image"
                  alt
                />
                <font v-text="item.name"></font>
              </li>
            </ul>
          </div>
        </van-sidebar>
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
      categtitle: null, 
      cateindex: ""
    };
  },
  methods: {
    imgindex(index) {
      this.cateindex = index;
      // console.log(this.cateindex);
    }
  },
  async created() {
    let categlist = await this.getData(
      "get",
      "https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/categ"
    );
    // console.log(categlist.data.mainCategories);
    this.categtitle = categlist.data.mainCategories;
  }
};
</script>
<style lang="scss">
.cateclass{
width:78px;
height:28px;
font-size: 14px;
padding-left:22px;
margin:14px -5px;
  a{
    color:#323233;
  }
}
</style>



