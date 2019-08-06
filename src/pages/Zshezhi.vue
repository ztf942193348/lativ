<template>
  <div>
    <Znav :title="`设置`"></Znav>
    <van-cell-group>
      <van-cell title="单元格" is-link to="index" />
      <van-cell title="单元格" is-link to="index" />
      <van-cell title="单元格" is-link to="index" />
      <van-cell title="单元格" is-link to="index" />
    </van-cell-group>
  </div>
</template>
<script>
import Znav from "../components/Znav";
export default {
  components: {
    Znav
  }
};
</script>
