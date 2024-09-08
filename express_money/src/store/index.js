import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const users = {
  1:{ name:'Данил', password:  '1111'}, 
  2:{ name:'Алексей', password: '0000'}
}

const logins = {
  Danil:{
    userId: 1
  },
  Alexey:{
    userId: 2
  },
  "+79184354325":{
    userId: 1
  }
}

function loginBackend (login, password) {
  if (logins[login]) {
    const activeUserId = logins[login].userId
    if (users[activeUserId].password === password) {
      return {name: users[activeUserId].name}
    } 
  }
  throw new Error ('Ошибка! Неккоректный пароль')
}

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    clearUser (state) {
      state.user = null
    },

    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    login (state, loginData) {
        const user = loginBackend(loginData.login, loginData.password)
        state.commit('setUser', user)
    },

    logout (state) {
      state.commit('clearUser')
    }
  },
  modules: {
  }
})
