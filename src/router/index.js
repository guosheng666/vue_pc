import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})
let getRouter = [ {
  path: '/test',
  name: 'Test',
  component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
}]
let type = null
router.beforeEach((to,from,next)=>{
  if(!type){
    type = "123"

    getRouter.map(v=>{
      router.options.routes.push(v)
      router.addRoute(v)
    })
    console.log(router.options)
    next({...to, replace: true})
  }else {
    next()
  }
})

export default router
