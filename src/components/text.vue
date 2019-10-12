<template>
  <div class="">
    <van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>

<van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>

  </div>
</template>

<script>

export default {
  data() {
    return {

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

</style>