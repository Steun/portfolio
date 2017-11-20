const actions = {

  updateProject({commit}, project) {
    commit('SET_CURRENT_PROJECT', project)
    commit('SET_CURRENT_PROJECT_INDEX', project)
    commit('SET_NEXT_PROJECT_INDEX', project)
  },

  toggleProjectInfoExpanded({commit}, value) {
    commit('SET_PROJECT_INFO_EXPANDED', value)
  }
}

export default actions
