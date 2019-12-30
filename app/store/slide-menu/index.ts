import { Getters, Mutations, Actions } from 'vuex'
import { S, G, M, A } from './type'

export const state = (): S => ({
  isOpened: false,
})

export const getters: Getters<S, G> = {
  isOpened(state, getters, rootState, rootgetters) {
    return state.isOpened
  },
}

export const mutations: Mutations<S, M> = {
  open(state) {
    state.isOpened = true
  },
  close(state) {
    state.isOpened = false
  },
}

export const actions: Actions<S, A, G, M> = {}
