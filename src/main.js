// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "normalize.css"; // 导入初始化样式
import Vant from "vant";
import "vant/lib/index.css";
import "./style/common.css";
import VueAwesomeSwiper from "vue-awesome-swiper";//轮播图
import "swiper/dist/css/swiper.css";

import VueVideoPlayer from "vue-video-player";//视频
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";

import  $axios from "./utils/index";
import store from "./store/index"
import Header from "../src/components/Header";
import Tabbar from "../src/components/Tabbar";


Vue.prototype.$axios = $axios;
Vue.use(Vant);
Vue.use(VueAwesomeSwiper);
Vue.use(VueVideoPlayer);
Vue.component("Header", Header);
Vue.component("Tabbar", Tabbar);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
