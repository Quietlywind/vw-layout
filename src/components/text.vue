<template>
  <div class="calendar">
    <div class="top-control">
      <van-icon name="arrow-left" size="23" @click="leftControl"/>
      <span class="text-control" @click="showPopup">{{currentDays.split("-")[0]}}年{{currentDays.split("-")[1]}}月</span>
      <van-popup v-model="show" position="bottom">
        <van-datetime-picker v-model="currentDate" 
          :min-date="minDate" 
          :max-date="maxDate" 
          type="year-month" 
          :formatter="formatter"
          @confirm="dateConfirm"
          @cancel="dateCancel"
        />
      </van-popup>
      <van-icon name="arrow" size="23" @click="rightControl"/>
    </div>
    <div class="c-day">
      <div class="h-item" v-for="i in weeks" :key="i">
        <span>{{i}}</span>
      </div>
      <div class="d-item" v-for="(item,key) in days" :key="key">
        <div :class="['d-item-box',item.show == 0 ? 'no-default' : '']" :data-date="item.fullDate">
          <span class="text-num">{{item.num}}</span>
          <template v-if="isCalendar">
            <span class="text-calendar">{{getCalendar(item)}}</span>
          </template>
        </div>
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
      currentDate: new Date(),
      isCalendar: true,
      show: false,
      minDate: new Date(1990,1,1),
      maxDate: new Date(2030,1,1),
    };
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    //处理lunar calendar
    getCalendar(val) {
      let showText = "";
      if (val.calendar.festival && val.calendar.festival.length) {
        showText = val.calendar.festival[0]
      } else if (val.calendar.Term) {
        showText = val.calendar.Term
      } else if (val.calendar.lDay == 1) {
        showText = val.calendar.IMonthCn
      } else {
        showText = val.calendar.IDayCn
      }
      return showText
    },
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
      var preFullDate = new Date(/(^\d{4})/.exec(d)[0], parseInt(preMonth) - 1 );
      var nexFullDate = new Date(/(^\d{4})/.exec(d)[0], parseInt(nexMonth) - 1 );
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
          fullDate: preFullDate.getFullYear() + '-' + parseInt(preFullDate.getMonth() + 1) + "-" + i,
          calendar: calendar.calendar.solar2lunar(/(^\d{4})/.exec(d)[0],preMonth,i)
        }
      })
      nexDates = nexDates.map(i => {
        return {
          num: i,
          show: 0,
          fullDate: nexFullDate.getFullYear() + '-' + parseInt(nexFullDate.getMonth() + 1) + "-" + i,
          calendar: calendar.calendar.solar2lunar(/(^\d{4})/.exec(d)[0],nexMonth,i)
        }
      })
      //如果想周日排在最前面，则将curWeek === 0 三目运算则为0
      var preCurDates = preDates.slice(preDates.length - (curWeek === 0 ? 6 : curWeek - 1), preDates.length).concat(curDates)
      return preCurDates.concat(nexDates.slice(0, 42 - preCurDates.length))
    },
    //左切换日期
    leftControl() {
      this.publicDate(this.currentDays, -1)
    },
    //右切换日期
    rightControl() {
      this.publicDate(this.currentDays, 1)
    },
    publicDate(val,num) {
      let getMonth = this.getMonths(val, num)
      let getDate = new Date(/(^\d{4})/.exec(val)[0], parseInt(getMonth) - 1);
      this.currentDays = `${getDate.getFullYear()}-${getDate.getMonth() + 1}-${getDate.getDate()}`
      this.days = this.getFullChunkDates(this.currentDays)
    },
    showPopup() {
      this.currentDate = new Date(this.currentDays)
      this.show = true;
    },
    dateConfirm(val) {
      this.currentDays = `${val.getFullYear()}-${val.getMonth() + 1}-${val.getDate()}`
      this.days = this.getFullChunkDates(this.currentDays)
      this.show = !this.show;
    },
    dateCancel() {
      this.show = !this.show;
    },
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }
      return value;
    }
  },
  created() {
    let newDate = new Date();
    this.currentDays = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
    this.days = this.getFullChunkDates(this.currentDays)
  },
  mounted() {
  },
  destroyed() {},
  }
</script>
<style lang='less' scoped>
.top-control{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh 0vh;
  .text-control{
    font-size: 18px;
    padding: 0px 10px;
  }
}
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
      color: #000000;
    }
    .text-calendar{
      font-size: 12px;
      color: #999999;
    }
    .no-default{
      .text-num{
        color: #bfbfbf;
      }
      .text-calendar{
        color: #bfbfbf;
      }
    }
  }
}
</style>