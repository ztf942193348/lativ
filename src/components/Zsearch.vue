<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="ul">
      <ul>
        <li v-for="(tab,idx) in tabs" @click="change(idx)" :key="idx" :class="{active:activeIdx===idx}">
          <router-link to v-text="tab" :class="{active:activeIdx===idx}"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      activeIdx:0,
      tabs:['首页','现实特惠','女装','男装','童装','婴幼儿','运动'],
        
    }
  },
  methods: {
    onSearch() {},
    onCancel() {},
    change(idx){
        this.activeIdx=idx
    }
  }
};
</script>
<style scoped lang="scss">
.ul {
  overflow-x: auto;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 1000px;
    li {
      padding:0 15px 0;
      float: left;
      line-height: 32px;
      &.active{
          border-bottom: 2px solid#4d3126;
      }
      a{
          color:#777;
          &.active{
              color: #4d3126
          }
      }
    }
  }
}
</style>