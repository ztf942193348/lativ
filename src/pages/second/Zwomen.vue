<template>
<div>
    <Zsearch :route="2"></Zsearch>
    <Zimage :url="`https://s2.lativ.com.tw/m/i/CategoryIndex/2/40156_1180X557_190304_TW_1.jpg`"></Zimage>
    <Zcategory :index="0"></Zcategory>
</div>
</template>
<script>
import Zsearch from '../../components/Zsearch'
import Zimage from '../../components/Zimage'
import Zcategory from '../../components/Zcategory'
export default {
    components:{
        Zsearch,
        Zimage,
        Zcategory
    }
}
</script>
