import axios from '../api/axios'
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: []
  },
  mutations: {
  },
  actions: {
    register ({ commit }, payload) {
      axios({
        method: 'POST',
        url: 'register',
        data: payload
      }).then(({ data }) => {
        console.log(data, 'data register <<<<<<<')
        router.push('/login')
      }).catch(err => {
        console.log(err, 'error register <<<<<<<')
      })
    },
    login ({ commit }, payload) {
      axios({
        method: 'POST',
        url: 'loginCustomer',
        data: payload
      }).then(({ data }) => {
        console.log(data, 'data login <<<<<<<')
        localStorage.setItem('access_token', data.access_token)
        router.push('/')
      }).catch(err => {
        console.log(err, 'error login <<<<<<<')
      })
    }
  },
  modules: {
  }
})
