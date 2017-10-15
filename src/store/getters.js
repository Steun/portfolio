// Use getters to retrieve data from the state, and possibly filter / modify it before returning it.
export const getProjects = state => {
  return state.projects
}

export const getCurrentProject = state => {
  return state.current
}

export const getProject = (state, getters) => (name) => {
  return state.projects.find(p => p.name === name)
}
