<template>
    <Zsearch :route="0"></Zsearch>
</template>
<script>
import Zsearch from '../../components/Zsearch'
export default {
    components:{
        Zsearch
    },
    async created() {
    this.$store.categoryIndex = await this.getData(
      "get",
      "http://10.3.132.173:12345/categoryindex"
    );
  }
}
</script>
