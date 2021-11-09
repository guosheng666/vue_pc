import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import api from "../api";
import getMenu from '../units/getMenus'
import getRouter from "../units/getRouter";
// import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

let type = null
router.beforeResolve(async (to,from,next)=>{
  if(to.name=='Login'||to.path=="/" || to.name==null) next()
  //阻止无线循环
  if(!type ){
    const login = sessionStorage.getItem("login")
    if(login==null || login=="out"){
      type = null
      return  next("/login")
    }else {
      type = "123"
      let routerJson =await api.request.get("/login")
      const routers = JSON.parse(routerJson.data.msg).routers
      //设置menus
      let menus = getMenu(routers)
      window.sessionStorage.setItem("menus",JSON.stringify(menus))
      routers.map(item=>{
        const pageRouter = getRouter(item)
        router.options.routes.push(pageRouter)
        router.addRoute(pageRouter)
      })
      next({...to, replace: true})
    }
  }else {
    next()
  }
})

export default router
