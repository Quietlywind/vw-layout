webpackJsonp([4],{HGYu:function(t,e){},pjeT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){var e=new AMap.Map(t,{}),n=void 0;return e.plugin(["AMap.Geolocation"],function(){n=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,maximumAge:0,convert:!0,showButton:!0,buttonPosition:"LB",buttonOffset:new AMap.Pixel(10,20),showMarker:!0,showCircle:!0,panToLocation:!0,zoomToAccuracy:!0}),e.addControl(n),n.getCurrentPosition()}),n},i={data:function(){return{}},components:{},computed:{},watch:{},methods:{getLocation:function(){var t=o("map-container");AMap.event.addListener(t,"complete",function(t){})}},created:function(){},mounted:function(){this.$toast.loading({mask:!0,message:"加载中...",duration:1500})},destroyed:function(){}},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("div",{staticStyle:{width:"100 %",height:"50vh"},attrs:{id:"map-container"}})])}]};var c=n("VU/8")(i,a,!1,function(t){n("HGYu")},"data-v-56c5d57c",null);e.default=c.exports}});
//# sourceMappingURL=4.9763d49730998279c62f.js.map