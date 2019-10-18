<template>
  <div class="vw-layout">
    <!-- <img src="../assets/logo.png"> -->
    <van-swipe :autoplay="3000" indicator-color="white" class="carousel" @change="swiperChange">
      <van-swipe-item v-for="(i,index) in carouselList" :key="index" class="carousel-item">
        <div class="carousel-item-box">
          <img :src="i" :alt="i">
        </div>
      </van-swipe-item>
    </van-swipe>
    <van-notice-bar :text="noticeText" left-icon="volume-o" style="margin: 1vh 0;"/>
    <div class="hello-box">
      <div class="hello-box-item" v-for="(i,index) in tabList" :key="index">
        <img class="box-item-img" :src="i.img" alt="">
        <p style="font-size: 14px;">{{i.name}}</p>
      </div>
    </div>
    <van-button style="width: 35vw;" round size="normal" color="linear-gradient(to right, #4bb0ff, #1cc09f)" @click="ceshi()">测试按钮</van-button>
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
        {name: "测试4", img: "../static/image/c4.png"},
        {name: "测试1", img: "../static/image/c1.png"},
        {name: "测试2", img: "../static/image/c2.png"},
        {name: "测试3", img: "../static/image/c3.png"},
        {name: "测试4", img: "../static/image/c4.png"}
      ],
      swiperCurrent: 0,
      noticeText: "足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。",
      carouselList: ["/static/image/banner1.jpg", "/static/image/banner2.jpg", "/static/image/banner3.jpg"],
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    ceshi() {
      this.$toast.loading({
        mask: true,
        message: '加载中...',
        duration: 2500
      });
    },
    swiperChange(e) {
      this.swiperCurrent = e;
    },
  },
  created() {},
  mounted() {},
  destroyed() {},
  }
</script>
<style lang="less" scoped>
.hello-box{
  // width: calc(~"100vw - 100px");
  // height: 13vh;
  padding: 10px;
  margin-bottom: 1.5vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap:wrap;
}
 .hello-box-item{
  height: 100%;
  padding: 20px;
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
 .carousel{
  width: 100vw;
  height: 350px;
  .carousel-item{
    width: 100%;
    height: 100%;
    // overflow: hidden;
    &-box{
      height: 100%;
      padding: 0 20px;
    }
  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 19px;
  }
 }
</style>