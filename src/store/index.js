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
    qwe:""
  },
  getters:{
    qwe:(state)=>state.qwe
  },
  mutations: {
    qwe(state,data){
      state.qwe = data
    }
  },
  actions: {
    async qwe({commit}){
      let data = await getRouter()
      commit('qwe',data.data)
    }
  },
  modules: {
  }
})
