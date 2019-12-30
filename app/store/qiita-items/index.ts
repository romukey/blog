import { Getters, Mutations, Actions } from 'vuex'
import { S, G, M, A } from './type'

export const state = (): S => ({
  items: [],
})

export const getters: Getters<S, G> = {
  items(state) {
    return state.items
  },
}

export const mutations: Mutations<S, M> = {
  setItems(state, { items }) {
    state.items = items
  },
}

export const actions: Actions<S, A, G, M> = {
  fetch({ commit }) {
    return this.$axios.get('/qiita/items').then(response => {
      commit('setItems', { items: response.data })
    })
  },
}
