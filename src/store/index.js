import Vue from "vue";
import Vuex from "vuex";

import * as getters from "./getters";
import actions from "./actions";
import * as mutations from "./mutations";
import actionGroups from "@/assets/scripts/actions";
import projects from "@/assets/scripts/projects";

Vue.use(Vuex);

const state = {
  mobile: false,
  projects: projects,
  currentProject: projects[0],
  currentProjectIndex: 0,
  nextProjectIndex: 1,
  projectInfoExpanded: false,
  aboutExpanded: false,
  actionGroups: actionGroups
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
