<template>
  <div class="tab_wraper">
    <router-link
      class="item"
      to="/"
    >
      <div :class="$route.name=='index'?'active':''">
        <i class="iconfont icon-ziyuan"></i>
        <div class="icon_title">首页</div>
      </div>
    </router-link>
    <router-link
      class="item"
      to="/position"
    >
      <div :class="$route.name=='position'?'active':''">
        <i class="iconfont icon-portfoliocaseb"></i>
        <div class="icon_title">职位</div>
      </div>

    </router-link>
    <router-link
      class="item"
      to="/course"
    >
      <div :class="$route.name=='course'?'active':''">
        <i class="iconfont icon-maikefeng"></i>
        <div class="icon_title">课程</div>
      </div>

    </router-link>
    <router-link
      class="item"
      to="/news"
    >
      <div :class="$route.name=='news'?'active':''">
        <i class="iconfont icon-xinwen"></i>
        <div class="icon_title">新闻</div>
      </div>

    </router-link>
    <router-link
      class="item"
      to="/personal"
    >
      <div :class="$route.name=='personal'?'active':''">
        <i class="iconfont icon-wode"></i>
        <div class="icon_title">个人中心</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>


<style scoped lang = "scss">
.tab_wraper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.58rem;
  background-color: #fff;
  z-index: 999;
  /* border: 1px solid #f00; */
  display: flex;
  text-align: center;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-top: 1px solid #ddd;
    background-color: #fff;
    color: #666;
    /deep/ .icon-ziyuan,
    .icon-portfoliocaseb,
    .icon-maikefeng,
    .icon-xinwen,
    .icon-wode {
      font-size: 26px;
    }
  }
  .icon_title {
    margin-top: 6px;
  }
}
.active {
  color: #409eff;
}
</style>
