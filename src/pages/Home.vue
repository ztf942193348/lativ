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
// 这里是精选
import Ngood from './second/Ngood/Ngood'
export default {
  components: {
    Zfooter,
    Nhome,
    Zwomen,
    Zman,
    Zbaby,
    Zkids,
    Zsports,
    Ngood
  }
};
</script>
