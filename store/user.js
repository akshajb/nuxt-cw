import { set } from 'vue'

export const state = () => ({
  users: [],
})

export const getters = {
  getUsers(state) {
    return state.users
  },
}

export const mutations = {
  setUsers(state, value) {
    set(state.users, value)
  },
}

export const actions = {
  fetchUsers({ commit }) {
    // Do some async action and populate users

    commit('setUsers', [
      // populated Users
    ])
  },
}
