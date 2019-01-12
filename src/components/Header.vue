<template>
  <div class="head_wraper">
    <van-search
      placeholder="搜索职位/课程/扶贫政策"
      v-model="value"
      class="search_box"
    />

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style>
.search_box {
  background-color: #f84700 !important;
}
</style>

<style scoped lang = "scss">
.head_wraper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  height: 0.58rem;
  line-height: 0.58rem;
  background-color: #f84700;
  /deep/ .van-search .van-cell {
    border-radius: 16px;
    margin-top: 20px;
  }
}
</style>
