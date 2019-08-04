<template>
  <div>
    <router-view></router-view>
    <Zfooter></Zfooter>
  </div>
</template>
<script>
/* eslint-disable */
import Zfooter from "../components/Zfooter";
import Zhome from "./second/Zhome";
import Zwomen from "./second/Zwomen";
import Zman from "./second/Zman";
import Zkids from "./second/Zkids";
import Zbaby from "./second/Zbaby";
import Zsports from "./second/Zsports";
export default {
  components: {
    Zfooter,
    Zhome,
    Zwomen,
    Zman,
    Zbaby,
    Zkids,
    Zsports
  }
};
</script>
