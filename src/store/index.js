import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated:false,
    uid:null,
  },
  mutations: {
    signIn(state) {
      // mutate state
      state.isAuthenticated=true
    },
    signOut(state){
      state.isAuthenticated=false
    },
    addUserId(state,payload){
      state.uid=payload
    },
    removeUserId(state){
      state.uid=null
    }
  },
  actions: {},
  modules: {}
})
