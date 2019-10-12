<template>
  <div class="main">
    <van-nav-bar
      title="一个vw-layout项目"
      left-text=""
      right-text=""
      fixed	
    />
    <!-- <img src="./assets/logo.png">
    <div class="hello-box">
      <div class="hello-box-item" v-for="(i,index) in tabList" :key="index">
        <img class="box-item-img" :src="i.img" alt="">
        <p style="font-size: 14px;">{{i.name}}</p>
      </div>
    </div> -->
    <router-view></router-view>
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
.hello-box{
  /* width: calc(100vw - 100px); */
  /* height: 13vh; */
  display: flex;
  padding: 10px;
}
.hello-box-item{
  height: 100%;
  width: calc(100vw - 200px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box-item-img{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  opacity: .7;
  margin-bottom: 14px;
  box-shadow: 4px 4px 20px rgba(250, 67, 106, 0.3);
}
</style>