<template>
<div>
    <Zsearch :route="4"></Zsearch>
    <Zimage :url="`https://s3.lativ.com.tw/m/i/CategoryIndex/4/40686_1180X557_190411_TW_0.jpg`"></Zimage>
    <Zcategory :index="3"></Zcategory>
</div>
</template>
<script>
import Zcategory from '../../../components/Zcategory'
import Zsearch from '../../../components/Zsearch'
import Zimage from '../../../components/Zimage'
export default {
    components:{
        Zcategory,
        Zsearch,
        Zimage
    }
}
</script>
