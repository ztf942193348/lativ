<template>
<div>
    <Zsearch :route="3"></Zsearch>
    <Zimage :url="`https://s4.lativ.com.tw/m/i/CategoryIndex/3/41266_1180X557_190214_TW_0.jpg`"></Zimage>
    <Zcategory :index="2"></Zcategory>
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
