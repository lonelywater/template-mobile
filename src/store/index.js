import Vue from 'vue'
import Vuex from 'vuex'
import msg from './modules/msg'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
    	msg,
    }
})