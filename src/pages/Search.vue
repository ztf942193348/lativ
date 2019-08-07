<template>
  <div class="wrap">
    <form action="/">
      <van-nav-bar left-arrow>
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="onCancel"
          slot="title"
        />
      </van-nav-bar>
    </form>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item,idx) in search" :key="idx" :title="item.name" />
    </van-list>
  </div>
</template>
<script>
export default {
  async created() {
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
    // :to="{name:'detail',params:{id:item.sn,idx:index}}"
    // console.log(ca)
    // this.namelist = ca.map((item)=>{
    //     return item.name
    // })
    this.namelist = ca;
    // for(let i=0;i<ca.length;i++){
    //     namelist=[...namelist,...ca[i].name]
    // }
    // console.log(this.namelist);
  },
  data() {
    return {
      value: "",
      list: [],
      loading: false,
      finished: false,
      namelist: []
    };
  },
  computed: {
    search() {
      if (this.value) {
        let arr = this.namelist.filter((item, idx) => {
          return item.name.indexOf(this.value) != -1;
        });
        console.log(arr)
        return arr
        // return namelist.filter((item)=>{
        //   return item.indexOf(this.value) != -1;
        // })
      }
    }
  },
  methods: {
    onSearch() {},
    onCancel() {},
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.namelist.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style scoped lang="scss">
/deep/ .van-nav-bar__title {
  max-width: 90%;
  margin-right: 5px;
}
/deep/ .van-hairline--bottom::after {
  top: 20%;
}
</style>
