<template>
<div>
    <Zsearch :route="3"></Zsearch>
    <Zimage :url="`https://s1.lativ.com.tw/m/i/CategoryIndex/1/40458_1180X557_190322_TW.jpg`"></Zimage>
    <Zcategory :index="1"></Zcategory>
</div>
</template>
<script>
import Zcategory from '../../components/Zcategory'
import Zsearch from '../../components/Zsearch'
import Zimage from '../../components/Zimage'

export default {
    created(){
        console.log( this.$store.categoryIndex)
    },
    components:{
        Zcategory,
        Zsearch,
        Zimage
    }
}
</script>
