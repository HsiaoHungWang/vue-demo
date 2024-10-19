import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import Team1View from "./views/Team1View.vue";
import Team2View from "./views/Team2View.vue";
import MemberView from "./views/MemberView.vue";
import NotFound from "./views/NotFound.vue";
import DirectiveView from "./views/DirectiveView.vue";
import TodosView from "./views/TodosView.vue";
import RegisterView from "./views/RegisterView.vue";
import LoginView from "./views/LoginView.vue";
import TabsView from "./views/TabsView.vue";

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
},
{
    //http://localhost:5173/directive  => 載入 DirectiveView Component
    path:'/directive',
    component:DirectiveView,
    name:'directive'
},
{
    //http://localhost:5173/todos  => 載入 TodosView Component
    path:'/todos',
    component:TodosView,
    name:'todos'
},
{
    //http://localhost:5173/register  => 載入 RegisterView Component
    path:'/register',
    component:RegisterView,
    name:'register'
},
{
    //http://localhost:5173/login  => 載入 RegisterView Component
    path:'/login',
    component:LoginView,
    name:'login'
},
{
    //http://localhost:5173/tabs  => 載入 Tabs Component
    path:'/tabs',
    component:TabsView,
    name:'tabs'
},
{
  //http://localhost:5173/member/參數  => 載入 MemberView Component
  path:'/member/:id',
  component:MemberView,
  name:'member',
  props:true
},{
  //404
  path:'/:pathMatch(.*)*',
  component:NotFound
}]

const router = createRouter({
    history:createWebHistory(),  //HTML5 History API
    routes
})

export default router