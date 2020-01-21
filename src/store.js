import Vue from 'vue'
import Vuex from 'vuex'
import user from './store/modules/user'

import city from './store/modules/city'
import category from './store/modules/category'
import place from './store/modules/place'
import placeLevel from './store/modules/placeLevel'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    city,
    category,
    place,
    placeLevel
  },
  state: {
    identity: null
  },
  actions: {
    setUser ({ commit }, user) {
      commit('setUser', user)
    }
  },
  mutations: {
    setUser (state, user) {
      state.identity = user
    }
  }
})
