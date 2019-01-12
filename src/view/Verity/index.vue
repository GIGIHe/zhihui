<template>
  <div>
    <header class="head font-16">
      <img
        src="../../image/back.svg"
        class="back"
        @click="$router.back()"
      >
      <span class="head_tilte">身份验证</span></header>
    <div class="bgc_w title mt">
      上传身份证
    </div>
    <!-- 上传身份证 -->
    <div class="id_card bgc_w">
      <div class="photo">
        <label
          for="photo_1"
          class="photo_1"
        >
          <input
            type="file"
            accept="image/*"
            id="photo_1"
            style="display:none"
          >
          <img
            :src="imgUrl"
            alt=""
            class="photo_img"
          >
        </label>

        <p class="text">+正面上传</p>
      </div>
      <!-- <div class="photo">
        <label
          for="photo_2"
          class="photo_2"
        >
          <input
            type="file"
            accept="image/*"
            id="photo_2"
            style="display:none"
          >
          <img
            :src="imgUrl"
            alt=""
            class="photo_img"
          >
        </label>

        <p class="text">+背面上传</p>
      </div> -->
    </div>
    <!-- 上传身份证 -->
    <!-- <img
        src="./img/loading.svg"
        alt=""
        v-show="isShow"
        class="loading"
      > -->
    <ul class="user_box bgc_w">
      <li class="user_info">
        <span class="lable_info">姓名</span>
        <span class="info">xxx</span>
      </li>
      <li class="user_info">
        <span class="lable_info">身份证号</span>
        <span class="info">xxx</span>
      </li>
      <li class="user_info">
        <span class="lable_info">生日</span>
        <span class="info">xxx</span>
      </li>
      <li class="user_info">
        <span class="lable_info">住址</span>
        <span class="info">xxx</span>
      </li>
      <li class="user_info">
        <span class="lable_info">民族</span>
        <span class="info">xxx</span>
      </li>
      <li class="user_info">
        <span class="lable_info">性别</span>
        <span class="info">xxx</span>
      </li>
    </ul>
    <Button
      @click.native="submit"
      :title="title"
    ></Button>

  </div>
</template>

<script>
import Button from "../../components/Button";
var url;
export default {
  data() {
    return {
      imgUrl: "",
      title: "检验并提交",
      id_data: "",
      id_birth: "",
      isShow: false
    };
  },
  components: {
    Button
  },
  methods: {
    handle(e) {
      //     let file = e.target.files[0];
      //     let form = new FormData();
      //     form.append("image", file);
      //     this.isShow = true;
      //     axios
      //       .post("http://api.qijiawr.com/config/config.php", form, {
      //         timeout: 1500
      //       })
      //       .then(res => {
      //         this.isShow = false;
      //         console.log("hello", res.data);
      //         this.id_data = res.data;
      //         this.id_birth = res.data.birth;
      //       })
      //       .catch(err => {
      //         console.log(err);
      //       });
    },

    submit() {
      // if (this.id_data) {
      this.$router.push("/");
      // } else {
    }
    // }
  }
  // computed: {
  //   birth: function() {
  //     let reg = /(\d{4})(\d{2})(\d{2})/g;
  //     return this.id_birth.replace(reg, "$1-$2-$3");
  //   }
  // },
  // mounted() {

  // }
};
</script>

<style scoped lang = "scss">
.head {
  height: 44px;
  text-align: center;
  line-height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  .back {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 0.2rem;
  }
  .head_tilte {
    font-size: 20px;
    /* font-weight: bold; */
  }
}
.title {
  height: 0.6rem;
  font-size: 20px;
  line-height: 0.6rem;
  padding-left: 10px;
  box-sizing: border-box;
}

.id_card {
  display: flex;
  justify-content: space-around;
  /* border: 1px solid #f00; */
  height: 2rem;
  .photo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* z-index: 999; */
  }
  /* 身份证照片样式 */
  .photo_1,
  .photo_2 {
    width: 1.5rem;
    display: block;
    height: 1.4rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    margin-bottom: 8px;
    position: relative;
  }
  .photo_1 {
    background: url("./img/front.png") no-repeat;
    background-size: 100% 100%;
  }
  /* .photo_2 {
    background: url("./img/behind.png") no-repeat;
    background-size: 100% 100%;
  } */
  /* 身份证照片样式 */
  /* 照片下面文字样式 */
  .text {
    color: #409eff;
    text-align: center;
    font-size: 16px;
  }
  /* 照片下面文字样式 */
  /* 真实图片样式 */
  .photo_img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.4rem;
    /* display: block; */
    /* height: 1.4rem; */
  }
}
.id_info {
  margin-top: 10px;
  margin-bottom: 10px;
  /* display: flex; */
  .photo {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 3.75;
    height: 2rem;
    /* border: 1px solid #f00; */
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 3rem;
      height: 1.8rem;
    }
  }
  .signal {
    /deep/ .icon-tianjia {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }
}
.user_box {
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  .user_info {
    border-bottom: 1px solid #ddd;
    height: 0.4rem;
    line-height: 0.4rem;
    display: flex;
    justify-content: space-between;
    .lable_info {
      width: 0.8rem;
      font-size: 16px;
      font-weight: 600;
    }
    .info {
      flex: 1;
      font-size: 13px;
    }
  }
}
/* loading 样式 */
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;
}
</style>
