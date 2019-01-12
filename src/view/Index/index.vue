<template>
  <div class="index_wraper">
    <Header></Header>
    <!-- banner轮播图 -->
    <swiper
      :options="swiperOption"
      class="mtop"
    >
      <swiper-slide><img
          src="./image/banner1.png"
          alt=""
          class="img_box"
        ></swiper-slide>
      <swiper-slide><img
          src="./image/banner1.png"
          alt=""
          class="img_box"
        ></swiper-slide>
      <swiper-slide><img
          src="./image/banner1.png"
          alt=""
          class="img_box"
        ></swiper-slide>
      <swiper-slide><img
          src="./image/banner1.png"
          alt=""
          class="img_box"
        ></swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
    <!-- 政策解读 -->
    <div
      class="policy bgc_w"
      @click="$router.push('/')"
    >
      <div class="policy_title">
        <!-- <h3>政策解读</h3> -->
        <span class="title_1">政策</span>
        <span class="title_2">解读</span>
      </div>
      <swiper :options="swiperOption2">
        <swiper-slide class="swiper_item">
          <p>因地制宜 精准施策 新余推进就业扶贫下真功</p>
        </swiper-slide>
        <swiper-slide class="swiper_item">
          <p>因地制宜 精准施策 新余推进就业扶贫下真功</p>
        </swiper-slide>
        <swiper-slide class="swiper_item">
          <p>因地制宜 精准施策 新余推进就业扶贫下真功</p>
        </swiper-slide>
        <swiper-slide>
          <p>河北省"互联网+教育" 探索精准扶贫模式</p>
        </swiper-slide>
      </swiper>
      <div class="arrow"><img
          src="./image/arrow.png"
          alt=""
        ></div>
    </div>
    <!-- 职位 -->
    <div class="position_wraper color_3 bgc_w">
      <div class="top">
        <div class="position_title"><img
            src="./image/fire.png"
            alt=""
          ><span class="font_18 refer">推荐职位</span></div>
        <div class="more"><span>更多></span>
        </div>
      </div>
      <div class="position_list">
        <router-link
          to="/add"
          class="row1 color_3"
        >
          <div class="row1_desc"> <span class="job_name">电子厂诚聘车间普工</span>
            <span class="salary">4000-6000/月</span></div>
          <div class="row2 color_3">
            <div class="require"><span>北京</span><span>通州</span><span>无经验</span></div>
            <span>12月05日</span>
          </div>
        </router-link>
      </div>
      <div class="position_list">
        <router-link
          to="/home"
          class="row1 color_3"
        >
          <div class="row1_desc"> <span class="job_name">电子厂诚聘车间普工</span>
            <span class="salary">4000-6000/月</span></div>
          <div class="row2 color_3">
            <div class="require"><span>北京</span><span>通州</span><span>无经验</span></div>
            <span>12月05日</span>
          </div>
        </router-link>
      </div>
    </div>
    <!-- 热门课程 -->
    <div class="hot_course mt_8 bgc_w mb">
      <div
        class="top"
        @click="$router.push('/')"
      >
        <div
          class="position_title"
          @click="totalCourse"
        >
          <span class="font_18">热门课程</span>
          <span class="select">精选</span>
        </div>
        <div class="more"><span>更多></span>
        </div>
      </div>
      <div class="course">
        <div class="item">
          <div
            class="img"
            @click="single"
          ><img
              src="./image/course1.png"
              class="ad"
              alt=""
            >
            <span class="time">08:07</span>
          </div>
          <div class="text_desc">
            <p>15天成为专业母婴护理师</p>
            <p class="font_12 color_6">如何让一位新手短期成为专业保姆</p>
          </div>
          <div class="read">
            <img
              src="./image/eye.png"
              alt=""
              class="eye"
            ><span class="color_6 font_12">333人已学习</span>
          </div>
        </div>
        <div class="item">
          <div class="img"><img
              class="ad"
              src="./image/course1.png"
              alt=""
            > <span class="time">08:07</span></div>
          <div class="text_desc">
            <p>15天成为专业母婴护理师</p>
            <p class="font_12 color_6">如何让一位新手短期成为专业保姆</p>
          </div>
          <div class="read">
            <img
              src="./image/eye.png"
              alt=""
              class="eye"
            ><span class="color_6 font_12">333人已学习</span>
          </div>
        </div>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      swiperOption2: {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        }
      }
    };
  },
  methods: {
    totalCourse() {},
    single() {
      this.$router.push("/single");
    }
  }
};
</script>
<style>
.mtop {
  margin-top: 0.6rem;
}
</style>

<style scoped lang = "scss">
.index_wraper {
  .img_box {
    height: 1.8rem;
    width: 100%;
  }
  /deep/ .swiper-pagination-bullet-active {
    border-radius: 40%;
    width: 14px;
    height: 6px;
   background-color:#fff;
  }
  /* 政策解读 */
  .policy {
    /* border: 1px solid #f00; */
    display: flex;
    height: 0.6rem;
    line-height: 1.5;
    padding: 0px 15px;
    .policy_title {
      width: 0.3rem;
      height: 0.32rem;
      /* margin-top: 8px; */
      font-size: 15px;
      line-height: 28px;
      font-weight: 700;
      /* border: 1px solid #00f; */
      .title_1 {
        color: #0099e8;
      }
      .title_2 {
        color: #333333;
      }
    }
    /deep/ .swiper-container-vertical > .swiper-wrapper {
      height: 0.3rem;
      margin-top: 18px;
    }
    .arrow {
      width: 0.07rem;
      height: 0.4rem;
      margin-top: 18px;
      img {
        width: 0.07rem;
        height: 0.12rem;
      }
    }
  }
}
/* 政策解读 */
/* 职位 */
.position_wraper {
  padding: 9px 10px;
  margin-top: 8px;
  /* height: 1.8rem; */
  box-sizing: border-box;
}
.top {
  display: flex;
  justify-content: space-between;
  /* border: 1px solid #00f; */
  height: 30px;
  line-height: 30px;
  .position_title {
    img {
      width: 0.12rem;
      height: 0.13rem;
    }
  }
  .refer {
    margin-left: 10px;
  }
}
.position_list {
  margin-top: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  box-sizing: border-box;
  .row1,
  .row2 {
    display: flex;
    justify-content: space-between;
  }
  .row1 {
    font-weight: 700;
    flex-direction: column;
    height: 44px;
    .row1_desc {
      display: flex;
      justify-content: space-between;
    }
    .job_name {
      font-size: 15px;
    }
    .salary {
      color: #e91b32;
    }
  }
  .row2 {
    font-size: 13px;
    color: #666;
  }
  .require span {
    padding: 4px;
    /* border-right:1px solid #0099e8; */
  }
}
.position_list:last-child {
  border: none;
}
/* 职位 */
/* 课程 */
.hot_course {
  /* height: 2.3rem; */
  padding-top: 10px;
  padding-bottom: 10px;
  /* padding: 12px 10px; */
  /* border: 1px solid #f00; */
  box-sizing: border-box;
  .top {
    padding: 0 10px;
  }
  .select {
    display: inline-block;
    width: 50px;
    vertical-align: 2px;
    text-align: center;
    border-radius: 12px;
    height: 20px;
    line-height: 20px;
    margin-left: 10px;
    /* border: 1px solid #f00; */
    background-color: #ffae00;
    color: #fff;
  }
  .course {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .item {
    width: 1.8rem;
    position: relative;
    .ad {
      width: 100%;
      display: block;
    }
    .time {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      text-align: center;
      height: 16px;
      line-height: 16px;
      background-color: #21bd07;
      opacity: 0.8;
      color: #ffffff;
    }
    .text_desc {
      line-height: 1.7;
      margin-top: 8px;
    }
    .read {
      margin-top: 10px;
      .eye {
        width: 0.2rem;
        vertical-align: middle;
        margin-right: 9px;
      }
    }
  }
}
/* 课程 */
</style>
