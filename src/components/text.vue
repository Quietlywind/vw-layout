<template>
  <div class="c-day">
    <div class="d-item" v-for="i in weeks" :key="i">
      <span>{{i}}</span>
    </div>
    <div class="d-item" v-for="(item,key) in days" :key="key">
      <span :class="[item.fullDate == currentDays ? 'cellbg' : '']">{{item.num}}</span>
    </div>
  </div>
</template>

<script>

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
        curDates = curDates.map((i, k) => {
          return {
            num: i,
            fullDate: /(^\d{4})-(\d{1,2})-/.exec(d)[0] + i,
            show: 1
          }
        })
        preDates = preDates.map(i => {
          return {
            num: i,
            show: 0
          }
        })
        nexDates = nexDates.map(i => {
          return {
            num: i,
            show: 0
          }
        })
        var preCurDates = preDates.slice(preDates.length - (curWeek === 0 ? 6 : curWeek - 1), preDates.length).concat(curDates)
        return preCurDates.concat(nexDates.slice(0, 42 - preCurDates.length))
    }
  },
  created() {
    this.currentDays = "2019-10-21"
    this.days = this.getFullChunkDates('2019-10-21')
  },
  mounted() {},
  destroyed() {},
  }
</script>
<style lang='less' scoped>
.c-day{
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  .d-item{
    width: calc(~"100% / 7");
    height: 5.5vh;
    line-height: 5.5vh;
    cursor: pointer;
    .cellbg{
      background-color: #1cc09f;
      display: block;
    }
  }
}
</style>