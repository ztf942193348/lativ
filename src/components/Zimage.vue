<template>
  <van-cell :border="false">
    <van-image
      fit="contain"
      :src="this.url"
    />
  </van-cell>
</template>
<script>
export default {
    props:['url']
}
</script>
