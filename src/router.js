import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import Team1View from "./views/Team1View.vue";
import Team2View from "./views/Team2View.vue";
import MyComponent from "./components/MyComponent.vue";

//路由設定 path 比對 URL，比對成功就載入對應的組件
const routes =[
{
    //http://localhost:5173/  => 載入 HomeView Component
    path:'/', 
    component:HomeView,
    name:'Home',
    alias:'/index'
},
{
    //http://localhost:5173/about  => 載入 AboutView Component
    path:'/about',
    component:AboutView,
    name:'About',
    redirect:'/about/team1',
    children:[
      {
        //http://localhost:5173/about/team1
        path:'team1', 
        component:Team1View, 
        name:'Team1'
      },
      
      {
        //http://localhost:5173/about/team2
        path:'team2', 
        component:Team2View, 
        name:'Team2'
      },
    ]
},
{
    //http://localhost:5173/contact  => 載入 ContactView Component
    path:'/contactAbc',
    component:ContactView,
    name:'Abc'
}]

const router = createRouter({
    history:createWebHistory(),  //HTML5 History API
    routes
})

export default router