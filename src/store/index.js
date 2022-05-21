import { createStore } from 'vuex'

// modules
import product from './modules/product'
import topics from './modules/topics'

export default createStore({
  state: {
    darkMode: false,
  },

  mutations: {
    changeDarkMode(state, mode){
      state.darkMode = mode;
    }
  },

  modules: {
    product,
    topics,
  }
  
})
