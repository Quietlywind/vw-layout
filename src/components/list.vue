<template>
  <div class="">
    <div id="map-container" style="width: 100 %;height: 50vh;"></div>
  </div>
</template>

<script>
import { location } from "@/libs/getLocation"
export default {
  data() {
    return {

    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    getLocation() {
      let _this = this;
      let geolocation = location.initMap("map-container");
      AMap.event.addListener(geolocation, "complete", result => {
        // _that.lat = result.position.lat;
        // _that.lng = result.position.lng;
        // _that.province = result.addressComponent.province;
        // _that.city = result.addressComponent.city;
        // _that.district = result.addressComponent.district;
      }); 
    },
  },
  created() {},
  mounted() {
    this.$toast.loading({
      mask: true,
      message: '加载中...',
      duration: 1500
    });
    // this.getLocation(); // 调用获取地理位置
  },
  destroyed() {},
  }
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类

</style>