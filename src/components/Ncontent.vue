<template>
    <div>
        <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
        </van-swipe-item>
        </van-swipe>
        <div>
          <van-row>
            <van-col span="6"><img src="https://s3.lativ.com.tw/m/i/AppDynamicBlock/190713_01_TW.gif" alt=""></van-col>
            <van-col span="6"><img src="https://s4.lativ.com.tw/m/i/AppDynamicBlock/190713_02_TW.gif" alt=""></van-col>
            <van-col span="6"><img src="https://s1.lativ.com.tw/m/i/AppDynamicBlock/190713_03_TW.gif" alt=""></van-col>
            <van-col span="6"><img src="https://s2.lativ.com.tw/m/i/AppDynamicBlock/190713_04_TW.gif" alt=""></van-col>
          </van-row>
        </div>
        <div class="n-content-left">
          <van-col>
            <van-row v-for="(limg, index) in leftimg" :key="index"><img :src="limg" alt=""></van-row>
            <van-row></van-row>
          </van-col>
        </div>
        <div class="n-content-right">
          <van-col>
            <van-row v-for="(rimg, index) in rightimg" :key="index"><img :src="rimg" alt="">
            </van-row>
          </van-col>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      images: [
           "https://s4.lativ.com.tw/i/ProductShow/40810_41155_3P699_1180X557_190801_TW.jpg",
            "https://s1.lativ.com.tw/i/ProductShow/FATHERSDAY_2SALE_1180X557_190801_TW3.jpg",
            "https://s2.lativ.com.tw/i/ProductShow/40723_2P580_1180X557_190801_TW.jpg",
            "https://s3.lativ.com.tw/i/ProductShow/44145_44146_2P198_1180X557_190801_TW.jpg",
            "https://s4.lativ.com.tw/i/ProductShow/TSHIRT_1180X557_190706_TW3.jpg",
            "https://s1.lativ.com.tw/i/ProductShow/41262_3P399_1180X557_190801_TW.jpg",
            "https://s2.lativ.com.tw/i/ProductShow/40062_sports_1180X557_190613_TW.jpg",  
      ],
      leftimg: [
        "https://s3.lativ.com.tw/m/i/Waterfall/20190201-1221/43891_560_190731_TW.jpg" ,
        "https://s1.lativ.com.tw/m/i/Waterfall/20190201-1221/40374_560_190802_TW.jpg" ,
        "https://s3.lativ.com.tw/m/i/Waterfall/20190201-1221/43706_560_190802_TW2.jpg",
        "https://s1.lativ.com.tw/m/i//Waterfall/20190201-1221/40477_560_190614_TW_0_chin.jpg" ,
        "https://s3.lativ.com.tw/m/i/Waterfall/20190201-1221/FS588_560_190729_TW.jpg" ,
        "https://s1.lativ.com.tw/m/i//Waterfall/20190201-1221/41251_560_190413_TW_1_chin.jpg" ,
        "https://s3.lativ.com.tw/m/i/Waterfall/20190201-1221/DISNEY_560_190802_TW.jpg" ,
        "https://s1.lativ.com.tw/m/i//Waterfall/20190201-1221/40705_560_190308_TW_1_chin.jpg" ,
        "https://s3.lativ.com.tw/m/i//Waterfall/20190201-1221/43888_560_190801_TW_chin.jpg" ,
        "https://s1.lativ.com.tw/m/i/Waterfall/20190201-1221/NEWPRICE_560_190611_TW.jpg" ,
        "https://s3.lativ.com.tw/m/i//Waterfall/20190201-1221/40711_560_190612_TW_0_chin.jpg" ,
        "https://s1.lativ.com.tw/m/i/Waterfall/20190201-1221/40450_560_190719_TW_0.jpg" ,
        "https://s3.lativ.com.tw/m/i/Waterfall/20190201-1221/40156_560_190731_TW.jpg" ,
        "https://s1.lativ.com.tw/m/i//Waterfall/20190201-1221/43376_560_190801_TW_chin.jpg" ,
        "https://s3.lativ.com.tw/m/i//Waterfall/20190201-1221/40508_560_190802_TW_chin.jpg" ,
        "https://s1.lativ.com.tw/m/i//Waterfall/20190201-1221/40741_560_190408_TW_3_chin_0.jpg",
        "https://s4.lativ.com.tw/m/i/Waterfall/20190201-1221/NEWS_560_190703-2_TW.jpg" ,

      ],
      rightimg :[
        "https://s4.lativ.com.tw/m/i/Waterfall/20190201-1221/40225_560_190625_TW_6.jpg",
        "https://s2.lativ.com.tw/m/i/Waterfall/20190201-1221/43539_560_190801_TW.jpg",
        "https://s4.lativ.com.tw/m/i//Waterfall/20190201-1221/43554_560_190731_TW_chin.jpg",
        "https://s2.lativ.com.tw/m/i/Waterfall/20190201-1221/1P5D_560_190627_TW4DUP.jpg",
        "https://s4.lativ.com.tw/m/i//Waterfall/20190201-1221/43001_560_190729_TW_chin.jpg",      
        "https://s2.lativ.com.tw/m/i//Waterfall/20190201-1221/43036_560_190707_TW_chin.jpg",
        "https://s4.lativ.com.tw/m/i/Waterfall/20190201-1221/40765_560_190802_TW.jpg",
        "https://s2.lativ.com.tw/m/i//Waterfall/20190201-1221/43555_560_190731_TW_chin.jpg" ,
        "https://s4.lativ.com.tw/m/i//Waterfall/20190201-1221/40056_560_190802_TW_chin.jpg" ,
        "https://s2.lativ.com.tw/m/i//Waterfall/20190201-1221/43730_560_190619_TW_chin.jpg" ,
        "https://s4.lativ.com.tw/m/i//Waterfall/20190201-1221/40330_560_190318_TW_0_chin.jpg" ,
        "https://s2.lativ.com.tw/m/i//Waterfall/20190201-1221/41254_560_190411_TW_chin.jpg" ,
        "https://s4.lativ.com.tw/m/i//Waterfall/20190201-1221/41241_560_190731_TW_chin.jpg" ,
        "https://s2.lativ.com.tw/m/i//Waterfall/20190201-1221/43519_560_190731_TW_chin.jpg" ,
        "https://s4.lativ.com.tw/m/i//Waterfall/20190201-1221/40097_560_190729_TW_chin.jpg" ,
        "https://s2.lativ.com.tw/m/i/Waterfall/20190201-1221/40785APP_560_190325_TW.jpg" ,
        "https://s3.lativ.com.tw/m/i/Waterfall/20190201-1221/40149_560_190522_TW_1.jpg",
      ]
    }
  }
}
</script>
<style scoped lang="scss">
div{
  img{
    margin-bottom: 14px;
    margin-top: -5px;
  }
}
.van-swipe{
  width: 375px;
  height: 182px;
  img{
    width: 100%;
  }
}
.van-row{
  img{
    width: 94px;
    height: 36px;
  }
}
.n-content-left{
  box-sizing: border-box;
  float: left;
  width: 50%;
  padding: 0 6px 0 12px;
  img{
    width: 169.5px;
    height: 100%;
    // margin-bottom: 14px;
    // margin-top: -5px;
  }
}
.n-content-right{
  box-sizing: border-box;
  margin: 0;
  float: right;
  width: 50%;
  padding: 0 12px 0 6px;
  img{
    width: 169.5px;
    height: 100%;
  }
}
</style>