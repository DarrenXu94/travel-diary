import { getAllTripsAPI } from "@/api/trip";

const state = {
    allTrips: [],
    allTripsLoading: false,
    selectedTrip: null,
    selectedTripLoading: false
}

const getters = {
    getAllTrips: state => {
        return state.allTrips
    },

    getSelectedTrip: state => {
        return state.selectedTrip
    }
}

const actions = {
    getAllTripsRequest({ commit }) {
        commit('mutate', { property: "allTripsLoading", with: true })
        setTimeout(async () => {
            const res = await getAllTripsAPI()
            commit('mutate', { property: "allTrips", with: res.data })
            commit('mutate', { property: "allTripsLoading", with: false })

        }, 3000)
    },

    selectIndividualTrip({ commit, state }, property) {
        commit('mutate', { property: "selectedTripLoading", with: true })
        const specificTrip = state.allTrips.find(el => {
            return el.id == property
        })
        setTimeout(() => {
            commit('mutate', { property: "selectedTrip", with: specificTrip })
            commit('mutate', { property: "selectedTripLoading", with: false })

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