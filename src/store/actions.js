const actions = {

  commitCurrentProject({commit}, project) {
    commit('SET_CURRENT_PROJECT', project)
  }
}

export default actions
