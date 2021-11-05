import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import api from "../api";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

let type = null
router.beforeEach(async (to,from,next)=>{
  if (to.name=='Login'){
    console.log(111111)
    console.log(to)
    next()
  }else {
    console.log(222)
    //阻止无线循环
    if(!type ){
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
      console.log(router.options)
      next({...to, replace: true})

    }else {
      next()
    }
  }
})

export default router
