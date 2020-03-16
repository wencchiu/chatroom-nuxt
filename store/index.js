export const state = () => ({
  username: 'Anonymous'
})

export const mutations = {
  setUsername(state, username) {
    state.username = username
  }
}

export const getters = {
  getUsername(state) {
    return state.username
  }
}
