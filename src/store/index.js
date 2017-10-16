import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import actions from './actions'
import * as mutations from './mutations'
import actionGroups from '../assets/api/actions'
import projects from '../assets/api/projects'

Vue.use(Vuex)

const state = {
  projects: projects,
  currentProject: projects[0],
  actionGroups: actionGroups
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
