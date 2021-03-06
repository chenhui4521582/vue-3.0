import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./acations";

Vue.use(Vuex);

let store = new Vuex.Store({
  state,
  actions,
  mutations
});

export default store;
