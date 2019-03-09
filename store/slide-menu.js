export const state = () => {
  return {
    isOpened: false,
  }
}

export const actions = {}

export const getters = {
  isOpened(state) {
    return state.isOpened
  },
}

export const mutations = {
  open(state) {
    state.isOpened = true
  },

  close(state) {
    state.isOpened = false
  },
}
