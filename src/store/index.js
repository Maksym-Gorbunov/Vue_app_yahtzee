import Vuex from 'vuex';
import Vue from 'vue';
import dices from './modules/dices';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  // strict: true,
  modules: {
    dices
  }
});
