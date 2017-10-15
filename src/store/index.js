import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
  projects: [
    {
      name: 'projectp',
      title: 'Project P'
    },
    {
      name: 'Lift',
      title: 'Lift'
    }
  ],
  current: {}
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
