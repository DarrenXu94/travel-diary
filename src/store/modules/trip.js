const state = {
    allTrips: ['test'],
    allTripsLoading: false,
    selectedTrip: null
}

const getters = {
    getAllTrips: state => {
        return state.allTrips
    }
}

const actions = {

}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}