<template>
    <div>
        <div id="hd_title" class="title_bottom">
        <span class="title ellipsis">精選</span>
        </div>
        <Zfooter></Zfooter>
    </div>
</template>
<script>
import Zfooter from '../../../components/Zfooter'
export default {
    components:{
        Zfooter,
    }
}
</script>
<style scoped lang="scss">
#hd_title{
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 6px 12px;
    background-color: #fff;
    z-index: 99;
    font-size: 0;
    font: inherit;
    vertical-align: baseline;
    border-bottom: 1px solid #eee;
    .title {
        position: absolute;
        width: 74%;
        top: 0;
        left: 13%;
        text-align: center;
        font-size: 14px;
        color: #555;
        margin: 0;
        line-height: 50px;
        font-weight: 400;
    }
}
</style>