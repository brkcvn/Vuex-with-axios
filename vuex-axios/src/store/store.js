import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        data: [],
        successMessage: false,
        errorMessage: false
    },
    getters: {
        dataGetters(state) {
            return state.data
        },
    },
    mutations: {
        dataMutations(state, data) {
            state.data = data
        },
    },
    actions: {
        loadData({commit, state}, valueIdKey) {
            axios.get(`https://jsonplaceholder.typicode.com/posts?id=${valueIdKey.value}`)
            .then((response) => {
                commit('dataMutations', response.data)

                if(response.data.length) {
                    state.successMessage = true
                    state.errorMessage = false
                }else {
                    state.errorMessage = true
                    state.successMessage = false
                }
            })
        },
    }
});