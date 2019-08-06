<template>
  <div class="shang">
    <span @click="to">
      <van-icon name="arrow-left" size="20" />
    </span>
    {{title}}
  </div>
</template>
<script>
export default {
    //在引入的组件中传 :title="`购物车`" 即显示购物车
  props: ["title"],
  methods: {
    to() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped lang="scss">
.shang {
  background: white;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  line-height: 40px;
  font-size: 16px;
  height: 40px;
  // border-bottom: 1px solid #eee;
  span {
    line-height: 0;
    position: absolute;
    left: 5%;
    top: 26%;
  }
}
</style>
