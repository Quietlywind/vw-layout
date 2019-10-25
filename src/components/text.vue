<template>
  <div class="c-day">
    <div class="h-item" v-for="i in weeks" :key="i">
      <span>{{i}}</span>
    </div>
    <div class="d-item" v-for="(item,key) in days" :key="key">
      <!-- <span :class="[item.fullDate == currentDays ? 'current-bg' : '', item.show == 0 ? 'no-default' : '']">{{item.num}}</span> -->
      <div class="d-item-box">
        <span class="text-num">{{item.num}}</span>
        <span class="text-calendar">{{item.calendar.Term ? item.calendar.Term : item.calendar.IDayCn}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import calendar from "@/libs/calendar"
export default {
  data() {
    return {
      days: [],
      weeks: ["一", "二", "三", "四", "五", "六", "日"],
      currentDays: "",
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    //获得月份
    getMonths(d, t = 0) {
      var curDate = new Date(d.replace(/-/g, '/'));
      var curMonth = curDate.getMonth();
      return curMonth + t + 1
    },
    //计算本月天数
    getDates(d, t = 0) {
      var curDate = new Date(d.replace(/-/g, '/'));
      var curMonth = curDate.getMonth();
      curDate.setMonth(curMonth + t + 1);
      curDate.setDate(0);
      var curDates = new Array(curDate.getDate()).fill(0).map((item, key) => {
        return key + 1
      })
      return curDates
    },
    //计算该月第一天是星期几
    getWeek (d) {
      var curDate = new Date(d.replace(/-/g, '/'))
      curDate.setDate(1)
      return curDate.getDay()
    },
    //计算该月+前后留白天数
    getFullChunkDates (d) {
        var curDates = this.getDates(d)
        var preDates = this.getDates(d, -1)
        var nexDates = this.getDates(d, 1)
        var curWeek = this.getWeek(d)
        var curMonth = this.getMonths(d)
        var preMonth = this.getMonths(d, -1)
        var nexMonth = this.getMonths(d, 1)
        curDates = curDates.map((i, k) => {
          return {
            num: i,
            fullDate: /(^\d{4})-(\d{1,2})-/.exec(d)[0] + i,
            show: 1,
            calendar: calendar.calendar.solar2lunar(/(^\d{4})/.exec(d)[0],curMonth,i)
          }
        })
        preDates = preDates.map(i => {
          return {
            num: i,
            show: 0,
            year: /(^\d{4})/.exec(d)[0],
            month: preMonth,
            calendar: calendar.calendar.solar2lunar(/(^\d{4})/.exec(d)[0],preMonth,i)
          }
        })
        nexDates = nexDates.map(i => {
          return {
            num: i,
            show: 0,
            year: /(^\d{4})/.exec(d)[0],
            month: nexMonth,
            calendar: calendar.calendar.solar2lunar(/(^\d{4})/.exec(d)[0],nexMonth,i)
          }
        })
        var preCurDates = preDates.slice(preDates.length - (curWeek === 0 ? 6 : curWeek - 1), preDates.length).concat(curDates)
        return preCurDates.concat(nexDates.slice(0, 42 - preCurDates.length))
    }
  },
  created() {
    this.currentDays = "2019-12-21"
    this.days = this.getFullChunkDates(this.currentDays)
  },
  mounted() {
  },
  destroyed() {},
  }
</script>
<style lang='less' scoped>
.c-day{
  display: flex;
  flex-wrap: wrap;
  padding: 20px 40px;
  .h-item{
    width: calc(~"100% / 7");
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .d-item{
    width: calc(~"100% / 7");
    height: 7vh;
    cursor: pointer;
    &-box{
      height: 100%;
      box-sizing: border-box;
      display: flex; 
      flex-direction: column;
      justify-content: center;
    }
    .text-num{
      font-size: 16px;
      line-height: 100%;
    }
    .text-calendar{
      font-size: 12px;
      line-height: 100%;
    }
    // .current-bg{
    //   // background-color: #1cc09f;
    //   border: 1px solid #1cc09f;
    //   display: block;
    //   border-radius: 50%;
    // }
    // .no-default{
    //   color: #cccccc;
    //   display: block;
    // }
  }
}
</style>