<template>
    <div>
        <div id="hd_title" class="title_bottom">
            <span class="title ellipsis">精选</span>
        </div>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
        >
        <van-cell
            v-for="(item,index) in goodList"
            :key="index"
        >
            <div class="title"><img alt="" src="https://s1.lativ.com.tw/m/images/assets/icons/lativ.png">
                <div class="category">
                    <font style="vertical-align: inherit;">
                        <font v-text="item.title" style="vertical-align: inherit;">法兰绒格纹衬衫</font>
                    </font>
                </div>
            </div>
            <a>
                <img :src="item.img">
            </a>
            <div class="share">
                <a>
                    <img alt="" src="https://s2.lativ.com.tw/m/images/assets/icons/icon_favorite_featured.png">
                    <img alt="" hidden="" src="https://s3.lativ.com.tw/m/images/assets/icons/icon_favorite2_featured.png">
                </a>
                    <img alt="" src="https://s4.lativ.com.tw/m/images/assets/icons/icon_share_featured.png">
            </div>
        </van-cell>
        </van-list>
        <Zfooter></Zfooter>
    </div>
</template>
<script>
import Zfooter from '../../../components/Zfooter'
export default {
    data() {
        return {
        list: [],
        goodList :[],
        loading: false,
        finished: false
        };
    },
    methods: {
    
    },
    components:{
        Zfooter,
    },
    async created(){
        let poilist = await this.getData('get',"//10.3.132.11:12345/focus");
        this.goodList = [...this.goodList,...poilist.data[0].data];
        // console.log(poilist.data[0].data);
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.goodList.length >= 30) {
            this.finished = true;
        }
    }
    
}
</script>
<style scoped lang="scss">
#hd_title{
    width: calc(100% - 1.5rem);
    // margin: 0;
    // width: 100%;
    height: 2.375rem;
    line-height: 3.125rem;
    padding: .375rem .75rem;
    background-color: #fff;
    position: fixed;
    top:0;
    z-index: 99;
    font-size: 0;
    border-bottom: 1px solid #eee;
    position: fixed;
    top:0;
    .title {
        position: absolute;
        width: 74%;
        top: 0;
        left: 22%;
        text-align: center;
        font-size: 1rem;
        color: #555;
        margin: 0;
        line-height: 3.125rem;
        font-weight: 400;
    }
    .ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
.van-list{
    position: relative;
    padding: 70px 0 90px;
    font-family: Arial,"Microsoft JhengHei";
    background-color: white;
    font-size: 100%;
    font: inherit;
    .van-cell{
        padding: 0;
        width: 375px;
        margin-bottom: 46px;
        .title {
            margin: 0 14px 7px;
            align-items: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #999;
            display: flex;
            img {
                width: 32px;
                height: 100%;
            }
            .category {
                margin-left: 8px;
                display: inline;
                color: #666;
                font-size: 12px;
                font: inherit;
                vertical-align: inherit;
            }
        }
        a{
            width: 100%;
            img {
                width:100%;
            }
        }
        .share {
            margin: .375rem 1rem .938rem;
            display: block;
            img {
                width: 1.625rem;
                margin: 0 1rem 0 0;
            }
        }
    }
    .van-cell::after{
        border-bottom:none;
    }
}

</style>