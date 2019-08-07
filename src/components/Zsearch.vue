<template>
  <div id="zhanwei">
    <div class="wrap">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @click="onSearch"
        >
          <div slot="action" @click="to">消息</div>
        </van-search>
      </form>
      <div class="ul">
        <ul>
          <li
            v-for="(tab,idx) in tabs"
            @click="change(idx)"
            :key="idx"
            :class="{active:activeIdx===idx}"
          >
            <router-link :to="tab.route" v-text="tab.name" :class="{active:activeIdx===idx}"></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["route"],
  data() {
    return {
      value: "",
      activeIdx: this.route,
      tabs: [
        {
          name: "首页",
          route: "main"
        },
        {
          name: "女装",
          route: "women"
        },
        {
          name: "男装",
          route: "man"
        },
        {
          name: "童装",
          route: "kids"
        },
        {
          name: "婴幼儿",
          route: "baby"
        },
        {
          name: "运动",
          route: "sports"
        },
        {
          name: "限时特惠",
          route: "sales"
        },
      ]
    }
  },
  methods: {
    onSearch() {
      this.$router.push({name:'search'})
    },
    onCancel() {},
    to(){
      this.$router.push('/message')
    },
    change(idx) {
      this.activeIdx = idx;
    }
  }
};
</script>
<style scoped lang="scss">
#zhanwei {
  height: 88px;
  .wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    .ul {
      overflow-x: auto;
      background: white;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 1000px;
        li {
          padding: 0 15px 0;
          float: left;
          line-height: 32px;
          &.active {
            border-bottom: 2px solid#4d3126;
          }
          a {
            color: #777;
            &.active {
              color: #4d3126;
            }
          }
        }
      }
    }
  }
}
</style>