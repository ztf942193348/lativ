<template>
  <div>
    <Znav :title="`品牌日志`"></Znav>
    <div class="rizhi">
      <img src="https://s.lativ.com/i/Page/images/blog/pclist1705_04.jpg" alt />
      <div class="title">
        <span>品牌日志</span>
      </div>
    </div>
    <van-list :finished="finished">
      <van-card
      v-for="(item, index) in list"
      :key="index" 
      :title="item.title" 
      :thumb="item.img" />
    </van-list>
  </div>
</template>
<script>
import Znav from "../components/Znav";
export default {
  data() {
    return {
      finished: false,
      list: [{
        img: "https://s.lativ.com/i/Page/images/blog/pclist_06.jpg",
        title: "关于诚衣"  
      },{
        img: "https://s.lativ.com/i/Page/images/blog/pclist_031.jpg",
        title: "全品项经第三方公证单位检测"
      },{
        img: "https://s.lativ.com/i/Page/images/blog/pclist_02.jpg",
        title: "2017年起全产品使用YKK拉链"
      },{
        img: "https://s.lativ.com/i/Page/images/blog/pclist_04.jpg",
        title: "BABY服的洗标为什么在外侧 ?"
      },{
        img: "https://s.lativ.com/i/Page/images/blog/dry_190223/dry_280X200.jpg",
        title: "为什么叫做​​吸汗棉？"
      },{
        img: "https://s.lativ.com/i/Page/images/blog/pclist_06.jpg",
        title: "包装全部被退回了！？"
      },{
        img: "https://s.lativ.com.tw/i/Page/images/blog/pclist_01.jpg",
        title: "请再给我们一次机会！"
      },{
        img: "https://s.lativ.com/i/Page/images/blog/1709_01/1709_01_PClistb.jpg",
        title: "童装里的小贴心设计，您发现了吗？"
      }]
    };
  },
  components: {
    Znav
  }
};
</script>
<style scoped lang="scss">
.rizhi {
  width: 98%;
  margin-top: 50px;
  img {
    width: 98%;
    margin-left: 2%;
  }
  .title {
    width: 96%;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 276px;
    background: black;
    margin-left: 2%;
    opacity: 0.5;
    text-align: left;
    span {
      color: #fff;
    }
  }
}
.van-card {
  background: #fff;
  .van-card__thumb {
    height: 60px;
    .van-image {
      height: 68%;
      .van-image__img {
        height: 68%;
      }
    }
  }
  .van-card__content{
    min-height: 60px;
    .van-card__title{
      max-height: 36px;
      line-height: 60px;
      text-align: left;
    }
  }
}
</style>
