<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="hello-box">
      <div class="hello-box-item" v-for="(i,index) in tabList" :key="index">
        <!-- <img class="box-item-img" src="./assets/image/c2.png" alt=""> -->
        <img class="box-item-img" :src="i.img" alt="">
        <p style="font-size: 14px;">{{i.name}}</p>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      tabList: [
        {name: "测试1", img: "../static/image/c1.png"},
        {name: "测试2", img: "../static/image/c2.png"},
        {name: "测试3", img: "../static/image/c3.png"},
        {name: "测试4", img: "../static/image/c4.png"}
      ]
    }
  }
}
</script>

<style>
body,p{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
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
