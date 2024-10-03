import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";

//路由設定 path 比對 URL，比對成功就載入對應的組件
const routes =[
{
    //http://localhost:5173/  => 載入 HomeView Component
    path:'/', 
    component:HomeView
},
{
    //http://localhost:5173/about  => 載入 AboutView Component
    path:'/about',
    component:AboutView
},
{
    //http://localhost:5173/contact  => 載入 ContactView Component
    path:'/contact',
    component:ContactView
}]

const router = createRouter({
    history:createWebHistory(),  //HTML5 History API
    routes
})

export default router