<template>
  <div>
    <Znav :title="`设置`"></Znav>
    <van-cell-group>
      <van-cell title="消息推送">
        <van-switch v-model="checked" size="24px" active-color="#4d3126"
        inactive-color="#999" />
      </van-cell>
      <van-cell title="分享APP" is-link to="index" />
      <van-cell title="lativ服务条款" is-link to="index" />
      <van-cell title="lativ隐私声明" is-link to="index" />
      <van-cell title="APP版本 1.40" value="检查更新" />
      <van-cell title="清除缓存" value="0.0M" />
      <van-button type="default" @click="logout">退出登录</van-button>
    </van-cell-group>
  </div>
</template>
<script>
import Znav from "../components/Znav";
export default {
  data() {
    return {
      checked: true
    }
  },
  methods:{
    logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("isLogin")
      alert('退出登录成功')
      this.$router.push({name:'main'})
    }
  },
  components: {
    Znav
  }
};
</script>
<style scoped lang="scss">
.van-cell-group {
  width: 100%;
  margin-top: 50px;
  position: fixed;
  .va-cell {
    width: 100%;
    padding: 13px 16px;
  }
  .van-cell__title { 
    text-align: left;
  }
  .van-button {
    display: block;
    width: 100%;
    height: 50px;
    margin-top: 10px;
  }
}
</style>
