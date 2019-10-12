<template>
  <div class="">
    <img src="../assets/logo.png">
    <div class="hello-box">
      <div class="hello-box-item" v-for="(i,index) in tabList" :key="index">
        <img class="box-item-img" :src="i.img" alt="">
        <p style="font-size: 14px;">{{i.name}}</p>
      </div>
    </div>
    <van-button round size="small" color="linear-gradient(to right, #4bb0ff, #1cc09f)">测试按钮</van-button>
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
      ]
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
  margin-bottom: 1.5vh;
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