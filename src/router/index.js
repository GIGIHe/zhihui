import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
const components = {
  login: () => import("@/components/Login"), //登录
  register: () => import("@/components/Register"), //注册
  verity: () => import("@/view/Verity/index"), //身份验证
  tabbar: () => import("@/components/Tabbar"),
  head: () => import("@/components/Header"),
  index: () => import("@/view/Index/index"), //首页
  course: () => import("@/view/Course/index"), //课程页
  position: () => import("@/view/Position/index"), //职位页
  news: () => import("@/view/News/index"), //新闻页
  personal: () => import("@/view/Personal/index"), //个人中心页
  video: () => import("@/view/Video/index") //个人中心页
};
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: components.login
    },
    {
      path: "/register",
      name: "register",
      component: components.register
    },
    {
      path: "/verity",
      name: "verity",
      component: components.verity
    },
    {
      path: "/",
      name: "index",
      component: components.index
    },
    {
      path: "/position",
      name: "position",
      component: components.position
    },
    {
      path: "/course",
      name: "course",
      component: components.course
    },
    {
      path: "/news",
      name: "news",
      component: components.news
    },
    {
      path: "/personal",
      name: "personal",
      component: components.personal
    },
    {
      path: "/video",
      name: "video",
      component: components.video
    }

    // {
    //   path: "/tab",
    //   name: "tab",
    //   component: components.tabbar
    // },
    // {
    //   path: "/head",
    //   name: "head",
    //   component: components.head
    // }
  ]
});
