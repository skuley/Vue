 import Vue from "vue";
 import VueRouter from "vue-router";
 import Home from "./views/Home";
 import About from "./views/About";

 Vue.use(VueRouter);

 // 여기서 url에 맞는 페이지를 불러온다
 // 여기서 path마다 어떤 component를 연계시킬지 정한다.
 const router = new VueRouter({
    mode : "history",
    routes : [
        {path : "/", component : Home},
        {path : "/about", component : About}
    ]
 });