// Use getters to retrieve data from the state, and possibly filter / modify it before returning it.
export const getProject = state => name => {
  return state.projects.find(p => p.name === name);
};

export const getProjectByIndex = state => index => {
  return state.projects[index];
};
