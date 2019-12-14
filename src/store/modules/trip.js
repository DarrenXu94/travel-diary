import { getAllTripsAPI } from "@/api/trip";

const state = {
    allTrips: [],
    allTripsLoading: false,
    selectedTrip: null
}

const getters = {
    getAllTrips: state => {
        return state.allTrips
    }
}

const actions = {
    getAllTripsRequest({ commit }) {
        commit('mutate', { property: "allTripsLoading", with: true })

        setTimeout(() => {
            const res = getAllTripsAPI()
            commit('mutate', { property: "allTrips", with: res })
            commit('mutate', { property: "allTripsLoading", with: false })

        }, 3000)
    }

}

const mutations = {
    mutate(state, payload) {
        state[payload.property] = payload.with;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}