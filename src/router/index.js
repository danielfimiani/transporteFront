import { createWebHistory, createRouter } from "vue-router";
import multiguard from 'vue-router-multiguard';

//Components
import Login from '@/views/Login';
import PageNotFound from '@/views/PageNotFound';
import MainLayout from '@/views/MainLayout';
import Home from '@/components/Home';
import Users from '@/components/Users/Users';
import ExcelUpload from '@/components/ExcelUpload/ExcelUpload';
import BarCode from '@/components/BarCode/BarCode'
import ConsultaSerie from '@/components/ConsultaSerie/ConsultaSerie';
import ConsultaPallet from '@/components/ConsultaPallet/ConsultaPallet';

AuthMiddleware
const AuthMiddleware = ((to,from,next) => {
  const user = localStorage.getItem('User');
  if(user){
    //Chek if the session expire 
    if (user.expiricy < Date.now()){
      localStorage.removeItem('User')
      next({ path: '/' })
    }else{
      next()
    }
  }
  else{
    next({ path: '/' })
  }
});

const routes = [
  {
    path: "/",
    name: "Login",
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
        path: "/Users",
        name: "Users",
        component: Users,
      },
      {
        path: "/BarCode",
        name: "Barcode",
        component: BarCode,
      },
      {
        path: "/ConsutlaSerie",
        name: "Serie",
        component: ConsultaSerie,
      },
      {
        path: "/ConsultaPallet",
        name: "Pallet",
        component: ConsultaPallet,
      },
      {
        path: "/ExcelUpload",
        name: "Excel",
        component: ExcelUpload,
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