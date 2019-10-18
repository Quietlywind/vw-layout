<template>
  <div class="main">
    <van-nav-bar title="一个vw-layout项目" left-text="" right-text=""	/>
    <div class="main-content">
      <router-view></router-view>
    </div>
    <van-tabbar route>
      <van-tabbar-item v-for="(i,index) in routes" :key="index" replace :to="i.path" :icon="i.icon">
        {{i.title}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tabList: [
        {name: "测试1", img: "../static/image/c1.png"},
        {name: "测试2", img: "../static/image/c2.png"},
        {name: "测试3", img: "../static/image/c3.png"},
        {name: "测试4", img: "../static/image/c4.png"}
      ],
      routes: [
        {
          path: "/home",
          name: "home",
          title: "首页",
          icon: "home-o"
        },
        {
          path: "/list",
          name: "list",
          title: "列表",
          icon: "search"
        },
        {
          path: "/text",
          name: "text",
          title: "文本",
          icon: "friends-o"
        },
        {
          path: "/config",
          name: "config",
          title: "配置",
          icon: "setting-o"
        },
      ],
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  destroyed() {},
  }
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
// .main-content.ignore{
//   padding-top: 46px;
// }
</style>