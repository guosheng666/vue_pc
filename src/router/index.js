import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import api from "../api";
import store from '../store/index'

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
    if(store.state.login=='out'){
      type = null
      return  next("/login")
    }else {
      type = "123"
      let routerJson =await api.request.get("/login")
      const routers = JSON.parse(routerJson.data.msg).routers
      routers.map(item=>{
        const pageRouter = {
          path: item.path,
          name: item.name,
          meta:item.meta,
          title:item.title,
          component: () => import(`@/${item.component}`)//用模板字符串解决import 不能直接用变量的问题
        }
        router.options.routes.push(pageRouter)
        router.addRoute(pageRouter)
      })
      console.log(routerJson)
      console.log(router.options)
      next({...to, replace: true})
    }
  }else {
    next()
  }
})

export default router
