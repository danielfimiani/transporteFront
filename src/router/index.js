import { createWebHistory, createRouter } from "vue-router";
import multiguard from 'vue-router-multiguard';

//Components
import Login from '@/views/Login'
import PageNotFound from '@/views/PageNotFound.vue'
import MainLayout from '@/views/MainLayout';
import Home from '@/components/Home'
import Calendar from '@/components/Calendar'
import Users from '@/components/Users'

//AuthMiddleware
const AuthMiddleware = ((to,from,next) => {
  next();
  const user = localStorage.getItem('User');
  if(user){
    //Chek if the session expire 
    if (user.expiricy < Date.now()){
      localStorage.removeItem('User')
      next({ path: '/' })
    }
  }
  else{
    next({ path: '/' })
  }
  next();
});

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/MainLayout",
    name: "MainLayout",
    component: MainLayout,
    beforeEnter : multiguard([AuthMiddleware]),
    children : [
      {
        path: "/Home",
        name: "Home",
        component: Home,
      },
      {
        path: "/Calendar",
        name: "Calendar",
        component: Calendar,
      },
      {
        path: "/Users",
        name: "Users",
        component: Users,
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;