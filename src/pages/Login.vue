<template>
    <div class="login">
        <van-icon name="cross" size='24px' @click="link"/>
        <van-tabs @click="onClick" color=" #4d3126">
        <van-tab title="手机号码注册">
            <van-cell-group>
                <van-field
                style="position: relative;
                left: -30px;"
                    v-model="username"
                    clearable
                    label="TW +886"
                    placeholder="请输入手机号"
                    @click-right-icon="$toast('question')"
                />
                <van-field
                v-model="password"
                type="password"
                right-icon="eye"
                placeholder="请输入密码(6-20英数字)"
            />
            </van-cell-group>
            <van-button type="primary" size="large">继续</van-button>
            <div style="position: absolute;
        top: 300px;    font-size: 13px;color: #666;
        left: -65px;">第一次购物请使用手机号注册</div>
        </van-tab>
        
        <van-tab title="登录">
            <van-cell-group>
            <van-field
                v-model="username"
                clearable
                placeholder="请输入Email /手机号"
                @click-right-icon="$toast('question')"
            />
            <van-field
                v-model="password"
                type="password"
                right-icon="eye"
                placeholder="请输入密码(6-20英数字)"
            />
            </van-cell-group>
            <van-button type="primary" size="large" style="top:265px">登录</van-button>
            <div style="position: absolute;
        top: 317px;    font-size: 13px;color: #666;
        right:-60px;">忘记密码</div>
        </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    methods: {
        onClick() {
            // this.$toast(title);
        },
        link(){
            this.$router.go(-1)
        }
    },
    data(){
        return {
            username:'',
            password:''
        }
    }
}
</script>
<style scoped lang="scss" >
.login{
    width: auto;
    height: 38px;
    padding: 3px 12px;
    border-bottom: 1px solid #eeeeee; 
    position: relative;
    .van-icon{
        float: left;
        height:38px;
        line-height: 50px;
        margin-top: -1px;
    }
    .van-tabs{
        width: 60%;
        height: 44px;
        position: absolute;
        bottom: 0;
        left: 20%;
        .van-tab{
           width: 100px !important;
           height: 20px;
           padding: 12px; 
           border: none;
        }
    }
    .van-hairline--top-bottom::after{
        border-top: none;
    }
    .van-cell-group{
        width: 345px;
        margin-top: 50px;
        // position: absolute ;
        left: -60px ;
        .van-field{
            height:47px;
            margin-top: 24px;
        }
    }
    .van-cell-group::after{
        border-top:none;
    }
    .van-button{
        width: 353px;
        height: 40px;
        background: #cccccc;
        position: absolute;
        border: none;
        top: 240px;
        left: -65px;
    }
}

</style>

