<template>
  <div>
    <router-view></router-view>
    <Zfooter></Zfooter>
  </div>
</template>
<script>
/* eslint-disable */
// 这里是首页
import Zfooter from "../components/Zfooter";
import Nhome from "./second/Nhome/Nhome";
import Zwomen from "./second/Nhome/Zwomen";
import Zman from "./second/Nhome/Zman";
import Zkids from "./second/Nhome/Zkids";
import Zbaby from "./second/Nhome/Zbaby";
import Zsports from "./second/Nhome/Zsports";
import Lsales from './second/Nhome/Lsales'
// 这里是精选
import Ngood from './second/Ngood/Ngood'
// 这里是分类
import Zfenlei from './second/Zfenlei/Zfenlei'
// 这里是购物车
import Zgouwuche from './second/Zgouwuche/Zgouwuche'
// 这里是个人
import Zgeren from './second/Zgeren/Zgeren'

export default {
  components: {
    Zfooter,
    Nhome,
    Zwomen,
    Zman,
    Zbaby,
    Zkids,
    Zsports,
    Ngood,
    Zgouwuche,
    Zfenlei,
    Zgeren,
    Lsales
  }
};
</script>
