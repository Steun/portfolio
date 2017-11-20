export const SET_CURRENT_PROJECT = (state, project) => {
  state.currentProject = project
}

export const SET_CURRENT_PROJECT_INDEX = (state, project) => {
  state.currentProjectIndex = state.projects.findIndex(project => project.name === state.currentProject.name)
}

export const SET_NEXT_PROJECT_INDEX = (state, project) => {
  let index = state.projects.findIndex(p => p.name === project.name)
  state.nextProjectIndex = (index === state.projects.length - 1) ? 1 : index + 1
}

export const SET_PROJECT_INFO_EXPANDED = (state, status) => {
  state.projectInfoExpanded = status
}

