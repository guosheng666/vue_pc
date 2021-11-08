import Vue from 'vue'
import Vuex from 'vuex'
import request from "../api";


Vue.use(Vuex)
function getRouter() {
return request.request2.get('/static/router.json')
}
getRouter().then(res=>{
  console.log(res)
})
export default new Vuex.Store({
  state: {
    qwe:"",
    login:'out'
  },
  getters:{
    qwe:(state)=>state.qwe,
    login:(state)=>state.login
  },
  mutations: {
    qwe(state,data){
      state.qwe = data
    },
    login(state,data){
      state.login = data
    }
  },
  actions: {
    async qwe({commit}){
      let data = await getRouter()
      commit('qwe',data.data)
    },
    login({commit},data){
      commit('login',data)
    }
  },
  modules: {
  }
})
