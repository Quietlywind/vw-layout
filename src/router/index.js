import Vue from "vue";
import Router from "vue-router";
const HelloWorld = () => import("@/components/HelloWorld");
const Main = () => import("@/components/main");
const home = () => import("@/components/home");
const list = () => import("@/components/list");
const text = () => import("@/components/text");
const config = () => import("@/components/config");


Vue.use(Router);

const router =  new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/login")
    },
    {
      path: "/",
      name: "Main",
      component: Main,
      redirect: "/home",
      children: [
        {
          path: "home",
          name: "home",
          component: home
        },
        {
          path: "list",
          name: "list",
          component: list
        },
        {
          path: "text",
          name: "text",
          component: text
        },
        {
          path: "config",
          name: "config",
          component: config
        },
      ]
    },
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
})

export default router