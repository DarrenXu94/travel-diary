import Vue from 'vue'

import Vuex from 'vuex'

import Trip from "./modules/trip"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: { Trip }
})