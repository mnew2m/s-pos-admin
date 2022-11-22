import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import menuStore from './modules/MenuStore'

const store = new Vuex.Store({
  modules: {
    menuStore
  }
});

export default store;
