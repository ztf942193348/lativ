<template>
<div>
    <Zsearch :route="5"></Zsearch>
    <Zimage :url="`https://s4.lativ.com.tw/m/i/CategoryIndex/5/40072_1180X557_190219_TW_2.jpg`"></Zimage>
    <Zcategory :index="4"></Zcategory>
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
