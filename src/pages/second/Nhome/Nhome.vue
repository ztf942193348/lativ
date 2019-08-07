<template>
<div>
    <Zsearch :route="0"></Zsearch>
    <Ncontent />
</div>
</template>
<script>
import Zsearch from '../../../components/Zsearch'
import Ncontent from '../../../components/Ncontent'
export default {
    components:{
        Zsearch,
        Ncontent
    },
    async created() {
    this.$store.categoryIndex = await this.getData(
      "get",
      "http://10.3.132.11:12345/categoryindex"
    );
  }
}
</script>

